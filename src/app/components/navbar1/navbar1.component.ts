import { AsyncPipe, NgStyle } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { fromEvent, Observable, Subject, takeUntil } from 'rxjs';

import { NavBarModel } from './models/navbar1.model';
import { NavBar1Service } from './services/navbar1.service';

@Component({
  selector: 'app-navbar1',
  standalone: true,
  imports: [RouterModule, AsyncPipe, NgStyle],
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.scss'],
})
export class NavBar1Component implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('navbar')
  navbarElementRef!: ElementRef;
  @ViewChild('menubar')
  menubarElementRef!: ElementRef;

  private onDestroy$: Subject<boolean> = new Subject();

  navBarConfig$!: Observable<NavBarModel[]>;

  constructor(private navBar1Service: NavBar1Service) { }

  ngOnInit() {
    this.navBarConfig$ = this.navBar1Service.getNavBarConfig();
  }

  ngAfterViewInit(): void {
    fromEvent(this.navbarElementRef.nativeElement, 'click')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((x) => {
        this.menubarElementRef.nativeElement?.click();
      });
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
