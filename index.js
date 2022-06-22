const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const ChatController = require("./controllers/chatcontroller.js")
const db  = require('./mongoUtil.js')
const path = require('path')
const { connect } = require('http2')

db.connect(() => {
    app.listen(port,() => {
        console.log('Server Connected')
    })
})

app.use(express.json());

app.use('/build',express.static(path.join(__dirname,'../build')))

app.use(express.static(__dirname + '/client'));

app.route('/')
.get((req,res) => {
    //need to send an HTML page
    res.sendFile(path.join(__dirname,'./client/index.html'))
})
.post(ChatController.createMessage,(req,res) => {
    //res.send('Message received')
})

app.get('/build/bundle.js', (req,res) => {
    res.sendFile(path.join(__dirname,'/build/bundle.js'))
})

app.route('/sign-up')
.get((req,res) => {
    res.sendFile(path.join(__dirname,'./client/index.html'))
})
.post((req,res) => {
    ChatController.signUpUser(req)
    res.status(200)
})

app.route('/login')
.get((req,res) => {
    res.sendFile(path.join(__dirname,'./client/index.html'))
})
.post(ChatController.login, (req,res) => {
    // ChatController.login(req,res)
    console.log('Exit post')
    res.send({message:'Valid'})
    //res.sendFile(path.join(__dirname,'./client/index.html'))
    //res.status(200)
})

app.get('/chatmain',(req,res) => {
    console.log('Home get triggered')
    res.sendFile(path.join(__dirname,'./client/chatmain.html'))
    //need to send an HTML page
    //res.sendFile(path.join(__dirname,'./client/chatmain.html'))
})

app.get('/chatdata', ChatController.chatData,(req,res) => {
    //nothing
})

// app.get('/dist/bundle.js',(req,res) => {
//     res.sendFile(path.join(__dirname,'/dist/bundle.js'))
// })
//Code Graveyard

// app.listen(port, ()=> {
//     console.log('App is listening on port',port)
// })

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

// async function listDatabases(client){
//     const databaseList =  await client.db().admin().listDatabases()
//     console.log(databaseList.databases)
//  }