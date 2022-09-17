import { ReactElement } from 'react';

import cs from 'classnames';
import s from './style.module.scss';

import { Group } from './types';
import { ErrorMessage } from 'formik';

const Group = ({
  className,
  name,
  labelText,
  children,
}: Group): ReactElement => {
  return (
    <div className={cs(s.group, className)}>
      {labelText && <label htmlFor={name}>{labelText}</label>}
      {children}
      <ErrorMessage className='error' name={name} component='span' />
    </div>
  );
};

export default Group;
