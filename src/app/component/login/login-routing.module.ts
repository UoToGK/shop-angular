import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { HostlistenerComponent } from '../hostlistener/hostlistener.component';
import { TemplateComponent } from '../template/template.component';
import { ViewchildComponent } from '../viewchild/viewchild.component';
import { SubscribeComponent } from '../subscribe/subscribe.component';
import { UpdateviewComponent } from '../updateview/updateview.component';
import { DialogComponent } from '../dialog/dialog.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "hostlistener",
    component: HostlistenerComponent
  },
  {
    path: "templateRef",
    component: TemplateComponent
  },
  {
    path: "viewchild",
    component: ViewchildComponent
  },
  {
    path: "sub",
    component: SubscribeComponent
  },
  {
    path: "updateview",
    component: UpdateviewComponent
  },
  {
    path: "dialog",
    component: DialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
