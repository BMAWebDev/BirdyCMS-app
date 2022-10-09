import { ReactElement } from 'react';

export default function THead(): ReactElement {
  return (
    <thead className='thead'>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Link</th>
        <th>Created date</th>
      </tr>
    </thead>
  );
}
