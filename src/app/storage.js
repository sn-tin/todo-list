import { newTaskDetails, newProject } from "./DOMevents";

const saveLocalTasks = (task) => {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const getTasks = () => {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach((task) => {
    newTaskDetails(task)
  })
}

const removeTasks = (task) => {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  let index = task.parentElement.parentElement.children[1].textContent;
  for(let x in tasks) {
    if(tasks[x].task === index) {
      tasks.splice(x,1)
    }
  }
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

export { saveLocalTasks, getTasks, removeTasks }