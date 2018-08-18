import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music/music.service';
import { Track } from '../../models/track';
import { PlaybackState } from '../../models/playback-state';

@Component({
  selector: 'app-now-playing',
  template: `
    <div class="now-playing mat-elevation-z8">
      <div class="artwork" *ngIf="track">
        <app-artwork [width]="44" [height]="44" [artwork]="track?.attributes.artwork"></app-artwork>
      </div>
      <div class="details">
        <h3>{{track?.title}}</h3>
        <p>{{track?.artistName}} - {{track?.albumName}}</p>
        <div class="buttons" *ngIf="currentState === 2 || currentState === 3">
          <button mat-icon-button (click)="handlePrevious()"><mat-icon>skip_previous</mat-icon></button>
          <button mat-icon-button *ngIf="currentState === 3" (click)="handlePlay()"><mat-icon>play_arrow</mat-icon></button>
          <button mat-icon-button *ngIf="currentState === 2" (click)="handlePause()"><mat-icon>pause</mat-icon></button>
          <button mat-icon-button (click)="handleSkip()"><mat-icon>skip_next</mat-icon></button>
        </div>
      </div>

    </div>
  `,
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {
  track: Track;
  currentState: PlaybackState;

  states = PlaybackState;

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.musicService.mediaItem().subscribe(data => {
      this.track = data;
    });
    this.musicService.playbackStatus().subscribe(data => {
      this.currentState = data;
    });
    // this.musicService.playbackProgress().subscribe(data => console.log('playbackProgress', data));
  }

  handlePause() {
    this.musicService.pause();
  }

  handlePlay() {
    this.musicService.play();
  }

  handleSkip() {
    this.musicService.next();
  }

  handlePrevious() {
    this.musicService.previous();
  }

}
