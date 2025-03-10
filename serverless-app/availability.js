'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const Availability = require('./models/availability');
const Holiday = require('./models/holiday');
const connectDB = require('./db');

exports.createAvailability = async (event) => {
    await connectDB();
    const body = JSON.parse(event.body);

    const newAvailability = new Availability({
        week_day: body.week_day,
        range: body.range
    });
    const savedAvailability = await newAvailability.save();
    console.log(' savedAvailability => ', savedAvailability)

    return {
        statusCode: 201,
        body: JSON.stringify(savedAvailability)
    };
};

exports.getAvailabilities = async () => {
    await connectDB();

    const availabilities = await Availability.find();

    console.log(' availabilities => ', availabilities)

    return {
        statusCode: 200,
        body: JSON.stringify(availabilities)
    };
};

exports.createHoliday = async (event) => {
    await connectDB();
    const body = JSON.parse(event.body);

    const newHoliday = new Holiday({
        day: body.day,
    });
    const savedHoliday = await newHoliday.save();
    console.log(' savedHoliday => ', savedHoliday)

    return {
        statusCode: 201,
        body: JSON.stringify(savedHoliday)
    };

};

exports.getHolidays = async () => {
    await connectDB();

    const holidays = await Holiday.find();
    console.log(' holidays => ', holidays)

    return {
        statusCode: 200,
        body: JSON.stringify(holidays)
    };

};

exports.closestSIP = async (event) => {
    
    // calculate the day based on:
    // current day
    // availability
    // holidays 

    return {
        statusCode: 200,
        body: 'Tomorrow'
    };
};
