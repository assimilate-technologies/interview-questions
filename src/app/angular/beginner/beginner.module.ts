import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeginnerRoutingModule } from './beginner-routing.module';
import { BeginnerComponent } from './beginner.component';


@NgModule({
  declarations: [
    BeginnerComponent
  ],
  imports: [
    CommonModule,
    BeginnerRoutingModule
  ]
})
export class BeginnerModule { }
