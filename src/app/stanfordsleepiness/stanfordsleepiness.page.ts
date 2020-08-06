import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import * as moment from 'moment';

@Component({
  selector: 'app-stanfordsleepiness',
  templateUrl: './stanfordsleepiness.page.html',
  styleUrls: ['./stanfordsleepiness.page.scss'],
})
export class StanfordsleepinessPage implements OnInit {

  constructor(sleepService:SleepService) { }

  ngOnInit() {
  }
  sleepValue;
  time = new Date().toISOString();
  clicked()
  {
    let temp = new StanfordSleepinessData(this.sleepValue, moment(this.time, "YYYY/MM/DD HH:mm").toDate());
    SleepService.AllSleepinessData.push(temp);
    console.log("clicked");
  }
}
