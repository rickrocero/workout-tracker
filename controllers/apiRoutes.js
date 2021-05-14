const db = require('../models')
const router = require('express').Router();

// Create an exercise
router.post('/api/exercises', async (req,res) => {
    try {
        const newExercise = await db.Exercise.create(req.body);
        res.status(200).json(newExercise);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Get all exercises
router.get('/api/exercises', async (req,res) => {
    try {
        const allExercises = await db.Exercise.find();
        res.status(200).json(allExercises);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Create a workout 
router.post('/api/workouts', async (req,res) => {
    try {
        const newWorkout = await db.Workout.create(req.body);
        res.status(200).json(newWorkout);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Get all workouts
router.get('/api/workouts', async (req,res) => {
    try {
        const allWorkouts = await db.Workout.find();
        res.status(200).json(allWorkouts);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Update a workout
router.put('/api/workouts/addexercise/:workoutid/:exerciseid', async (req,res) => {
    try {
        const updatedWorkout = await db.Workout.findOneAndUpdate({_id:req.params.workoutid},{$push:{exercises:req.params.exerciseid}},{new:true});
        res.status(200).json(updatedWorkout);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;