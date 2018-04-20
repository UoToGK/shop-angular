import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { RouterRoutingModule } from './router/router-routing.module';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';


@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [BrowserModule, FormsModule, RouterRoutingModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: APP_BASE_HREF, useValue: "/" }
  ], //如果使用服务端渲染(SSR)就不能用这种,
  /**URL 中包含的 hash 信息是不会提交到服务端，所以若要使用 SSR (Server-Side Rendered) ，
   * 就不能使用 Hash 模式即不能使用 HashLocationStrategy 策略。
   * APP_BASE_HREF，用于设置资源 (图片、脚本、样式) 加载的基础路径。
   * 除了在 NgModule 中配置 provider 外，我们也可以在入口文件，如 index.html 文件 <base> 标签中设置基础路径。
   *  */
  bootstrap: [AppComponent]
})
export class AppModule {}
