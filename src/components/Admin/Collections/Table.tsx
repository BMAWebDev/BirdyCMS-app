import { ReactElement } from 'react';

import { THead, TBody, TFoot } from './Table/index';
import { CollectionsProps } from '../types';

export default function Table({ list }: CollectionsProps): ReactElement {
  return (
    <table className='table'>
      <THead />
      <TBody list={list} />
      <TFoot />
    </table>
  );
}
