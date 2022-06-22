
//Middleware package that handles any requests coming from index.js addressed to ChatController

//use .get() to access the MongoDB server

const { request } = require('express');
const { disable } = require('express/lib/application');
const Message = require('../schema/chat.js');
const db  = require('../mongoUtil.js')
const client = require('../index.js')
const path = require('path')

const ChatController = {

    async signUpUser(req,res) {
        const { email, password} = req.body
        console.log("the email is", email)
        console.log('the password is', password)
        try {
            const userExists = await db
            .get()
            .db('users')
            .collection('user-login')
            .findOne({email})
            if(userExists){
                console.log('User exists!', userExists)
            } else{
                db
                .get()
                .db('users')
                .collection('user-login')
                .insertOne({email,password})
            }
            
        } catch (error) {
            console.log(error)
        }
    },

    async createMessage(req,res,next) {
        const { message, author } = req.body
        try{
            db
            .get()
            .db('chat-topics')
            .collection('art')
            .insertOne({
                "message": message,
                "author" : author
            })
            .then(result => {
                res.status(201).json(result)
            })
            // Message.create({
            //     'message' : message,
            //     'author': author})
            console.log('Message created!')

            const cursor = db
            .get()
            .db('chat-topics')
            .collection('art')
            .find()
            .limit(20);

            const results = await cursor.toArray()

            results.forEach((result) => {
                console.log(result.message)
            })

            

        } catch(error){
            console.log("Error hit on message creation")
            console.log(error)
            return res.status(300).json(error)
        }
    },
    async login(req,res,next) {
     const { email , password } = req.body
     userExists = await db.get().db('users').collection('user-login').findOne({email,password})

     if(userExists) {
        console.log('Welcome!!!')
        // res.redirect('/home')
        // return res.sendFile(path.join(__dirname,'../client/index.html'))
        next()
     } else{
         console.log('Incorrect login information present')
         res.send({error: "Incorrect username or password"})
     }

    },

    async chatData(req,res) {
        try{
            console.log('Chat data entered!')
            const cursor = db
            .get()
            .db('chat-topics')
            .collection('art')
            .find()
            .limit(20);


            const results = await cursor.toArray()
            
            console.log(results)
            res.send(results)
            
            // results.forEach((result) => {
            //     res.send(result.message)
            // })

            

        } catch(error){
            console.log("Error hit on message creation")
            console.log(error)
            return res.status(300).json(error)
        }
    }
}   
module.exports = ChatController