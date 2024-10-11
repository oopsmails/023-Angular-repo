import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserListParentComponent } from '../signal/user-list/user-list-parent.component';
import { HomeComponent } from './home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    { path: 'user-list', component: UserListParentComponent },
  ],
},
];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    // BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // HomeRoutingModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
})
export class HomeModule { }
