import { AsyncPipe, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListComponent } from '../home/signal/user-list/user-list.component';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [RouterModule, UserListComponent, AsyncPipe, NgStyle],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent {

}

