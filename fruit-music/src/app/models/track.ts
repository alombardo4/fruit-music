import { MediaObject } from "./media-object";
import { Artwork } from "./artwork";

export interface Track extends MediaObject {
    attributes: {
        albumName: string,
        artistName: string;
        artwork: Artwork,
        durationInMillis: number,
        name: string,
        playParams: {
            id: string,
            kind: string,
            isLibrary: boolean
        },
        trackNumber: number
    }
}