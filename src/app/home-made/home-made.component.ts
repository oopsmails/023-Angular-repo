import { AsyncPipe, NgStyle } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignalUserListComponent } from '../home/signal/signal-user-list/signal-user-list.component';
import { SharedDataService } from './../shared/services/shared.data.service';

@Component({
  selector: 'home-made',
  standalone: true,
  imports: [RouterModule, SignalUserListComponent, AsyncPipe, NgStyle],
  templateUrl: './home-made.component.html',
  styleUrl: './home-made.component.scss'
})
export class HomeMadeComponent implements OnInit, OnDestroy {
  sharedDataService = inject(SharedDataService); // memory leaking?

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.sharedDataService.cleanUp();
  }
}


