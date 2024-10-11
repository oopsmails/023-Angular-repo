import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserListParentComponent } from "../home/signal/user-list/user-list-parent.component";
import { PageClickComponent } from "../page-click/page-click.component";
import { PostsComponent } from "../posts/posts.component";
import { UserSearchComponent } from "../user-search/user-search.component";
import { ExampleComponent } from "./example.component";

const routes: Routes = [
    { path: '', component: ExampleComponent, },
    { path: 'user-list', component: UserListParentComponent },
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
    { path: '**', component: ExampleComponent }, // for testing, if /home/notfound
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExampleRoutingModule {
}
