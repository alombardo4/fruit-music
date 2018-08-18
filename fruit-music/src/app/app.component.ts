import { Component, OnInit } from '@angular/core';
import { MusicService } from './services/music/music.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <button *ngIf="!hideSidenav" mat-icon-button (click)="handleToggleSidenav()"><mat-icon>menu</mat-icon></button>
      <span>Fruit Music</span>
    </mat-toolbar>
    <mat-drawer-container class="container">
      <mat-drawer
        *ngIf="!hideSidenav"
        [style.width.px]="300"
        mode="push"
        [opened]="isSidenavOpen"
        (openedChange)="handleSidenavOpenChanged($event)">
        <p>Hello world</p>
      </mat-drawer>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </mat-drawer-container>
    <app-now-playing></app-now-playing>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  hideSidenav = false;

  isSidenavOpen = false;

  constructor(private musicService: MusicService,
              private router: Router) {

  }

  ngOnInit() {
    if (!this.musicService.isAuthorized()) {
      this.router.navigate(['/login']);
    }
    this.router.events.subscribe((event: NavigationEnd) => {
      if (event.urlAfterRedirects === '/login') {
        this.hideSidenav = true;
      } else {
        this.hideSidenav = false;
      }
    });
  }

  handleToggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  handleSidenavOpenChanged(isOpen: boolean) {
    this.isSidenavOpen = isOpen;
  }
}
