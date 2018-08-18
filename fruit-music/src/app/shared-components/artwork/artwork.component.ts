import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MusicService } from '../../services/music/music.service';
import { Artwork } from '../../models/artwork';

@Component({
  selector: 'app-artwork',
  template: `
    <img [src]="url" [style.width.px]="width"/>
  `,
  styleUrls: ['./artwork.component.scss']
})
export class ArtworkComponent implements OnInit, OnChanges {

  @Input()
  artwork: Artwork;

  @Input()
  width: number;

  @Input()
  height: number;

  url: string;
  
  constructor(private musicService: MusicService) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    console.log('changes', changes);
    this.url = this.musicService.getMusicKit().formatArtworkURL(this.artwork, this.height, this.width);
  }

}
