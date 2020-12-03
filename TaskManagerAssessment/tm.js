const Task = require('./model/Task')
const lodash = require('lodash')

let tasks = [];

function addTask(title){
  id = tasks.length+1;

  tasks.push(new Task(id, title, false, "mainproject",))
}

function editTask(){

}

function viewTasks(){

}
function searchTasks(){

}


export {addTask, editTask, viewTasks, searchTasks}
