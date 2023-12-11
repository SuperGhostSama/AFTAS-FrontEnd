import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionsComponent } from './components/dashboard/competitions/competitions.component';
import { RegisterComponent } from './components/dashboard/register/register.component';
import { PodiumComponent } from './components/dashboard/podium/podium.component';
import { ResultsComponent } from './components/dashboard/results/results.component';

const routes: Routes = [
  {
    path : 'Competitions',
    component : CompetitionsComponent ,
    title : 'Competitions Page'
  },
  {
    path : 'Register',
    component : RegisterComponent ,
    title : 'Register Page'
  },
  {
    path : 'Podium',
    component : PodiumComponent ,
    title : 'Podium Page'
  },
  {
    path : 'Results',
    component : ResultsComponent ,
    title : 'Results Page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
