import { ReactElement, useState, FormEvent } from "react";
import axios from "src/lib/axios";
import { useStore } from "src/store";
import { useRouter } from "next/router";

import cs from "classnames";
import s from "src/components/Login/style.module.scss";

export default function Login(): ReactElement {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setAuthToken } = useStore();
  const router = useRouter();

  const handleForm = (e: FormEvent<EventTarget>): boolean => {
    e.preventDefault();

    if (!username) {
      alert("username missing");
      return false;
    }

    if (!password) {
      alert("password missing");
      return false;
    }

    axios
      .post("users/login", {
        username,
        password,
      })
      .then((res: any) => {
        setAuthToken(res.token);

        alert(res.message);

        router.push("/admin");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div id={cs(s.login)}>
      <div className={cs(s.masterContainer)}>
        <h1>Login page</h1>

        <form onSubmit={handleForm}>
          <label htmlFor="">Username:</label> <br />
          <input
            type="text"
            name=""
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="">Password:</label> <br />
          <input
            type="password"
            name=""
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
