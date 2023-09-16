const connectDB = require('./db/connect');
const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks');
const tasksController = require('./controllers/tasks');
const errorHandler = require('./helpers/error-handler');
require('dotenv').config();

// middlewares
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', tasksRouter);

app.use(tasksController.notFound);
app.use(errorHandler);

const port = 5000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log('Hi from my server in port ' + port));
    } catch (error) {
        console.log(error);
    }
}

start();