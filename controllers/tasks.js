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

exports.postCreateTask = (req, res, next) => {
    res.send('create task...');
}