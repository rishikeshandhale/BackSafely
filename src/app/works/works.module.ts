import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksComponent } from './works.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [WorksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: WorksComponent }
    ]),
  ]
})
export class WorksModule { }
