import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule } from '@angular/forms';
/**
 * @description 
 * @author xiaobin
 * @export
 * @class MainModule
 */
@NgModule({
        imports: [
                CommonModule,
                FormsModule,
                MainRoutingModule,
        ],
        declarations: [MainComponent]
})
export class MainModule { }