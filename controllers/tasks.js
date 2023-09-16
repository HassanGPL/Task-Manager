const Task = require('../models/task');


exports.getAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

exports.getSingleTask = async (req, res, next) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: `No Task With This ID : ${taskID}` });
        }
        res.json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

exports.patchUpdateTask = async (req, res, next) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true
        });
        if (!task) {
            return res.status(404).json({ msg: `No Task With This ID : ${taskID}` });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

exports.deleteTask = async (req, res, next) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: `No Task With This ID : ${taskID}` });
        }
        res.json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

exports.postCreateTask = async (req, res, next) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });

    } catch (error) {
        res.status(500).json({ msg: error });
    }
}


exports.notFound = (req, res, next) => {
    res.status(404).send(`<h1>Page Not Found 404</h1>`);
}