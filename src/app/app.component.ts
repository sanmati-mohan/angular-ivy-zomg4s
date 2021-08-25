import { AfterViewInit, Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
  name = 'Angular ' + VERSION.major;
  hr;
  sec;
  min;
  deadline;
  timeinterval;

  constructor(){
  }

  ngAfterViewInit(){
    this.deadline = new Date( 24 * 60 * 60 * 1000);
    this.initializeClock(this.deadline);
  }

  getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.now();
    console.log(t);
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  initializeClock( endtime) {
    // var clock = document.getElementById(id);
    // var hoursSpan = clock.querySelector('.hours');
    // var minutesSpan = clock.querySelector('.minutes');
    // var secondsSpan = clock.querySelector('.seconds');

    this.updateClock(endtime);
    this.timeinterval = setInterval(this.updateClock, 1000);
  }

  updateClock(endtime) {
    var t = this.getTimeRemaining(endtime);

    this.hr = ('0' + t.hours).slice(-2);
    this.min = ('0' + t.minutes).slice(-2);
    this.sec = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(this.timeinterval);
    }
  }

}
