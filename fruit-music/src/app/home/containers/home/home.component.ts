import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../../services/music/music.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
    <button (click)="handleLogout()">Log Out</button>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private musicService: MusicService,
              private router: Router) { }

  ngOnInit() {
  }

  handleLogout() {
    this.musicService.unauthorize()
      .then(res => {
        this.router.navigate(['/login']);
      });
  }
}
