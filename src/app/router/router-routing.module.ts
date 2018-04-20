import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../component/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "index",
    loadChildren: "../component/login/login.module#LoginModule"
  },
  {
    path: "",
    redirectTo: "/index",
    pathMatch: "full"
  },

  {
    path: "app",//注册模块
    loadChildren: "../module/system/home/main.module#MainModule"
  },

  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
