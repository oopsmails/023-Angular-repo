import { AsyncPipe, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignalUserListComponent } from '../home/signal/signal-user-list/signal-user-list.component';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [RouterModule, SignalUserListComponent, AsyncPipe, NgStyle],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent {

}

