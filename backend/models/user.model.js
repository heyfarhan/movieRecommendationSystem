import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        lower: true,
        required: true,

    },

    email: {
        type: String,
        lower: true,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true,

    },
    favourtie:
        [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Movie'
            }
        ]
    ,
    watchLater:
        [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Movie'
            }
        ]
    ,
})

const User = mongoose.model('User', userSchema)

export default User