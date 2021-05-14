const router = require('express').Router();
const path = require('path');


// render page routes
// Render index.html (Home)
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '../../public/index.html'));
})

// Render exercise.html (New Workout)
router.get('/exercise', (req,res) => {
    res.sendFile(path.join(__dirname + '../../public/exercise.html'));
})

// Render index.html (Continue Workout)
router.get('/exercise/:id', (req,res) => {
    res.sendFile(path.join(__dirname + '../../public/index.html'));
})

// Render stats.js (Dashboard)
router.get('/stats', (req,res) => {
    res.sendFile(path.join(__dirname + '../../public/stats.html'));
})

module.exports = router;