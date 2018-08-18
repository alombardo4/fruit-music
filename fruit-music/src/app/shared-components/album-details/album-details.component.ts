import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AlbumDetailsModalData } from './album-details-modal.service';
import { MusicService } from '../../services/music/music.service';
import { Album } from '../../models/album';
import { AlbumDetails } from '../../models/album-details';

@Component({
  selector: 'app-album-details',
  template: `
    <div class="album">
      <app-artwork [artwork]="album.attributes.artwork" [width]="150" [height]="150"></app-artwork>
      <div class="basic-info">
        <h3>{{album.attributes.name}}</h3>
        <p>{{album.attributes.artistName}}</p>
        <p>{{album.attributes.trackCount}} Tracks</p>
        <button mat-icon-button (click)="playAlbum()"><mat-icon>play_circle_filled</mat-icon></button>
      </div>
    </div>
    <div class="track-list" *ngIf="album.relationships?.tracks.data">
      <mat-list>
        <mat-list-item *ngFor="let track of album.relationships.tracks.data">
          <p>{{track.attributes.name}} ({{getTime(track.attributes.durationInMillis)}})</p>
        </mat-list-item>
      </mat-list>
    </div>
  `,
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {
  album: Album | AlbumDetails;

  constructor(@Inject(MAT_DIALOG_DATA) data: AlbumDetailsModalData,
              private musicService: MusicService) {
                this.album = data.album;
              }

  ngOnInit() {
    let promise;
    if (this.album.type === 'library-albums') {
      promise = this.musicService.getLibraryAlbum(this.album.id);
    } else {
      promise = this.musicService.getAlbum(this.album.id);
    }
    promise
      .then(details => {
        console.log(details);
        this.album = details;
      })
      .catch(err => {
        console.error(err);
      })
  }

  getTime(millis: number) {
    return this.musicService.getFormattedTime(millis);
  }
  
  playAlbum() {
    this.musicService.playAlbum(this.album.id);
  }

}
