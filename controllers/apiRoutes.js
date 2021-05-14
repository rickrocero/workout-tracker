const db = require('../models')
const router = require('express').Router();

// Exercise APIs
// Create an exercise
router.post('/api/exercises', async (req,res) => {
    try {
        const newExercise = await db.Exercise.create(req.body);
        res.status(200).json(newExercise);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all exercises
router.get('/api/exercises', async (req,res) => {
    try {
        const allExercises = await db.Exercise.find();
        res.status(200).json(allExercises);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Workout APIs
// Create a workout 
router.post('/api/workouts', async (req,res) => {
    try {
        const newWorkout = await db.Workout.create({});
        res.status(200).json(newWorkout);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all workouts
router.get('/api/workouts', async (req,res) => {
    try {
        const allWorkouts = await db.Workout.aggregate([{$addFields:{totalDuration:{$sum:"$exercises.duration"}}}])
        res.status(200).json(allWorkouts);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a workout
router.put('/api/workouts/:id', async (req,res) => {
    try {
        const updatedWorkout = await db.Workout.findOneAndUpdate(
            {_id:req.params.id},
            {$push:{exercises:req.body}},
            {new:true}
        );
        res.status(200).json(updatedWorkout);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get total duration of workouts from past 7 days
router.get('/api/workouts/range', async (req,res) => {
    try {
        const allWorkouts = await db.Workout.aggregate([{$addFields:{totalDuration:{$sum:"$exercises.duration"}}}]).sort({_id:-1}).limit(7)
        res.status(200).json(allWorkouts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;