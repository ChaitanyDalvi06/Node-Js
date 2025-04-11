import { useState } from "react";
import styles from "./auth.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

  let [userCreds, setUserCreds] = useState({
    username: "",
    password: ""
  })

  let navigate = useNavigate()

  const handleForm = (event) => {

    setUserCreds((prevValue) => {
      // console.log(prevValue)
      return { ...prevValue, [event.target.name]: event.target.value }
    })
  }

  async function login() {
    try {
      let response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        body: JSON.stringify(userCreds),
        headers: { "Content-type": "application/json" }
      })

      let data = await response.json()
      if (response.status === 200 && data.token !== undefined) {
        localStorage.setItem("sayit-info", JSON.stringify(data))
        navigate("/chat")

      }
    }
    catch (err) {
      console.log(err)
    }

  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={styles.title}>Login</h2>

        <label className={styles.label}>
          Username:
          <input type="text" name="username" onChange={handleForm} className={styles.input} />
        </label>

        <label className={styles.label}>
          Password:
          <input type="password" name="password" onChange={handleForm} className={styles.input} />
        </label>

        <button type="button" onClick={login} className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;