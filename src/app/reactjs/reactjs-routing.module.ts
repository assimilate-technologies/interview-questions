import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactjsComponent } from './reactjs.component';

const routes: Routes = [{ path: '', component: ReactjsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactjsRoutingModule { }
