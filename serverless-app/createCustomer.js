'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const Customer = require('./models/customer');
const connectDB = require('./db');

exports.createCustomer = async (event) => {
    await connectDB();
    const body = JSON.parse(event.body);

    const newCustomer = new Customer({
        name: body.name,
        email: body.email
    });
    const savedCustomer = await newCustomer.save();
    console.log(' savedCustomer => ', savedCustomer)
    
    return {
        statusCode: 201,
        body: JSON.stringify(savedCustomer)
    };
};
