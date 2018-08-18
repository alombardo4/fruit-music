import { Artwork } from "./artwork";

export interface NowPlaying {
    id: string;
    type: string;
    albumName: string;
    artistName: string;
    attributes: {
        artwork: Artwork,
        durationInMillis: number;
        name: string;
        albumName: string;
        artistName: string;
    };
    title: string;
    trackNumber: number;
}