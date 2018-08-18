import { Injectable } from '@angular/core';
import { Album } from '../../models/album';
import { AlbumDetails } from '../../models/album-details';
import { Track } from '../../models/track';
import { Observable } from 'rxjs';
import { PlaybackState } from '../../models/playback-state';
declare var MusicKit;

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  musicKitInstance: any;

  constructor() {
    console.log('constructor');
    this.musicKitInstance = MusicKit.getInstance();
  }

  authorize(): Promise<any> {
    return this.musicKitInstance.authorize();
  }

  unauthorize(): Promise<any> {
    return this.musicKitInstance.unauthorize();
  }

  getInstance() {
    return this.musicKitInstance;
  }

  getMusicKit() {
    return MusicKit;
  }

  isAuthorized(): boolean {
    return this.musicKitInstance.isAuthorized;
  }

  getLibrary(): any {
    return this.musicKitInstance.api.library;
  }

  getLibraryAlbums(page: number, size: number): Promise<Album[]> {
    return this.getLibrary().albums(null, this.getPagination(page, size));
  }

  getLibraryAlbum(id: string): Promise<AlbumDetails> {
    return this.getLibrary().album(id);
  }

  getAlbum(id: string): Promise<AlbumDetails> {
    return this.musicKitInstance.api.album(id);
  }

  getFormattedTime(millis: number): string {
    const { hours, minutes } = MusicKit.formattedMilliseconds(millis);
    const seconds = Math.floor((millis - (hours * 60 * 60 * 1000) - (minutes * 60 * 1000)) / 1000);
    if (hours > 0) {
      return `${hours}:${this.getTwoDigitNumber(minutes)}:${this.getTwoDigitNumber(seconds)}`;
    } else {
      return `${minutes}:${this.getTwoDigitNumber(seconds)}`;
    }
  }

  playAlbum(id: string): Promise<any> {
    return this.musicKitInstance.setQueue({ album: id})
      .then(_ => {
        return this.play();
      });
  }

  addToQueue(ids: string[]) {
    const promises = this.musicKitInstance.
    this.musicKitInstance.queue.items = this.musicKitInstance.player.queue.items.concat(ids);
  }
  
  play(): Promise<any> {
    return this.musicKitInstance.player.play();
  }

  pause(): Promise<any> {
    return this.musicKitInstance.player.pause();
  }

  stop(): Promise<any> {
    return this.musicKitInstance.player.stop();
  }

  next(): Promise<any> {
    return this.musicKitInstance.player.skipToNextItem();
  }

  previous(): Promise<any> {
    return this.musicKitInstance.player.skipToPreviousItem();
  }

  mediaItem(): Observable<Track> {
    return Observable.create(observer => {
      this.musicKitInstance.addEventListener('mediaItemDidChange', (item) => {
        observer.next(item.item);
      });
    });
  }

  playbackProgress(): Observable<number> {
    return Observable.create(observer => {
      this.musicKitInstance.addEventListener('playbackProgressDidChange', (item) => {
        observer.next(item.progress);
      });
    });
  }

  playbackStatus(): Observable<PlaybackState> {
    return Observable.create(observer => {
      this.musicKitInstance.addEventListener('playbackStateDidChange', (item) => observer.next(item.state));
    });
  }

  private getTwoDigitNumber(initial: number): string {
    if (initial < 10) {
      return `0${initial}`;
    } else {
      return `${initial}`;
    }
  }

  private getPagination(page: number, size: number) {
    return {
      limit: size,
      offset: page * size
    };
  }
}
