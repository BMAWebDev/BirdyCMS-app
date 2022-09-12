import { ReactElement } from 'react';
import { startsWith } from 'lodash';
import Link from 'next/link';

import { Button } from 'src/types';

const Button = ({ href, type, children, ...props }: Button): ReactElement => {
  if (href) {
    if (startsWith(href, 'http')) {
      props.target = '_blank';
    }

    return (
      <Link role='button' href={href} passHref={true} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ? type : 'button'} {...props}>
      {children}
    </button>
  );
};

export default Button;
