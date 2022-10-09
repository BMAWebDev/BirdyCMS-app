import { ReactElement } from 'react';
import Link from 'next/link';

import { CollectionsProps } from '../../types';
import { Collection } from '../../types';
import { getDate } from 'src/functions';

export default function TBody({ list }: CollectionsProps): ReactElement {
  const getURL = (collection: Collection) => {
    return `/admin/collections/${collection.slug}`;
  };

  return (
    <tbody className='tbody'>
      {list.map((collection) => {
        return (
          <tr key={collection.id}>
            <td>{collection.id}</td>
            <td style={{ textTransform: 'capitalize' }}>{collection.name}</td>
            <td>
              <Link href={getURL(collection)} passHref={true}>
                <a>View {collection.name} collection</a>
              </Link>
            </td>
            <td>{getDate(collection.created_at)}</td>
          </tr>
        );
      })}
    </tbody>
  );
}
