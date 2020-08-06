import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SleeptrackerPage } from './sleeptracker.page';

const routes: Routes = [
  {
    path: '',
    component: SleeptrackerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SleeptrackerPage]
})
export class SleeptrackerPageModule {}
