import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntermediateComponent } from './intermediate.component';

const routes: Routes = [{ path: '', component: IntermediateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntermediateRoutingModule { }
