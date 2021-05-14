const mongoose = require('mongoose');

const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});


const seed = async () => {
    // Exercise seeds
    const exercise1 = await db.Exercise.create({
        type: "resistance",
        name: "Incline Bench Press",
        weight: 155,
        sets: 4,
        reps: 8,
        duration: 20 
    })
    const exercise2 = await db.Exercise.create({
        type: "resistance",
        name: "Flat Bench Press",
        weight: 185,
        sets: 5,
        reps: 5,
        duration: 20 
    })
    const exercise3 = await db.Exercise.create({
        type: "cardio",
        name: "Elliptical",
        distance: 10,
        duration: 30 
    })
    const exercise4 = await db.Exercise.create({
        type: "cardio",
        name: "Row machine",
        distance: 15,
        duration: 60 
    })
    // Workout Seeds
    const chestDay = await db.Workout.create({
        exercises: [exercise1._id,exercise2._id]
    })
    const cardioDay = await db.Workout.create({
        exercises:[exercise3._id,exercise4._id]
    })
    console.log("SEEDED")
}

seed()