import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { environment } from '~/environments/environment'


const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full'  },
  { path: 'signin-callback', loadChildren: 
    () => import('./landing/landing.module').then(m => m.LandingModule) },
  { path: 'signout-callback', loadChildren: 
    () => import('./landing/landing.module').then(m => m.LandingModule) },
  { path: 'products', loadChildren: 
    () => import('./products/products.module').then(m => m.ProductsModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: !environment.production } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
