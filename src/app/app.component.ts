import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timeHidden = false;
  timerHidden = true;
  stopWatchHidden = true;

  changeTab(tab: string): void {
      if (tab === 'time' && this.timeHidden === true) {
          this.timeHidden = false;
          this.timerHidden = true;
          this.stopWatchHidden = true;
      }
      if (tab === 'timer' && this.timerHidden === true) {
          this.timeHidden = true;
          this.timerHidden = false;
          this.stopWatchHidden = true;
      }
      if (tab === 'stopWatch' && this.stopWatchHidden === true) {
          this.timeHidden = true;
          this.timerHidden = true;
          this.stopWatchHidden = false;
      }
  }
}
