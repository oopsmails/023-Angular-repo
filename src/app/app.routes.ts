import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PageClickComponent } from './pages/page-click/page-click.component';
import { PostsComponent } from './pages/posts/posts.component';
import { UserSearchComponent } from './pages/user-search/user-search.component';

export const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },  // Redirect to 'home' by default
    { path: '', component: HomeComponent, pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () =>
            import('./pages/home/home.module').then(m => m.HomeModule)
    },
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
        path: '**',
        component: NotFoundComponent
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

