require('./db/connect');
const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks');

// middlewares
app.use(express.json());


// routes
app.get('/hello', (req, res, next) => {
    res.send('Task Manager App from my localhost');
});

app.use('/api/v1/tasks', tasksRouter);


const port = 5000;
app.listen(port);