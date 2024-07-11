import { AsyncPipe, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subject, fromEvent, map, merge, scan } from 'rxjs';
import { UserSearchComponent } from '../user-search/user-search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, UserSearchComponent, AsyncPipe, NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected reset$ = new Subject<void>();

  clicks$ = merge(
    fromEvent<PointerEvent>(document, 'click').pipe(map(accumulationHandler)),
    this.reset$.pipe(map(resetHandler))
  ).pipe(
    scan((state: PointerEvent[], stateHandlerFn) => stateHandlerFn(state), [])
  );

}

const accumulationHandler = (event: PointerEvent) => (state: PointerEvent[]) =>
  [...state, event];
const resetHandler = (event: void) => (state: PointerEvent[]) => [];
