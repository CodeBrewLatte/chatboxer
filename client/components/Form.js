import React from "react";
import { useState } from 'react';

function SignupForm() {

const [signUpEmail, setSignUpEmail] = useState('')
const [signUpPassword, setSignUpPassword] = useState('')

    const signUpData = (e) => {
    e.preventDefault()
    console.log('Entered sign up')

    let dataBody = {
        email : signUpEmail,
        password: signUpPassword
    }

    console.log('Databody ->', dataBody)

 fetch('sign-up', {  // Enter your IP address here

      method: 'POST', 
      mode: 'cors', 
      body: JSON.stringify(dataBody), // body data type must match "Content-Type" header
      headers: {
        'Content-Type': 'application/json'
    } 

    })
    .then(res => res.json())
    .then(data => console.log(data))

    } 
  

    return (
        <div id="signup-form-component"> 
        <h1> Sign Up </h1>
        <form id="signup-form" onSubmit={(e) => {signUpData(e)}}>
            <input type="email" name="email" id='email-signup' value={signUpEmail} onChange={e => setSignUpEmail(e.target.value) } className="form-box-field" placeholder="Email"></input>
            <input type="password" name="password" id="password-signup" value={signUpPassword} onChange={e => setSignUpPassword(e.target.value)} placeholder="Password" className="form-box-field"></input>
            <button>Register</button>
        </form>
        <p id="server-response-signup"> </p>
        </div>
    )
}

export default SignupForm