import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  takeUntil,
  tap,
  timer
} from 'rxjs';
import { NavBarModel } from '../models/navbar1.model';

@Injectable({
  providedIn: 'root',
})
export class NavBar1Service {
  TIMER_REFRESH = 1 * 60 * 60 * 1000;

  private onDestroy$: Subject<boolean> = new Subject();

  private _itemData$ = new BehaviorSubject<void>(undefined);
  private timer$ = timer(this.TIMER_REFRESH, this.TIMER_REFRESH).pipe(takeUntil(this.onDestroy$));

  constructor(private httpClient: HttpClient) {
    this.timer$.subscribe((x: any) => this.updateData());
  }

  public updateData() {
    this._itemData$.next(undefined);
  }

  getNavBarConfig(): Observable<NavBarModel[]> {
    return (
      this.httpClient.get('assets/config/nav-bar-config.json') as Observable<NavBarModel[]>
    ).pipe(
      tap((items: NavBarModel[]) => console.log('getNavBarConfig result.size: ', (items && items.length) || '0'))
    );
  }

  cleanUp(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
