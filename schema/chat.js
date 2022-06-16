//Establishes connection with Database and creates a message via JSON passed in

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ChatMessage = new Schema({
    message: String,
    author: String
})

module.exports = mongoose.model('messages',ChatMessage)

