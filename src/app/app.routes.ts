import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './examples/posts/posts.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },  // Redirect to 'home' by default
    { path: '', component: HomeComponent, pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () =>
            import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'hm',
        loadChildren: () =>
            import('./home-made/home-made.module').then(m => m.HomeMadeModule)
    },
    {
        path: 'eg',
        loadChildren: () =>
            import('./examples/example.module').then(m => m.ExampleModule)
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

