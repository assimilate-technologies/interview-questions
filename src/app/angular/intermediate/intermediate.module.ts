import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntermediateRoutingModule } from './intermediate-routing.module';
import { IntermediateComponent } from './intermediate.component';


@NgModule({
  declarations: [
    IntermediateComponent
  ],
  imports: [
    CommonModule,
    IntermediateRoutingModule
  ]
})
export class IntermediateModule { }
