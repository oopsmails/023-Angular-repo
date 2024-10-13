import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignalUserListParentComponent } from "../home/signal/signal-user-list/signal-user-list-parent.component";
import { HomeMadeComponent } from "./home-made.component";

const routes: Routes = [
    { path: '', component: HomeMadeComponent, },
    { path: 'signal-user-list', component: SignalUserListParentComponent },
    { path: '**', component: HomeMadeComponent }, // for testing, if /home/notfound
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeMadeRoutingModule {
}
