const Task = require('../models/task');

const createTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const task = await Task.create({ title, description });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};

const getTasks = async (req, res) => {
    const { status, priority, dueDate, assignee } = req.query;
    const filters = {};
  
    if (status) {
      filters.status = status;
    }
  
    if (priority) {
      filters.priority = priority;
    }
  
    if (dueDate) {
      filters.dueDate = dueDate;
    }
  
    if (assignee) {
      filters.assignee = assignee;
    }
  
    try {
      const tasks = await Task.find(filters);
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  };
  

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const task = await Task.findByIdAndUpdate(id, { title, description }, { new: true });
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update task' });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
