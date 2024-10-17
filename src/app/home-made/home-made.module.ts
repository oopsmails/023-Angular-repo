import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeMadeRoutingModule } from './home-made.routes';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeMadeRoutingModule,
  ],
  exports: [],
})
export class HomeMadeModule { }
