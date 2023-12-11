import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/dashboard/head/head.component';
import { ScriptComponent } from './components/dashboard/script/script.component';
import { SideBarComponent } from './components/dashboard/side-bar/side-bar.component';
import { CompetitionsComponent } from './components/dashboard/competitions/competitions.component';
import { RegisterComponent } from './components/dashboard/register/register.component';
import { PodiumComponent } from './components/dashboard/podium/podium.component';
import { ResultsComponent } from './components/dashboard/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ScriptComponent,
    SideBarComponent,
    CompetitionsComponent,
    RegisterComponent,
    PodiumComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
