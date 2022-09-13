import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeginnerComponent } from './beginner.component';

const routes: Routes = [{ path: '', component: BeginnerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeginnerRoutingModule { }
