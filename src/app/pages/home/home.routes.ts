import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { UserListParentComponent } from "./signal/user-list/user-list-parent.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    { path: 'user-list', component: UserListParentComponent },
    { path: '**', component: HomeComponent }, // for testing, if /home/notfound
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {
}
