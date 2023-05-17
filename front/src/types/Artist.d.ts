import { UUID } from 'crypto';

type Artist = {
    id: UUID;
    name: string;
    biography: string | null;
    image: string | null;
    birthdate: Date | null;
};
