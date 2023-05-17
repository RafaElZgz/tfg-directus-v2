import { UUID } from 'crypto';
import { Artist } from './Artist';
import internal from 'stream';

type Song = {
    id: UUID;
    album_id: UUID;
    artists: Artist[];
    name: string;
    release_date: Date;
    file: string;
    length: number;
    track: number;
};
