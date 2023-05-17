import { UUID } from 'crypto';
import { Song } from './Song';

type Playlist = {
    id: UUID;
    name: string;
    description: string | null;
    songs: Song[] | null;
    owener_id: UUID;
    picture: string | null;
};
