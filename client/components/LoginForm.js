import React from "react";
import { useState } from 'react';

function LoginForm() {

const [LoginEmail, setLoginEmail] = useState('')
const [LoginPassword, setLoginPassword] = useState('')

    const LoginData = (e) => {
    e.preventDefault()
    console.log('Entered Login up')

    let dataBody = {
        email : LoginEmail,
        password: LoginPassword
    }

    console.log('Databody ->', dataBody)

 fetch('/login', { 

      method: 'POST', 
      mode: 'cors', 
      body: JSON.stringify(dataBody), // body data type must match "Content-Type" header
      headers: {
        'Content-Type': 'application/json'
    } 

    })
    .then((response) => response.json())
    .then((data) => {
      console.log('data recieved is', data.error);
      console.log('data without error', data)
      // code here //
      if (data.error) {
        let errorResponse = document.getElementById('server-response-login')
        errorResponse.innerHTML = 'Incorrect Username/Password'
      } else {
        window.open(
          "chatmain.html"
        ); /*opens the target page while Id & password matches*/
      }
    })
    .catch((err) => {
      console.log(err);
    });
    }

    return (
        <div id="login-form-component"> 
            <h1> Log In</h1>
        <form id="login-form" onSubmit={(e) => {LoginData(e)}}>
            <input type="email" name="email" id='email-login' value={LoginEmail} onChange={e => setLoginEmail(e.target.value) } className="form-box-field" placeholder="Email"></input>
            <input type="password" name="password" id="password-login" value={LoginPassword} onChange={e => setLoginPassword(e.target.value)} placeholder="Password" className="form-box-field"></input>
            <button>Log In</button>
        </form>
        <p id="server-response-login"> </p>
        </div>
    )
}

export default LoginForm