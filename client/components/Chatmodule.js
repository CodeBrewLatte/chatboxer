import React, {useState, useEffect} from 'react';

const ChatInterface = () => {

    

    useEffect(()=>{
        fetch('http://localhost:3000/chatdata')
        .then(res => res.json())
        .then(data => {
             data.forEach((element,i) => {
                const node = document.createElement("li");
                const textnode = document.createTextNode(element.message);
                node.appendChild(textnode);
                node.className = "chatmessage"
                console.log(element.message)
                document.getElementById("chatinterface").appendChild(node);
            });
            })
    },[])

    return(
        <div id='App-Container-App'>
            <ul id='chatinterface'>
               
            </ul>
        </div>
    )

}

export default ChatInterface