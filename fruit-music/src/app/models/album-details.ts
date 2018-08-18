import { Album } from "./album";
import { Track } from "./track";

export interface AlbumDetails extends Album {
    relationships: {
        tracks: {
            data: Track[]
        }
    }
}