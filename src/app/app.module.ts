import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactComponent } from './contact/contact.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { CombatComponent } from './projects/combat/combat.component';
import { NasaComponent } from './projects/nasa/nasa.component';
import { Ri3dComponent } from './projects/ri3d/ri3d.component';
import { SnowplowComponent } from './projects/snowplow/snowplow.component';
import { VexuComponent } from './projects/vexu/vexu.component';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './projects/project/project.component';

@NgModule({
  imports:      [
    BrowserModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    CalendarComponent,
    CombatComponent,
    ContactComponent,
    GetInvolvedComponent,
    HomeComponent,
    NasaComponent,
    NavbarComponent,
    ProjectComponent,
    ProjectsComponent,
    Ri3dComponent,
    SnowplowComponent,
    SponsorsComponent,
    VexuComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }