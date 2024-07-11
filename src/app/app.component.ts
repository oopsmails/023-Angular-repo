import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';
import { NavBar1Component } from './components/navbar1/navbar1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBar1Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private onDestroy$: Subject<boolean> = new Subject();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
