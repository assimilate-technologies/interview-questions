import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular.component';

const routes: Routes = [{ path: '', component: AngularComponent }, { path: 'beginner', loadChildren: () => import('./beginner/beginner.module').then(m => m.BeginnerModule) }, { path: 'intermediate', loadChildren: () => import('./intermediate/intermediate.module').then(m => m.IntermediateModule) }, { path: 'adavanced', loadChildren: () => import('./advanced/advanced.module').then(m => m.AdvancedModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
