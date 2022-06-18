
//Middleware package that handles any requests coming from index.js addressed to ChatController

//use .get() to access the MongoDB server

const { request } = require('express');
const { disable } = require('express/lib/application');
const Message = require('../schema/chat.js');
const db  = require('../mongoUtil.js')
const client = require('../index.js')

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

            next()

        } catch(error){
            console.log("Error hit on message creation")
            console.log(error)
            return res.status(300).json(error)
        }
    }
}

module.exports = ChatController