const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');


const db = require('./models');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

// import html routes
const htmlRoutes = require('./controllers/htmlRoutes');
app.use(htmlRoutes);

// import api routes
const apiRoutes = require('./controllers/apiRoutes');
app.use(apiRoutes);


app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})