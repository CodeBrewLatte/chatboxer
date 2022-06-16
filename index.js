const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const ChatMessage = require('./schema/chat.js')
const ChatController = require("./controllers/chatcontroller.js")
const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb');
const res = require('express/lib/response')
const uri = require('./personal.js')
const db  = require('./mongoUtil.js')

db.connect(() => {
    app.listen(port,() => {
        console.log('Server Connected')
    })
})

// async function connectDB(){


// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// //Attempt to connect to server
// try {
//     await client.connect()
//     //Challenge 1: How do i connect to a different part of my database using :port/database?

//     //This connects you to mongoose which is needed to upload your schemas/data
//     await mongoose.connect(uri)

//     //Function, console logs databases
//     await listDatabases(client) 

//     const cursor = client
//     .db('chat-topics')
//     .collection('art')
//     .find()
//     .limit(20);

//     const results = await cursor.toArray()

//     results.forEach((result) => {
//         console.log(result.message)
//     })
   
    
// } catch (error) {
//     console.log(error)
// } finally {
//     //await client.close()
// }

// }

// connectDB()


async function listDatabases(client){
   const databaseList =  await client.db().admin().listDatabases()
   console.log(databaseList.databases)
}


app.use(express.json());

app.get("/",(req,res) => {
    //need to send an HTML page
    res.send('App works!')
})

app.post("/", ChatController.createMessage,(req,res) => {
    //res.send('Message received')
})

// app.listen(port, ()=> {
//     console.log('App is listening on port',port)
// })