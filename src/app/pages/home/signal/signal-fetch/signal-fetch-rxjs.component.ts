import { Component, computed, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { delay, of, switchMap } from 'rxjs';


@Component({
  selector: 'signal-fetch-rxjs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signal-fetch-rxjs.component.html',
  styleUrl: './signal-fetch-rxjs.component.scss'
  ,
})
export class SignalFetchRxjsComponent {

  dataSeriesId = input.required<string>();
  fromDate = input.required<Date>();
  toDate = input.required<Date>();

  params = computed(() => ({
    id: this.dataSeriesId(),
    from: this.fromDate(),
    to: this.toDate(),
  }));

  data = toSignal(
    toObservable(this.params).pipe(
      switchMap((params) => this.fetchData(params))
    )
  );

  private fetchData({ id, from, to }: { id: string; from: Date; to: Date }) {
    // here you'd typically use the angular http client to fetch the data
    // like this.http.get('api/' + id)
    return of(`Example data for id [${id}] from [${from}] to [${to}]`).pipe(
      delay(1000)
    );
  }
}

