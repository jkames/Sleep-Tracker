import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import * as moment from 'moment';

@Component({
  selector: 'app-sleeptracker',
  templateUrl: './sleeptracker.page.html',
  styleUrls: ['./sleeptracker.page.scss'],
})
export class SleeptrackerPage implements OnInit {

  constructor(private sleepService:SleepService) { }

  ngOnInit() {
  }

  startTime = new Date().toISOString();
  endTime = new Date().toISOString();
  clicked()
  {
    let temp = new OvernightSleepData(moment(this.startTime, "YYYY/MM/DD HH:mm").toDate(), moment(this.endTime, "YYYY/MM/DD HH:mm").toDate());
    SleepService.AllOvernightData.push(temp);
    console.log("clicked");
  }

}
