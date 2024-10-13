import { AsyncPipe, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignalUserListComponent } from '../home/signal/signal-user-list/signal-user-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, SignalUserListComponent, AsyncPipe, NgStyle],
  templateUrl: './home-made.component.html',
  styleUrl: './home-made.component.scss'
})
export class HomeMadeComponent {

}

