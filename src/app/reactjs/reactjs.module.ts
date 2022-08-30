import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactjsRoutingModule } from './reactjs-routing.module';
import { ReactjsComponent } from './reactjs.component';


@NgModule({
  declarations: [
    ReactjsComponent
  ],
  imports: [
    CommonModule,
    ReactjsRoutingModule
  ]
})
export class ReactjsModule { }
