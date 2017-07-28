import { Component, OnInit } from '@angular/core';
import { AppService } from './../services/app.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor(private appService: AppService ) { }

  toDisplay = '00:05:00:000';
  offset = 0;
  timeOffset;
  isOn = false;
  time = 5;
  timeMili = 1;
  interval;

  ngOnInit() { }

  toggleTimer(): void {

      if (!this.isOn) {

          this.isOn = true;

          if (this.offset === 0) {
              this.timeOffset = Date.now();
              this.timeMili = this.time * 60000;
          }

          this.interval = setInterval(() => {
              if (this.timeMili > 0) {
                  this.offset = Date.now() - this.timeOffset;
                  this.timeOffset = Date.now();
                  this.timeMili = this.timeMili - this.offset;
                  this.toDisplay = this.appService.beautyTime(this.timeMili);
              } else {
                  clearInterval(this.interval);
                  this.isOn = false;
                  this.reset();
              }
         }, 10);

      } else {
          clearInterval(this.interval);
          this.isOn = false;
      }
  }

  reset(): void {
      this.toDisplay = '00:05:00:000';
      this.offset = 0;
      this.time = 5;
      this.timeMili = 1;
  }

  changeTime(time): void {
      this.toDisplay = this.appService.beautyTime(time * 60000);
  }
}
