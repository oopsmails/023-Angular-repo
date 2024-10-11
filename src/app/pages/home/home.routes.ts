import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostsComponent } from "../posts/posts.component";
import { UserListParentComponent } from "../signal/user-list/user-list-parent.component";

// export const routes: Routes = [
//     { path: '', component: HomeComponent }, // Route to the HomeComponent
//     { path: 'user-list', component: UserListParentComponent },
// ];

// const routes: Routes = [{
//     path: '',
//     // component: HomeComponent, // testing
//     component: PostsComponent,
//     children: [
//         { path: 'userlist', component: UserListParentComponent },
//         { path: '**', component: NotFoundComponent },
//     ],
// },
// ];



const routes: Routes = [
    {
        path: '',
        component: PostsComponent,
        // children: [
        //     { path: 'userlist', component: UserListParentComponent },
        //     // { path: 'add-product', component: AddProductComponent },
        //     // { path: '', redirectTo: '/admin/update-user', pathMatch: 'full' },
        // ],
    },
    { path: 'userlist', component: UserListParentComponent },
    { path: '**', component: UserListParentComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {
    // static routes = routes;
}
