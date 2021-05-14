const router = require('express').Router();
const path = require('path');


// Render page routes
// Render index.html (Home)
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '../../views/index.html'));
})

// Render exercise.html (New Workout)
router.get('/exercise', (req,res) => {
    res.sendFile(path.join(__dirname + '../../views/exercise.html'));
})

// Render index.html (Continue Workout)
router.get('/exercise/:id', (req,res) => {
    res.sendFile(path.join(__dirname + '../../views/index.html'));
})

// Render stats.js (Dashboard)
router.get('/stats', (req,res) => {
    res.sendFile(path.join(__dirname + '../../views/stats.html'));
})

module.exports = router;