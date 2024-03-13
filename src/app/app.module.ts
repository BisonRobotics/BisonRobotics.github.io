import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactComponent } from './contact/contact.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SponsorsComponent } from './sponsors/sponsors.component';

@NgModule({
  imports:      [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    CalendarComponent,
    ContactComponent,
    GetInvolvedComponent,
    HomeComponent,
    NavbarComponent,
    ProjectsComponent,
    SponsorsComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }