const mongoose = require('mongoose');
const modelName = 'User';
const userSchema = new mongoose.Schema({
        uid: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        password: {
            type: String,
            required: true
        },
        birthdate: Date,
        mail: {
            type: String,
            required: true
        },
        description: String,
        created: {
            type: Date, 
            default: new Date() 
        },
        lastLogin: {
            type: Date, 
            default: new Date() 
        },
        avatar: {
            type: String
        },
        inactive: {
            type: Boolean,
            default: false
        }
    });