import { AsyncPipe, NgStyle } from '@angular/common';
import { Component, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { RandomItem } from '../../shared/models/shared.model';
import { SharedDataService } from '../../shared/services/shared.data.service';

@Component({
  selector: 'timer-replay',
  standalone: true,
  imports: [RouterModule, AsyncPipe, NgStyle],
  templateUrl: './timer-replay.component.html',
  styleUrl: './timer-replay.component.scss'
})
export class TimerReplayComponent implements OnInit, OnDestroy {
  randomItemsData = signal<RandomItem[] | null>(null);

  source$ = inject(SharedDataService).randomItems$;

  constructor(private sharedDataService: SharedDataService) {
    let dataLoadSub: Subscription | null = null;
    effect(
      () => {
        console.log('effect executed');

        dataLoadSub?.unsubscribe();
        dataLoadSub = this.sharedDataService.randomItems$.subscribe((res) => {
          this.randomItemsData.set(res);
        });
      },
      { allowSignalWrites: true }
    );
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.sharedDataService.cleanUp();
  }
}


