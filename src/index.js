document.addEventListener("DOMContentLoaded", () => {
  // your code here
// //grab necessary DOM el's
// const newTaskForm = document.getElementById("create-task-form");
// const newTaskDescription = document.getElementById("new-task-description");
// const newTaskPriority = document.getElementById("new-task-priority");


//   //ul where the new task will live on the DOM
//   //child of the parent ul for tasks
//   const newTaskUl = document.getElementById("tasks");

//   //add event listeners
//   newTaskForm.addEventListener("submit", createNewTask);
// });

// const createNewTask = event => {
//   event.preventDefault();
//   //stops form from defaulting to a POST method
//   const newTaskDescription = document.getByElementId("new-task-description");
//   const newTask = document.createElement("li");
//   newTask.innerText = newTaskDescription.value;

//   appendNewTask(newTask);
//   event.target.reset();
// };

// const appendNewTask = task => {
//   document.getElementById("tasks").appendChild(task);
// };
 //form and relevant input fields
 const newTaskForm = document.getElementById("create-task-form");
 const newTaskDescription = document.getElementById("new-task-description");
 const newTaskPriority = document.getElementById("new-task-priority");

 //ul where new tasks will live on the DOM
 const newTaskUl = document.getElementById("tasks");

 //attach event listeners
 newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
 event.preventDefault();
 //stop form from trying to submit
 const newTaskDescription = document.getElementById("new-task-description");
 const newTask = document.createElement("li");
 newTask.innerText = newTaskDescription.value;

 appendNewTask(newTask);
 event.target.reset();
};

const appendNewTask = task => {
 document.getElementById("tasks").appendChild(task);
};
