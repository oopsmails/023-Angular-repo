import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserListParentComponent } from "../home/signal/user-list/user-list-parent.component";
import { ExampleComponent } from "./example.component";

const routes: Routes = [
    { path: '', component: ExampleComponent, },
    { path: 'user-list', component: UserListParentComponent },
    { path: '**', component: ExampleComponent }, // for testing, if /home/notfound
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExampleRoutingModule {
}
