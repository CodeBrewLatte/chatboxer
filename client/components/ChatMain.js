import React from 'react'

const ChatMain = () =>{

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



export default ChatMain