import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignalUserListParentComponent } from "../home/signal/signal-user-list/signal-user-list-parent.component";
import { ExampleComponent } from "./example.component";
import { PageClickComponent } from "./page-click/page-click.component";
import { PostsComponent } from "./posts/posts.component";
import { TimerReplayComponent } from "./timer-replay/timer-replay.component";
import { UserSearchComponent } from "./user-search/user-search.component";

const routes: Routes = [
    { path: '', component: ExampleComponent, },
    { path: 'signal-user-list', component: SignalUserListParentComponent },
    {
        path: 'usersearch',
        component: UserSearchComponent,
    },
    {
        path: 'pageclick',
        component: PageClickComponent,
    },
    {
        path: 'posts',
        component: PostsComponent,
    },
    {
        path: 'timer-replay',
        component: TimerReplayComponent,
    },
    { path: '**', component: ExampleComponent }, // for testing, if /home/notfound
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExampleRoutingModule {
}
