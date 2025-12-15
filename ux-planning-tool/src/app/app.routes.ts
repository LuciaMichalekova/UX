import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanPiComponent } from './plan-pi/plan-pi.component';
import { ViewPIsComponent } from './view-pis/view-pis.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'plan-pi', component: PlanPiComponent },
    { path: 'view-pis', component: ViewPIsComponent }    
];