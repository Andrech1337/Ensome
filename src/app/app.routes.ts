import { Routes } from '@angular/router';

import { HomeComponent } from '@pages/home/home.component';
import { ContactComponent } from '@pages/contact/contact.component';
import { ServicesComponent } from '@pages/services/services.component';
import { TeamComponent } from '@pages/team/team.component';
import { SolutionsComponent } from '@pages/solutions/solutions.component';
import { BlogComponent } from './components/pages/blog/blog.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'team', component: TeamComponent },
    { path: 'solutions', component: SolutionsComponent },
    { path: 'blog', component: BlogComponent }
];

