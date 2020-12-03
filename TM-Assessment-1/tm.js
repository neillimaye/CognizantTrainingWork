const Task = require('./model/Task');
const _ = require('lodash');
const moment = require('moment');

// use cases

// data structure ( list | map )

// task list object

const tasklist = [];
let id = 0;

function addNewTask(title, project, dueDate, label, priority) {
    id = id+1;
    newID=id;
    dueDate = moment(dueDate, "MM-DD-YYYY");
    newTask = new Task(
      newID,
      title,
      project,
      dueDate,
      label,
      priority
    );
    tasklist.push(newTask);
    return newTask;
}

function editTask(id, newTitle){
  taskToEdit = _.find(tasklist, function(o){
      return o.id = id;
    })
    taskToEdit.title = newTitle;
    return taskToEdit;
}
function viewTasks() {
  return tasklist;
}
function searchTasks(query) {
  return _.filter(tasklist, (item) => _.startsWith(item.title, query) );
}
module.exports = {
    addNewTask,
    editTask,
    viewTasks,
    searchTasks
}
