import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/dashboard/head/head.component';
import { ScriptComponent } from './components/dashboard/script/script.component';
import { SideBarComponent } from './components/dashboard/side-bar/side-bar.component';
import { CompetitionsComponent } from './components/dashboard/competitions/competitions.component';
import { PodiumComponent } from './components/dashboard/podium/podium.component';
import { ResultsComponent } from './components/dashboard/results/results.component';
import { MembersComponent } from './components/dashboard/members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ScriptComponent,
    SideBarComponent,
    CompetitionsComponent,
    PodiumComponent,
    ResultsComponent,
    MembersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }