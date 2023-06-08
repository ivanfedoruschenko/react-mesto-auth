import AuthWindow from "./AuthWindow";
import React, {useState} from "react";
import * as auth from "../utils/auth";
import {useNavigate} from "react-router-dom";

export default function Login(props){
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit=(e) =>{
    e.preventDefault()
    props.onLoginUser({...formValue})
      .then((res) =>{
        setFormValue({email:"", password: ""})
        props.login()
      })
  }


  return(
      <AuthWindow title={"Вход"} submit={handleSubmit} button={"Войти"} register={false} name={"login"}>
        <input className="auth__input" placeholder="Email" type="email" value={formValue.email} name="email" onChange={handleChange} required/>
        <input className="auth__input" placeholder="Пароль" type="password" value={formValue.password} name="password" onChange={handleChange} required/>
      </AuthWindow>
  )
}
