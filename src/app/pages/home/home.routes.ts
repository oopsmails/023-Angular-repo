import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserListParentComponent } from "../signal/user-list/user-list-parent.component";
import { HomeComponent } from "./home.component";

// export const routes: Routes = [
//     { path: '', component: HomeComponent }, // Route to the HomeComponent
//     { path: 'user-list', component: UserListParentComponent },
// ];

const routes: Routes = [{
    path: '',
    component: HomeComponent,
    children: [
        { path: 'user-list', component: UserListParentComponent },
    ],
},
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {
    static routes = routes;
}
