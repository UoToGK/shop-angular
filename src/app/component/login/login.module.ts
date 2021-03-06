import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { HostlistenerComponent, ExeHighlight, CountClicks, ExeButtonPress } from '../hostlistener/hostlistener.component';
import { TemplateComponent } from '../template/template.component';
import { ViewchildComponent, SonComponent } from '../viewchild/viewchild.component';
import { ParentComponent, ChildComponent } from '../viewchild/viewchild.component';
import { SubscribeComponent, NgOnChangeComponent } from '../subscribe/subscribe.component';
import { UpdateviewComponent, ViewSonComponent } from '../updateview/updateview.component';
import { DialogComponent } from '../dialog/dialog.component';
import { InputRadioComponent } from '../input-radio/input-radio.component';
import { SwiperTableComponent } from '../swiper-table/swiper-table.component';

@NgModule({
  imports: [CommonModule, FormsModule, LoginRoutingModule],
  declarations: [
    LoginComponent,
    HostlistenerComponent,
    ExeHighlight,
    CountClicks,
    ExeButtonPress,
    TemplateComponent,
    ViewchildComponent,
    ParentComponent,
    ChildComponent,
    SonComponent,
    SubscribeComponent,
    NgOnChangeComponent,
    UpdateviewComponent,
    ViewSonComponent,
    DialogComponent,
    InputRadioComponent,
    SwiperTableComponent
  ]
})
export class LoginModule {}
