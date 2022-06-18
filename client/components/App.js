import React from "react";
import SignupForm from "./Form";
import { useState } from 'react';

const App = () => {
    const test = () => {
        alert('Hi')
    }

const [loginClick,setLoginClick] = useState(false)

const loginRouter = (boolean) => {
    window.history.pushState("object or string", "Title", "/sign-up");
    setLoginClick(boolean)
}


    if(loginClick) {
        return(
            <div id="App-Container">
                <div id='App'>
                    <h1>
                        ChatBoxer
                    </h1>
                </div>
                <div id="LogSign">
                   <SignupForm></SignupForm>
                </div>
            </div>
            )

    } else {
            return(
                <div id="App-Container">
                    <div id='App'>
                        <h1>
                            ChatBoxer
                        </h1>
                    </div>
                    <div id="LogSign">
                        <div id="Login-Button">
                            <button className="btn" onClick={() => {loginRouter(true)}}>Login</button>
                        </div>
                        <div id="Sign-Up-Button">
                            <button className="btn">Sign Up</button>
                        </div>
                    </div>
                </div>
                )
    }

    
}

export default App