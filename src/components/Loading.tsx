import { ReactElement } from 'react';
import ReactLoading from 'react-loading';

const Loading = (): ReactElement => {
  return (
    <div
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'red',
        zIndex: '999999999999',
      }}
    >
      <ReactLoading type='spin' color='green' />
    </div>
  );
};

export default Loading;
