import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Album } from '../../models/album';

@Component({
  selector: 'app-album',
  template: `
    <div class="album mat-elevation-z2" (click)="click.emit(album); $event.stopPropagation()" [style.width.px]="width">
      <app-artwork [artwork]="album.attributes.artwork" [height]="width" [width]="width"></app-artwork>
      <p class="album">{{album.attributes.name}}</p>
      <p class="artist">{{album.attributes.artistName}}</p>
    </div>
  `,
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  @Input()
  album: Album;

  @Input()
  width = 150;

  @Output()
  click = new EventEmitter<Album>();

  constructor() { }

  ngOnInit() {
  }

}
