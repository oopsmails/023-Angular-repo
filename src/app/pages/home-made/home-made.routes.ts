import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserListParentComponent } from "../home/signal/user-list/user-list-parent.component";
import { HomeMadeComponent } from "./home-made.component";

const routes: Routes = [
    { path: '', component: HomeMadeComponent, },
    { path: 'user-list', component: UserListParentComponent },
    { path: '**', component: HomeMadeComponent }, // for testing, if /home/notfound
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeMadeRoutingModule {
}
