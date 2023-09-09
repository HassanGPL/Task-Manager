const Task = require('../models/task');

exports.getAllTasks = (req, res, next) => {
    res.send('All Tasks...');
}

exports.getSingleTask = (req, res, next) => {
    res.send('get single task...');
}

exports.patchUpdateTask = (req, res, next) => {
    res.send('update task...');
}

exports.deleteTask = (req, res, next) => {
    res.send('delete task...');
}

exports.postCreateTask = async (req, res, next) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}