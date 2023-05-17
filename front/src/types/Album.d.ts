import { UUID } from 'crypto';
import { Artist } from './Artist';
import { Genre } from './Genre';

type Album = {
    id: UUID;
    name: string;
    cover_art: string;
    artists: Artist[];
    genres: Genre[];
    release_date: Date;
};
