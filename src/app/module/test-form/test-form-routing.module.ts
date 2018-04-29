import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestFormComponent } from '../../component/test-form/test-form.component';

const routes: Routes = [
  {
    path: '',
    component: TestFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestFormRoutingModule { }
