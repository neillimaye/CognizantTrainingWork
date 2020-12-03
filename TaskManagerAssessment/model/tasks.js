class Task{
  constructor(id, title, completed, project, schedule, labels, priority){
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.project = project;
    this.schedule = new Date();
    this.labels = labels;
    this.priority = priority;
  }
}
  //
  // function completetask(id){
  //
  // }
  // function completeAll(){
  //
  // }
  // function deleteTask(id){
  //
  // }
  // function clearCompleted(){
  //
  // }
  // function checkDone(task){
  //   return (task.completed)
  // }
  // function checkID(task, id){
  //   return (task.id === id)
  // }
  // function viewTasks(flag){
  //   if (flag === 'ALL'){
  //     tasks.forEach(task => console.log(task));
  //   }
  //   if (flag === 'COMPLETED'){
  //     return tasks.filter(checkDone);
  //   }
  //   if (flag === 'ACTIVE'){
  //     return tasks.filter(!checkDone)
  //   }
  //
  // }
