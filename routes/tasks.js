const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasks');

router.route('/').get(tasksController.getAllTasks).post(tasksController.postCreateTask);
router.route('/:id').get(tasksController.getSingleTask)
    .patch(tasksController.patchUpdateTask)
    .delete(tasksController.deleteTask);

module.exports = router;