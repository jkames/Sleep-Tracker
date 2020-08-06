import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StanfordsleepinessPage } from './stanfordsleepiness.page';

const routes: Routes = [
  {
    path: '',
    component: StanfordsleepinessPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StanfordsleepinessPage]
})
export class StanfordsleepinessPageModule {}
