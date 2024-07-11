import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageClickComponent } from './pages/page-click/page-click.component';
import { PostsComponent } from './pages/posts/posts.component';
import { UserSearchComponent } from './pages/user-search/user-search.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
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

];
