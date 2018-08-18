import { Injectable } from '@angular/core';
import { Album } from '../../models/album';
import { MatDialog } from '@angular/material';
import { AlbumDetailsComponent } from './album-details.component';

export interface AlbumDetailsModalData {
  album: Album;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumDetailsModalService {

  constructor(private matDialog: MatDialog) { }

  openModal(data: AlbumDetailsModalData) {
    this.matDialog.open(AlbumDetailsComponent, {
      width: '70vw',
      data: data
    });
  }

}
