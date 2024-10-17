import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { SignalBasicComponent } from "./signal/signal-basic/signal-basic.component";
import { SignalFetchParentComponent } from "./signal/signal-fetch/signal-fetch-parent.component";
import { SignalUserListParentComponent } from "./signal/signal-user-list/signal-user-list-parent.component";

const routes: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'signal-basics', component: SignalBasicComponent },
    { path: 'signal-user-list', component: SignalUserListParentComponent },
    { path: 'signal-data-fetch', component: SignalFetchParentComponent },
    { path: '**', component: HomeComponent }, // for testing, if /home/notfound
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {
}
