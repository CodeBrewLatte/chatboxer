import React from "react";
import SignupForm from "./Form";
import LoginForm from "./LoginForm"
import { useState } from 'react';

const App = () => {
    const test = () => {
        alert('Hi')
    }

const [signUpClick,setsignUpClick] = useState(false)
const [logInClick,setLogInClick] = useState(false)

const signUpRouter = (boolean) => {
    window.history.pushState("object or string", "Title", "/sign-up");
    setsignUpClick(boolean)
}

const logInRouter = (boolean) => {
    window.history.pushState("object or string", "Title", "/login");
    setLogInClick(boolean)
}


    if(signUpClick) {
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

    } else if(logInClick){
        return(
            <div id="App-Container">
                <div id='App'>
                    <h1>
                        ChatBoxer
                    </h1>
                </div>
                <div id="LogSign">
                   <LoginForm></LoginForm>
                </div>
            </div>
            )
    }
    
    else {
            return(
                <div id="App-Container">
                    <div id='App'>
                        <h1>
                            ChatBoxer!
                        </h1>
                    </div>
                    <div id="LogSign">
                        <div id="Login-Button">
                            <button className="btn" onClick={() => {signUpRouter(true)}}>Sign Up</button>
                        </div>
                        <div id="Sign-Up-Button">
                            <button className="btn" onClick={() => {logInRouter(true)}}>Login</button>
                        </div>
                    </div>
                </div>
                )
    }

    
}

export default App