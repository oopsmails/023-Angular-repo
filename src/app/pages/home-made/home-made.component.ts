import { AsyncPipe, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListComponent } from '../home/signal/user-list/user-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, UserListComponent, AsyncPipe, NgStyle],
  templateUrl: './home-made.component.html',
  styleUrl: './home-made.component.scss'
})
export class HomeMadeComponent {

}

