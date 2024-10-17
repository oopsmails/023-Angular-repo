import { DatePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignalFetchEffectComponent } from './signal-fetch-effect.component';
import { SignalFetchRxjsComponent } from './signal-fetch-rxjs.component';

@Component({
  selector: 'signal-fetch-parent',
  standalone: true,
  imports: [FormsModule, SignalFetchRxjsComponent, SignalFetchEffectComponent, DatePipe],
  templateUrl: './signal-fetch-parent.component.html',
  styleUrl: './signal-fetch-parent.component.scss'
})
export class SignalFetchParentComponent {
  id1 = signal('1');
  from1 = signal('2020-01-01');
  to1 = signal('2021-01-01');

  fromDate1 = computed(() => new Date(this.from1()));
  toDate1 = computed(() => new Date(this.to1()));


  from2 = signal(this.randomizeDate());
  to2 = signal(this.randomizeDate());
  id2 = signal(this.randomizeId());

  randomizeDate(): Date {
    return new Date(Date.now() - 30 * Math.random() * 24 * 60 * 60 * 1000);
  }
  randomizeId(): string {
    return Math.floor(Math.random() * 1e6).toString();
  }
}

