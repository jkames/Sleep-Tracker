import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'sleeptracker', loadChildren: './sleeptracker/sleeptracker.module#SleeptrackerPageModule' },  { path: 'stanfordsleepiness', loadChildren: './stanfordsleepiness/stanfordsleepiness.module#StanfordsleepinessPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
