import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
})
export class HomeModule { }
