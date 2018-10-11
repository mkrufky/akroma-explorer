import { PouchEntity } from './pouch.entity';

export interface Bookmark extends PouchEntity {
    display?: string;
    notes?: string;
}
