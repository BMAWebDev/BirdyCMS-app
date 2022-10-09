import { UserCollection } from 'src/types';

export interface Collection {
  id: number;
  name: string;
  slug: string;
  is_editable: boolean;
  created_at: string;
}

export interface AdminProps {
  user: UserCollection | null;
  collections: Array<Collection>;
}

export interface CollectionsProps {
  list: Array<Collection>;
}
