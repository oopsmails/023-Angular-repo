import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { User } from '../../../shared/models/user';
import { SignalUserListComponent } from '../../home/signal/signal-user-list/signal-user-list.component';
import { PostsService } from './services/posts.service';
import { PostInterface } from './types/post.interface';

export interface PostsStateInterface {
  posts: PostInterface[];
  isLoading: boolean;
  error: string | null;
}

export const PostsStore = signalStore(
  withState<PostsStateInterface>({
    posts: [],
    error: null,
    isLoading: false,
  }),
  withComputed((store) => ({
    postsCount: computed(() => store.posts().length),
  })),
  withMethods((store, postsService = inject(PostsService)) => ({
    addPost(title: string) {
      const newPost: PostInterface = {
        id: crypto.randomUUID(),
        title,
      };
      const updatedPosts = [...store.posts(), newPost];
      patchState(store, { posts: updatedPosts });
    },
    removePost(id: string) {
      const updatedPosts = store.posts().filter((post) => post.id !== id);
      patchState(store, { posts: updatedPosts });
    },
    addPosts(posts: PostInterface[]) {
      patchState(store, { posts });
    },
    loadPosts: rxMethod<void>(
      pipe(
        switchMap(() => {
          return postsService.getPosts().pipe(
            tap((posts) => {
              patchState(store, { posts });
            })
          );
        })
      )
    ),
  })),
  withHooks({
    onInit(store) {
      store.loadPosts();
    },
  })
);

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, SignalUserListComponent],
  providers: [PostsStore],
})
export class PostsComponent {
  fb = inject(FormBuilder);
  postsService = inject(PostsService);
  store = inject(PostsStore);
  addForm = this.fb.nonNullable.group({
    title: '',
  });
  // state = signalState<PostsStateInterface>({
  //   posts: [],
  //   error: null,
  //   isLoading: false,
  // });

  // ngOnInit(): void {
  //   this.postsService.getPosts().subscribe((posts) => {
  //     this.store.addPosts(posts);
  //   });
  // }

  onAdd(): void {
    this.store.addPost(this.addForm.getRawValue().title);
    this.addForm.reset();
  }

  // removePost(id: string): void {
  //   const updatedPosts = this.state.posts().filter((post) => post.id !== id);
  //   patchState(this.state, (state) => ({ ...state, posts: updatedPosts }));
  // }


  users: User[] = [
    { id: "1", name: 'Michael', lastName: 'Scott', username: 'michael.scott' },
    { id: "2", name: 'Dwight', lastName: 'Schrute', username: 'dwight.schrute' },
    { id: "3", name: 'Angela', lastName: 'Martin', username: 'angela.martin' },
    { id: "4", name: 'Jim', lastName: 'Halpert', username: 'jim.halpert' },
  ];

  addUser() {
    this.users = [
      {
        id: "5",
        name: 'Andy',
        lastName: 'Bernard',
        username: 'andy.bernard',
      },
      ...this.users,
    ];
    console.log('Current Users', this.users);
  }
}
