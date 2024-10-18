import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  delay,
  Observable,
  of,
  ReplaySubject,
  Subject,
  switchMap,
  tap,
  timer
} from 'rxjs';
import { RandomItem, RsSearchResult } from '../models/shared.model';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  // TIMER_REFRESH = 1 * 60 * 60 * 1000;
  TIMER_REFRESH = 5 * 1000;

  private onDestroy$: Subject<boolean> = new Subject();

  // private _randomItemData$ = new BehaviorSubject<RandomItem[]>([]);
  // private _randomItemData$ = new BehaviorSubject<void>(undefined);
  private timer$ = timer(this.TIMER_REFRESH, this.TIMER_REFRESH)
    .pipe(
    // takeUntil(this.onDestroy$)
  );

  public defaultRandomItemSearchRs: RsSearchResult<RandomItem> = {
    resultList: [
      {
        id: -1,
        name: '',
        desc: '',
        text: '',
        price: -1,
        imageUrl: '',
        quantity: -1,
      },
    ],
  };

  constructor(private httpClient: HttpClient) {
    // this.timer$
    //   .pipe(
    //     tap(() => console.log('timer updating .....'))
    //   )
    //   .subscribe((x) => this.updateData());

    this.timer$
      .pipe(
        tap(() => console.log('timer updating .....')),
        switchMap(() => {
          return this.updateData();
        })
      ).subscribe();
    // .subscribe((x) => this.updateData());
  }

  // public randomItemDataSource$ = this.getRandomItems(Math.floor(Math.random() * 6) + 1)
  //   .pipe(
  //     take(1),
  //     tap(items => console.log('randomItemDataSource$ result.size: ', (items && items.length) || '0'))
  //   );

  // public randomItemReplay$: Observable<RandomItem[]> = this._randomItemData$.pipe(
  //   tap(() => console.log('randomItemReplay$ ....')),
  //   switchMap((resp) => this.randomItemDataSource$),
  //   shareReplay(1)
  // );

  // public updateDataOrig() {
  //   console.log('updateData .....')
  //   // this._randomItemData$.next([]);
  //   this._randomItemData$.next(undefined);
  // }

  randomItems$: ReplaySubject<RandomItem[]> = new ReplaySubject(1);
  updateData(): Observable<RandomItem[]> {
    console.log('updateData .....')
    // Check if the users$ ReplaySubject is already initialized
    // if (!this.randomItems$) {
    //   this.randomItems$ = new ReplaySubject(1);  // Buffer the last emitted value
    // }
    this.getRandomItems(Math.floor(Math.random() * 6) + 1, 6000).pipe(
      tap(items => {
        console.log('updateData result.size: ', (items && items.length) || '0')
        this.randomItems$.next(items)
      })
    ).subscribe();


    return this.randomItems$.asObservable();
  }

  getRandomItems(numOfItems?: number, delayInMs?: number): Observable<RandomItem[]> {
    console.log('getRandomItems .....');
    const items: RandomItem[] = this.makeMockRandomItems(numOfItems);
    if (!delayInMs) {
      return of(items);
    }
    return of(items).pipe(delay(delayInMs));
  }

  searchRandomItems(searchText: string): Observable<RsSearchResult<RandomItem>> {
    if (!searchText || searchText === '' || searchText.length < 1) {
      return of(this.defaultRandomItemSearchRs);
    }

    // if 30000, then browser freezing when rendering search result items because too many
    const items: RandomItem[] = this.makeMockRandomItems(300).filter((item) =>
      item.name.includes(searchText)
    );
    const result: RsSearchResult<RandomItem> = { resultList: items };
    return of(result).pipe(
      tap((resp) => console.log('searchText: ', searchText, 'returning: ', resp.resultList.length)),
      delay(2000)
    );
  }

  makeMockRandomItems(numOfItems?: number): RandomItem[] {
    if (!numOfItems) {
      numOfItems = 20;
    }
    const items: RandomItem[] = [];
    for (let i = 0; i < numOfItems; i++) {
      items.push({
        id: i,
        name: 'randomItem name ' + i,
        desc: 'randomItem desc ' + i,
        text: 'randomItem text ' + i,
        price: i,
        imageUrl: 'randomItem imageUrl ' + i,
        quantity: i,
      });
    }
    return items;
  }

  cleanUp(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
