import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'signin-callback', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
  { path: 'signout-callback', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
