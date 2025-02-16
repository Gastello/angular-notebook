import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {ModulesComponent} from './modules.component';



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ModulesComponent],
  declarations: [ModulesComponent],
  providers: [],
})
export class ModulesModule { }
