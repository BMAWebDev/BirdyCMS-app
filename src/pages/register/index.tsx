import { ReactElement, useState, useEffect } from 'react';
import axios from 'src/lib/axios';
import { useStore } from 'src/store';
import { useRouter } from 'next/router';
import { usersExist } from 'src/auth';

import cs from 'classnames';
import s from 'src/components/Register/style.module.scss';

// Form
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { initialValues, validationSchema } from 'src/models/register';

interface Values {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  role?: string; // only on first user register
}

export default function Login(): ReactElement {
  const [usersExistResult, setUsersExistResult] = useState<boolean>(true);
  const { setAuthToken } = useStore();
  const router = useRouter();

  useEffect(() => {
    usersExist().then((res) => {
      setUsersExistResult(res);
    });
  }, []);

  const handleSubmit = async (values: Values): Promise<any> => {
    try {
      const res: any = await axios.post('users/register', values);
      setAuthToken(res.token);
      alert(res.message);

      router.push('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id={cs(s.login)}>
      <div className={cs(s.masterContainer)}>
        <div className={cs(s.contentContainer)}>
          <h1>Register page</h1>

          {!usersExistResult && (
            <p>
              It seems that you are the first user to the register, so please
              setup your admin account first.
            </p>
          )}

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values: Values) => handleSubmit(values)}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field type='text' name='username' />
                <ErrorMessage name='username' component='div' />
                <br />
                <br />

                <Field type='email' name='email' />
                <ErrorMessage name='email' component='div' />
                <br />
                <br />

                <Field type='password' name='password' />
                <ErrorMessage name='password' component='div' />
                <br />
                <br />

                <Field type='password' name='confirmPassword' />
                <ErrorMessage name='confirmPassword' component='div' />
                <br />
                <br />

                <Field type='text' name='role' disabled />
                <ErrorMessage name='role' component='div' />
                <br />
                <br />

                <button type='submit' disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
