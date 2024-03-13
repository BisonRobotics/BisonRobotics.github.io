import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'get-involved',
        component: GetInvolvedComponent
    },
    {
        path: 'sponsors',
        component: SponsorsComponent
    },
    {
        path: 'calendar',
        component: CalendarComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];
