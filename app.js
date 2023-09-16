const connectDB = require('./db/connect');
const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks');
require('dotenv').config();

// middlewares
app.use(express.static('./public'));
app.use(express.json());


// // routes
// app.get('/', (req, res, next) => {
//     res.send('Task Manager App from my localhost');
// });

app.use('/api/v1/tasks', tasksRouter);


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