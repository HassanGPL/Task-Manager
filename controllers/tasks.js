const Task = require('../models/task');
const asyncWrapper = require('../helpers/async');

exports.getAllTasks = asyncWrapper(async (req, res, next) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
})

exports.getSingleTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
        return res.status(404).json({ msg: `No Task With This ID : ${taskID}` });
    }
    res.json({ task });
})

exports.patchUpdateTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true
    });
    if (!task) {
        return res.status(404).json({ msg: `No Task With This ID : ${taskID}` });
    }
    res.status(200).json({ task });
})

exports.deleteTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
        return res.status(404).json({ msg: `No Task With This ID : ${taskID}` });
    }
    res.json({ task });
})

exports.postCreateTask = asyncWrapper(async (req, res, next) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
})


exports.notFound = (req, res, next) => {
    res.status(404).send(`<h1>Page Not Found 404</h1>`);
}