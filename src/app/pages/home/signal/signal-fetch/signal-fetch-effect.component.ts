import { Component, effect, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of, Subscription } from 'rxjs';


@Component({
  selector: 'signal-fetch-effect',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signal-fetch-effect.component.html',
  styleUrl: './signal-fetch-effect.component.scss'
  ,
})
export class SignalFetchEffectComponent {

  dataSeriesId = input.required<string>();
  fromDate = input.required<Date>();
  toDate = input.required<Date>();

  data = signal<unknown | null>(null);

  constructor() {
    let dataLoadSub: Subscription | null = null;
    effect(
      () => {
        console.log('effect executed');

        dataLoadSub?.unsubscribe();
        dataLoadSub = this.fetch(
          this.dataSeriesId(),
          this.fromDate(),
          this.toDate()
        ).subscribe((res) => {
          this.data.set(res);
        });
      },
      { allowSignalWrites: true }
    );
  }

  private fetch(id: string, from: Date, to: Date) {
    return of(Math.random() * 100);
  }
}

