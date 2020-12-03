const tm=require('./tm')

// arrangement
it("should add first task", () =>{
// action
  let task1 = tm.addNewTask("Listen to MBDTF", "yeezy project", "12-03-2020", "GOODMusic", "low");
  // // assert
  expect(task1).toBeDefined()
  expect(task1.title).toBe("Listen to MBDTF")
  expect(task1.id).toBe(1)
})

// arrangement
it("should add a second task with a unique different id", () =>{
// action
  let task2 = tm.addNewTask("Listen to 808s", "yeezy project", "12-03-2020", "GOODMusic", "low");
  // // assert
  expect(task2.id).toBe(2)
})

// arrangement
it("should add a third task with a unique different id. Last one I promise", () =>{
// action
  let task3 = tm.addNewTask("Listen to Pablo", "yeezy project", "12-03-2020", "GOODMusic", "low");
  // // assert
  expect(task3.id).toBe(3)
})

it("should edit task titles through ID", () =>{
  newTask = tm.editTask(2, "Listen to College Dropout")
  expect(newTask.title).toBe("Listen to College Dropout")
})

it ("should view tasks", () => {
  let dummytask = tm.addNewTask("title","project","12-03-2020", "project", "priority")
  list = tm.viewTasks();
  console.log(list);
  expect(tm).toBeDefined();
})


it ('should search tasks', () => {
  let unfindableTask = tm.addNewTask("I shouldn't show up, you shouldn't find me", "10-08-1996", "project", "priority")
  let results = tm.searchTasks("Listen to")
  console.log("search results")
  console.log(results)
})
