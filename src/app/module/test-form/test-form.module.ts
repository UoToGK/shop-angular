import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestFormRoutingModule } from './test-form-routing.module';
import { TestFormComponent } from '../../component/test-form/test-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TestFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TestFormComponent]
})
export class TestFormModule { }
