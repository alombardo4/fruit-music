import { Artwork } from "./artwork";
import { MediaObject } from "./media-object";

export interface Album extends MediaObject {
    attributes: {
        artistName: string;
        name: string;
        trackCount: number;
        artwork: Artwork;
        playParams: {
            id: string;
            isLibrary: boolean;
            kind: string;
        }
    };
}
