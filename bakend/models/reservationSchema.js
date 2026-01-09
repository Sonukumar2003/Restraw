

import mongoose from 'mongoose';
import validator from 'validator';


const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "first name must contain at least 3 characters"],
        maxLength: [50,"first name must contain at most 50 characters"]
    },

    lastName: {
        type: String,
        required: true,
        minLength: [3, "last name must contain at least 3 characters"],
        maxLength: [30, "last name must contain at most 30 characters"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "please provide a valid email"]
    },
    phone: {    
        type: String,
        required: true,
        minLength: [10, "phone number must contain at least 10 characters"],
        maxLength: [10, "phone number must contain at most 10 characters"]
    },

    time: {
        type: String,
        required: true
    },  

    date: {
        type: Date,
        required: true
    },
});


export const Reservation = mongoose.model('Reservation', reservationSchema);
