import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

import PageNav from "../components/PageNav";
import Button from "../components/Button";
import useAuthentication from "../hooks/useAuthentication";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const [warning, setWarning] = useState("");
  const { login, isAuthenticated, loginFailed } = useAuthentication();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) setWarning("Please fill out all details.");
    else if (!loginFailed) setWarning("");

    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app/cities", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  useEffect(
    function () {
      if (loginFailed)
        setWarning("Unknown account. Please enter correct login details!");
    },
    [loginFailed]
  );

  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        {warning && <p className={styles.warning}>{warning}</p>}

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
