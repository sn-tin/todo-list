import { main } from '@popperjs/core';
import { d } from './DOMcontent';

// If each project names on sidebar is clicked
const filterProjects = (target) => {
  const tasksProject = d.querySelectorAll('.task-body-list');
  const mainName = d.querySelector('.name-task');
  // Change name in main when project is clicked
  const projectName = target.firstElementChild.textContent;
  mainName.textContent = projectName;

  tasksProject.forEach((task) => {
    task.style.display = 'flex';
    const category = task.dataset.projectCategory;
    if (category !== projectName) {
      task.style.display = 'none';
      if (projectName === 'All Tasks') {
        task.style.display = 'flex';
      }
    }
  });
};

export { filterProjects };
