import { ReactElement, useState } from 'react';
import axios from 'src/lib/axios';
import { useRouter } from 'next/router';

import cs from 'classnames';
import s from 'src/components/Login/style.module.scss';

import { Header } from 'src/components';

// Form
import { Formik, Form, Field } from 'formik';
import { initialValues, validationSchema } from 'src/models/login';
import { Values } from 'src/components/Register/types';
import { Button } from 'src/components';
import { Group } from 'src/components/Formik';

export default function Login(): ReactElement {
  const [responseMessage, setResponseMessage] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (values: Values): Promise<any> => {
    try {
      const res: any = await axios.post('users/login', values);
      setResponseMessage(res.message);

      router.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Header />

      <div id={cs(s.login)}>
        <div className={cs(s.masterContainer, 'container')}>
          <div className='row'>
            <div className='col-lg-12'>
              <h1 className='text'>Login page</h1>
            </div>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values: Values) => handleSubmit(values)}
          >
            {({ isSubmitting }) => (
              <Form className='row'>
                <Group
                  className='col-lg-12 d-flex flex-column'
                  labelText='Username:'
                  name='username'
                >
                  <Field type='text' name='username' />
                </Group>

                <Group
                  className='col-lg-12 d-flex flex-column'
                  labelText='Password:'
                  name='password'
                >
                  <Field type='password' name='password' />
                  <span className='text' style={{ fontSize: '18px' }}>
                    {responseMessage}
                  </span>
                </Group>

                <Button
                  className='col-lg-12'
                  type='submit'
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

// route guard
import { verifyAdmin } from 'src/auth';
export const getServerSideProps = async (context) => {
  return await verifyAdmin(context);
};
