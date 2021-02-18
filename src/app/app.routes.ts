import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent},
    { path: 'pricing', pathMatch: 'full', loadChildren: './pricing/pricing.module#PricingModule'},
    { path: 'faq', pathMatch: 'full', loadChildren: './pricing/pricing.module#PricingModule'},
    { path: 'work', pathMatch: 'full', loadChildren: './works/works.module#WorksModule'},
    { path: 'services', pathMatch: 'full', loadChildren: './services/services.module#ServicesModule'}
];
