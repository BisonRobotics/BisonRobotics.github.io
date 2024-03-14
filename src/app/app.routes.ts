import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactComponent } from './contact/contact.component';
import { NasaComponent } from './projects/nasa/nasa.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { CombatComponent } from './projects/combat/combat.component';
import { Ri3dComponent } from './projects/ri3d/ri3d.component';
import { SnowplowComponent } from './projects/snowplow/snowplow.component';
import { VexuComponent } from './projects/vexu/vexu.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Bison Robotics'
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        title: 'Bison Robotics | Projects'
    },
    {
        path: 'projects/combat',
        component: CombatComponent,
        title: 'Bison Robotics | Combat'
    },
    {
        path: 'projects/nasa',
        component: NasaComponent,
        title: 'Bison Robotics | NASA Lunabotics'
    },
    {
        path: 'projects/ri3d',
        component: Ri3dComponent,
        title: 'Bison Robotics | Ri3D'
    },
    {
        path: 'projects/snowplow',
        component: SnowplowComponent,
        title: 'Bison Robotics | Autonomous Snowplow'
    },
    {
        path: 'projects/vexu',
        component: VexuComponent,
        title: 'Bison Robotics | Vex U'
    },
    {
        path: 'get-involved',
        component: GetInvolvedComponent,
        title: 'Bison Robotics | Get Involved'
    },
    {
        path: 'sponsors',
        component: SponsorsComponent,
        title: 'Bison Robotics | Sponsors'
    },
    {
        path: 'calendar',
        component: CalendarComponent,
        title: 'Bison Robotics | Calendar'
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: 'Bison Robotics | Contact'
    }
];
