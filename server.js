if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');

const indexRouter = require('./routes/index');
const projectRouter = require('./routes/projects');
const plannerRouter = require('./routes/planner');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

app.use('/', indexRouter);
app.use('/projects', projectRouter);
app.use('/planner', plannerRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server is running on ", port);
});