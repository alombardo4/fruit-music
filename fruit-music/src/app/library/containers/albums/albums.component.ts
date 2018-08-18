import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../../services/music/music.service';
import { Album } from '../../../models/album';
import { PageEvent, MatDialog } from '@angular/material';
import { PaginationEvent } from '../../../shared-components/paginator/paginator.component';
import { AlbumDetailsModalService } from '../../../shared-components/album-details/album-details-modal.service';

@Component({
  selector: 'app-albums',
  template: `
    <div class="container">
      <app-album *ngFor="let album of albums" [album]="album" (click)="handleAlbumClick($event)"></app-album>
    </div>
    <app-paginator [pageSize]="pageSize" [pageIndex]="pageIndex" [pageSizeOptions]="[25, 50, 100]" (page)="handlePage($event)">
    </app-paginator>
  `,
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  loading = true;
  pageSize = 50;
  pageIndex = 0;

  albums: Album[] = [];

  constructor(private musicService: MusicService,
              private albumDetailsModalService: AlbumDetailsModalService) { }

  ngOnInit() {
    this.getAlbums();
  }

  handlePage(event: PaginationEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getAlbums();
  }

  getAlbums() {
    this.loading = true;
    this.musicService.getLibraryAlbums(this.pageIndex, this.pageSize)
    .then((albums: Album[]) => {
      this.albums = albums;
      this.loading = false;
    })
    .catch(err => {
      console.error(err);
      this.loading = false;
    });
  }

  handleAlbumClick(album: Album) {
    this.albumDetailsModalService.openModal({ album: album });
  }
}
