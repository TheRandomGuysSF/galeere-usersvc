const mongoose = require('mongoose');
const modelName = 'Role';
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        index: true
    },
    hierarchy: {
        type: Number,
        required: true
    },
    permissions: [String],
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    created: {
        type: Date,
        default: new Date()
    },
    updated: {
        type: Date,
        default: new Date()
    },
});