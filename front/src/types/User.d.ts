import { UUID } from 'crypto';
import { Song } from './Song';
import { Album } from './Album';
import { Playlist } from './Playlist';
import { DirectusUser } from 'nuxt-directus/dist/runtime/types';

type User = {
    id: UUID;
    username: string;
    first_name: string;
    last_name: string;
    birthdate: Date;
    country_id: UUID;
    avatar: string;
    date_created: number;
    heared_songs: Song[];
    heared_albums: Album[];
    heared_playlists: Playlist[];
    directus_user: UUID;
};
