"use client"

import React from 'react'
import { signIn } from 'next-auth/react'
import style from "./page.module.css";

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault()

    const email = e.target[0].value
    const password = e.target[1].value

    signIn('credentials', {email, password})
  }

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          className={style.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          className={style.input}
          required
        />
        <button className={style.button}>Login</button>
      </form>
      <button onClick={() => signIn('google')}>Login with Google</button>
    </div>
  )
}

export default Login