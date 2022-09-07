import { ReactElement, useState, FormEvent, useEffect } from 'react';
import axios from 'src/lib/axios';
import { useStore } from 'src/store';
import { useRouter } from 'next/router';
import { usersExist } from 'src/auth';

import cs from 'classnames';
import s from 'src/components/Login/style.module.scss';

export default function Login(): ReactElement {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [usersExistResult, setUsersExistResult] = useState<boolean>(true);
  const { setAuthToken } = useStore();
  const router = useRouter();

  useEffect(() => {
    usersExist().then((res) => {
      setUsersExistResult(res);
    });
  }, []);

  const handleForm = (e: FormEvent<EventTarget>): boolean => {
    e.preventDefault();

    if (!username) {
      alert('username missing');
      return false;
    }

    if (!password) {
      alert('password missing');
      return false;
    }

    axios
      .post('users/login', {
        username,
        password,
      })
      .then((res: any) => {
        setAuthToken(res.token);

        alert(res.message);

        router.push('/admin');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div id={cs(s.login)}>
      <div className={cs(s.masterContainer)}>
        <h1>Register page</h1>
        {!usersExistResult && (
          <p>
            It seems that you are the first user to the register, so please
            setup your admin account first.
          </p>
        )}

        <form onSubmit={handleForm}>
          <label htmlFor=''>Username:</label> <br />
          <input
            type='text'
            name=''
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor=''>Password:</label> <br />
          <input
            type='password'
            name=''
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
}
