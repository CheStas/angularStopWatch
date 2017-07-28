import { Component, OnInit} from '@angular/core';
import { AppService } from './../services/app.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  constructor(private appService: AppService ) {}

  time = 0;
  toDisplay = '00:00:00:000';
  toDisplayLap = '00:00:00:000';
  interval;
  isOn = false;
  offset = 0;
  lapInfo = {
      time: 0,
      current: 0,
      prev: 0,
      count: 0,
      avg: '00:00:00:000'
  };
  laps = [];

  ngOnInit() {}

  toggleStopWatch(): void {
      if (!this.isOn) {
          this.interval = setInterval(() => {
              this.time = this.time + (Date.now() - this.offset);
              this.offset = Date.now();
              this.toDisplay = this.appService.beautyTime(this.time);
              if (this.lapInfo.count !== 0) {
                 this.toDisplayLap = this.appService.beautyTime(this.time - this.lapInfo.time);
              }
          }, 10);
          this.isOn = true;
          this.offset = Date.now();
      } else {
          clearInterval(this.interval);
          this.isOn = false;
      }
  }

  lap(): void {
      this.lapInfo.prev = this.lapInfo.current;
      this.lapInfo.current = this.time - this.lapInfo.time;
      this.lapInfo.count++;
      this.lapInfo.time = this.time;
      this.lapInfo.avg = this.appService.beautyTime(this.time / this.lapInfo.count);

      this.laps.unshift({
          current: this.appService.beautyTime(this.lapInfo.current),
          currentRaw: this.lapInfo.current,
          count: this.lapInfo.count,
          prev: this.appService.beautyTime(this.lapInfo.prev),
          colorPrev: (this.lapInfo.current - this.lapInfo.prev) < 0 ?
          '-' + this.appService.beautyTime(-1 * (this.lapInfo.current - this.lapInfo.prev)) :
          this.appService.beautyTime(this.lapInfo.current - this.lapInfo.prev)
      });

      this.laps.forEach((el) => {
          el.colorAvg = (el.currentRaw - (this.time / this.lapInfo.count)) < 0 ?
          '-' + this.appService.beautyTime(-1 * (el.currentRaw - (this.time / this.lapInfo.count))) :
          this.appService.beautyTime(el.currentRaw - (this.time / this.lapInfo.count));
      });
  }

  reset(): void {
      this.time = 0;
      this.toDisplay = '00:00:00:000';
      this.toDisplayLap = '00:00:00:000';
      this.lapInfo = {
          time: 0,
          current: 0,
          prev: 0,
          count: 0,
          avg: '00:00:00:000'
      };
      this.laps = [];
  }
}
