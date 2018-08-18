import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../../services/music/music.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <p>
      login works!
    </p>
    <p *ngIf="errorMessage">{{errorMessage}}</p>
    <button (click)="handleAuthorize()">Authorize Apple Music</button>
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string;

  constructor(private musicService: MusicService,
              private router: Router) { }

  ngOnInit() {
  }

  handleAuthorize() {
    this.errorMessage = '';
    this.musicService.authorize()
      .then(res => {
        if (res) {
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = 'Fruit Music was unable to authenticate with Apple Music. Please try again.';
        }
      })
      .catch(err => {
        console.error(err);
        this.errorMessage = 'Fruit Music was unable to authenticate with Apple Music. Please try again later.';
      });
  }
}
