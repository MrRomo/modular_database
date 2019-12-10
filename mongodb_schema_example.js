const { Schema, model } = require('mongoose')
const { ObjectId } = Schema

const UserSchema = new Schema({
    firstname: { type: String},
    lastname: { type: String},
    fullname: { type: String},
    username: { type: String },
    password: { type: String },
    email: { type: String },
    age: { type: Date },
    genger: { type: String },
    admin: { type: Boolean, default: false },
    cc: { type: Number, default: null },
    location: {},
    rank: { type: Number, default: 0 },
    date: { type: Date, default: Date.now },
    photo: {
        profile: { type: String, default: 'default.png' },
        portada: []
    },
    description: { type: String },
    certification: { type: Boolean, default: false },
    published: { type: Number, default: 0 },
    lastSign: { type: Date, default: Date.now },
})


module.exports = model('User', UserSchema)