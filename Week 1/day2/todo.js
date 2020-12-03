// ES5 style
// define the object's blueprint
//
// function Todo(id, title, completed){
//   this.id = id;
//   this.title = title;
//   this.completed= completed;
// }
//
// ES6 Style object blueprint

class Todo{
  constructor(id, title, completed){
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}

  todos = [];

  function addTodo(title){

    todos.push(new Todo(todos.length+1, title, false));

  }

  function editTodo(id, newTitle){

  }

  function completeTodo(id){


  }
  function completeAll(){

  }
  function deleteTodo(id){

  }
  function clearCompleted(){
    
  }

  function checkDone(todo){
    return (
      todo.completed)
  }

  function checkID(todo, id){
    return (todo.id === id)
  }

  function viewTodos(flag){
    if (flag === 'ALL'){
      todos.forEach(todo => console.log(todo));
    }
    if (flag === 'COMPLETED'){
      return todos.filter(checkDone);
    }
    if (flag === 'ACTIVE'){
      return todos.filter(!checkDone)
    }

  }
