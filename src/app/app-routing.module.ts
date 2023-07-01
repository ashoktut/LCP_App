import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {path: '', component:HomeComponent},

  // The below access module is lazy loaded and contains the login
  // Lazy loading is first done on the module level and then only on the component level
  {path: 'access', loadChildren:()=>import('./access/access.module').then(opt=>opt.AccessModule)},

  // Status component for page 404 - wrong url entered or no internet.
  // Note the double star ** to match the path with the valid paths
  {path: '**', component:StatusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
