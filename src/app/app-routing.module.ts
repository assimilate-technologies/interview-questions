import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'angular/beginner'
  },
  {
    path: 'angular',
    loadChildren: () => import('./angular/angular.module').then(m => m.AngularModule)
  },
  {
    path: 'reactjs',
    loadChildren: () => import('./reactjs/reactjs.module').then(m => m.ReactjsModule)
  },
  {
    path: 'javascript',
    loadChildren: () => import('./javascript/javascript.module').then(m => m.JavascriptModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {
    path: '**', redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
