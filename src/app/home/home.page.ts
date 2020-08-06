import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	data = SleepService.AllOvernightData;	
	data2 = SleepService.AllSleepinessData;

	constructor(public sleepService:SleepService) {
	}

	ngOnInit() {
		console.log(this.allSleepData);
		this.data = SleepService.AllOvernightData;	
		this.data2 = SleepService.AllSleepinessData;
	}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}

	logEvent()
	{
		this.data = SleepService.AllOvernightData;	
		console.log("clicked");
	}
}