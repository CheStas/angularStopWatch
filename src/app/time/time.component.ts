import { Component, OnInit } from '@angular/core';
import { AppService } from './../services/app.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html'
})
export class TimeComponent implements OnInit {

  constructor(private appService: AppService ) { }

  time = '11:11:11';

  ngOnInit() {
      setInterval(() => {
          this.time = this.appService.beautyTimeLocal(Date.now());
      }, 500);
  }
}
