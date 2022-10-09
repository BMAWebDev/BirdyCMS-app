import { ReactElement, useState } from 'react';
import axios from 'src/lib/axios';
import { useRouter } from 'next/router';

import cs from 'classnames';
import s from 'src/components/Register/style.module.scss';

import { Layout } from 'src/components';

// Form
import { Formik, Form, Field } from 'formik';
import { initialValues, validationSchema } from 'src/models/register';
import { Values } from 'src/components/Register/types';
import { Button } from 'src/components';
import { Group } from 'src/components/Formik';

export default function Register({ usersExist }): ReactElement {
  const [responseMessage, setResponseMessage] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (values: Values): Promise<any> => {
    try {
      const res: any = await axios.post('users/register', values);
      setResponseMessage(res.message);

      router.push('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <div id={cs(s.register)}>
        <div
          className={cs(
            s.masterContainer,
            'container d-flex align-items-center'
          )}
        >
          <div className='row'>
            <div className='col-lg-12'>
              <h1 className='text'>Register page</h1>

              {!usersExist && (
                <p className='text'>
                  It seems that you are the first user to the register, so
                  please setup your admin account first.
                </p>
              )}
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
                  className='col-lg-6 d-flex flex-column'
                  labelText='Username:'
                  name='username'
                >
                  <Field type='text' name='username' />
                </Group>

                <Group
                  className='col-lg-6 d-flex flex-column'
                  labelText='Email:'
                  name='email'
                >
                  <Field type='email' name='email' />
                </Group>

                <Group
                  className='col-lg-6 d-flex flex-column'
                  labelText='Password:'
                  name='password'
                >
                  <Field type='password' name='password' />
                </Group>

                <Group
                  className='col-lg-6 d-flex flex-column'
                  labelText='Confirm password:'
                  name='confirmPassword'
                >
                  <Field type='password' name='confirmPassword' />
                </Group>

                <Group
                  className='col-lg-12 d-flex flex-column'
                  labelText='Role:'
                  name='role'
                >
                  <Field type='text' name='role' disabled />
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
    </Layout>
  );
}

// route guard
import { handleAuth } from 'src/auth';
export const getServerSideProps = async (context) => {
  return await handleAuth(context);
};
