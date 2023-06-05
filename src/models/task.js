const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: 'pending' },
  priority: { type: String, default: 'low' },
  dueDate: { type: Date, default: Date.now },
  assignee: { type: String },
});

module.exports = mongoose.model('Task', taskSchema);
