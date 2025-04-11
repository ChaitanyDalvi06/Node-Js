import { useEffect, useState } from "react";
import styles from "./auth.module.css";

const Register = () => {

  let [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    gender: ""
  })

  let [toastMessage, setToastMessage] = useState({ error: false, message: "" })

  const handleForm = (event) => {

    setUser((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value }
    })

  }

  const register = () => {

    fetch("http://localhost:8000/auth/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-type": "application/json" }
    })
      .then((response) => {
        if (response.status!==201)
        {
          setToastMessage({error:true,message:"Some problem please try again"})
          resetToast()
        }
        else{
          return response.json()
        }  
      })
      .then((data) => {

        setToastMessage({error:false,message:data.message})



        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function resetToast()
  {
    setTimeout(()=>
    {
      setToastMessage({error:false,message:""})
    },5000)
  }

  

  return (
    <div className={styles.container}>

      {
        toastMessage.message !== "" ? (
          <div className={toastMessage.error == true ? styles.toastError : styles.toastSuccess}> {toastMessage.message}</div>) : null
      }


      <form className={styles.form}>
        <h2 className={styles.title}>Register</h2>

        <label className={styles.label}>
          Name:
          <input type="text" name="name" onChange={handleForm} className={styles.input} />
        </label>

        <label className={styles.label}>
          Username:
          <input type="text" name="username" onChange={handleForm} className={styles.input} />
        </label>

        <label className={styles.label}>
          Password:
          <input type="password" name="password" onChange={handleForm} className={styles.input} />
        </label>

        <label className={styles.label}>
          Gender:
          <select name="gender" onChange={handleForm} className={styles.input}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <button type="button" onClick={register} className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;





