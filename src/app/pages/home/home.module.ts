import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home.routes';

// const routes: Routes = [{
//   path: '',
//   component: PostsComponent,
//   children: [
//     { path: 'user-list', component: UserListParentComponent },
//   ],
// },
// ];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    // BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    // RouterModule.forChild(routes),
  ],
  exports: [],
})
export class HomeModule { }
