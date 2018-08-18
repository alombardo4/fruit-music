import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworkComponent } from './artwork/artwork.component';
import { AlbumComponent } from './album/album.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { MatButtonModule, MatIconModule, MatSelectModule, MatDialogModule, MatListModule } from '@angular/material';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatListModule
  ],
  declarations: [ArtworkComponent, AlbumComponent, PaginatorComponent, AlbumDetailsComponent, NowPlayingComponent],
  exports: [
    ArtworkComponent,
    AlbumComponent,
    PaginatorComponent,
    AlbumDetailsComponent,
    NowPlayingComponent
  ],
  entryComponents: [
    AlbumDetailsComponent
  ]
})
export class SharedComponentsModule { }
