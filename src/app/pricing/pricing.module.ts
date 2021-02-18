import { NgModule } from '@angular/core';
import { PricingComponent } from './pricing.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
@NgModule({
  declarations: [
    PricingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        { path: '', component: PricingComponent }
      ]),
      ScrollToModule.forRoot(),
  ],
  providers: []
})
export class PricingModule { }
