import textEditIcon from '../assets/26-write.svg'
import deleteIcon from '../assets/61-trash.svg'
import { d } from './DOMcontent'
import { displayAlert } from './alerts'
import { TaskDetails, ProjectName } from './factories'
import { filterProjects } from './filter'
import { DOMcontent } from './DOMcontent'

let editing = false

// Create new project in sidebar
const newProject = (item) => {
    const addNewProject = document.createElement("div");
    addNewProject.className = "project-tasks";
    addNewProject.innerHTML = `
    <p>${item.projectName}</p>
    <div class="controls">
        <img class="delete" src="${deleteIcon}" alt="Trash icon for delete button">
    </div>
    `;

    const projectsList = document.querySelector(".list-of-projects");
    projectsList.insertAdjacentElement('beforeend', addNewProject)
}

// Insert project names on dropdown options in Add Task form
const projectCategoryOptions = (option) => {
        const dropdownProjectOption = d.createElement('option')
        dropdownProjectOption.dataset.projectOption = `${option.projectName}`
        dropdownProjectOption.textContent = `${option.projectName}`

    const projectNamesOptions = d.getElementById("projectName")
    projectNamesOptions.insertAdjacentElement('beforeend', dropdownProjectOption)
}

// Create new task in ToDo's main
const newTaskDetails = (details) => {
    const taskBodyList = d.createElement("ul")
    taskBodyList.className = "task-body-list"
    taskBodyList.dataset.projectCategory = `${details.project}`
    taskBodyList.innerHTML = `
        <li class="input-checkbox-body tasks-col-body"><input type="checkbox" class="task-checkbox"></li>
        <li data-label="Task:" class="tasks-col-body task-name task-content">${details.task}</li>
        <li data-label="Due:" class="tasks-col-body task-date task-content">${details.date}</li>
        <li data-label="Project:" class="tasks-col-body task-project task-content">${details.project}</li>
        <li data-label="Level:" class="tasks-col-body task-level task-content">${details.level}</li>
        <li class="controls-body tasks-col-body">
            <img class="editText editTask" src="${textEditIcon}">
            <img class="delete" src="${deleteIcon}">
        </li>
    `
    const tableBody = d.querySelector(".task-table-body")
    tableBody.insertAdjacentElement("beforeend", taskBodyList)
}

const clearFields = () => {
    d.querySelector(".set-project-name").value = ''
    d.getElementById("taskName").value = ''
    d.getElementById("dueDate").value = ''
    d.getElementById("projectName").value = ''
}

const displayForm = (target) => {
    target.classList.add("active")
}

const hideForm = (target) => {
    target.classList.remove("active")
}

const deleteButton = (target) => {
    target.parentElement.parentElement.remove()
    const projectName = target.parentElement.parentElement.firstElementChild.textContent
    d.querySelector(`[data-project-option="${projectName}"]`).remove()
}

const checkedTask = (target) => {
    if(target.checked === true) {
        for(let i = 1; i <= 4; ++i){
            target.parentElement.parentElement.children[i].classList.add("checked-task")
        }
    } else {
        for(let i = 1; i <= 4; ++i){
            target.parentElement.parentElement.children[i].classList.remove("checked-task")
        }
    }
}

const editAddedTask = (target) => {
    const taskForm = d.querySelector(".new-task-form")
    const task = target.parentElement.parentElement
    const formTaskName = task.children[1].textContent
    const formTaskDate = task.children[2].textContent
    const formTaskProject = task.children[3].textContent
    const formTaskPriority = task.children[4].textContent
    task.classList.add("editing")
    editing = true
    displayForm(taskForm)
    d.getElementById("taskName").value = formTaskName
    d.getElementById("dueDate").value = formTaskDate
    d.getElementById("projectName").value = formTaskProject
    d.getElementById("levelImportance").value = formTaskPriority
    task.style.display = "none"
}

const listProject = () => {
    const dummyProject = [
        {
            projectName: "Coding"
        },
        {
            projectName: "Personal"
        },
        {
            projectName: "Career"
        }
    ]
    const newProj = dummyProject;
    newProj.forEach((proj) => {
        newProject(proj)
        projectCategoryOptions(proj)
    })

    const dummyData = [
        {
            task: "Create ToDo App",
            date: "2022-08-05",
            project: "Coding",
            level: "Very Important"
        },
        {
            task: "Apply for Junior FED Job",
            date: "2022-08-05",
            project: "Career",
            level: "Important"
        },
        {
            task: "Create Portfolio",
            date: "2022-08-05",
            project: "Personal",
            level: "Less Important"
        }
    ]
    
    const newData = dummyData;
    newData.forEach((data) => {
        newTaskDetails(data)
    })
}

const DOMevents = () => {
    d.addEventListener('click', (e) => {

        // If menu on nav-bar gets clicked
        if(e.target.matches("#nav-menu")){
            const sidebar = d.getElementById("sidebar")
            sidebar.classList.toggle("active")
        }
        // If add new project on sidebar gets clicked
        if(e.target.matches(".add-new-project")){
            const addProjectForm = d.querySelector(".sidebar-form")
            e.target.style.display = "none"
            displayForm(addProjectForm)
        }

        // If "Add" or "Cancel" is clicked on sidebar form
        if(e.target.matches("#add-project") || e.target.matches("#cancel-project")){
            const addNewProjectBtn = d.querySelector(".add-new-project")
            const addProjectForm = d.querySelector(".sidebar-form")
            const formTextInput = d.querySelector(".set-project-name").value
            e.preventDefault()
            if(e.target.matches("#add-project")){
                if(formTextInput === ''){
                    displayAlert("Must answer text field", "warning")
                }  
                else {
                    const input = ProjectName(formTextInput)
                    if(formTextInput.length > 10){
                        displayAlert("Characters must not exceed 10 letters", "warning")
                    } else {
                        newProject(input)
                        projectCategoryOptions(input)
                        clearFields()
                    }
                }
            } else {
                clearFields()
                hideForm(addProjectForm)
                addNewProjectBtn.style.display = "block"
            }
        }

        // If project names on sidebar is clicked
        if(e.target.matches(".project-tasks")){
            filterProjects(e.target)
        }

        // If "Add Task" is clicked on main
        if(e.target.matches(".add-task-btn")){
            const addTaskForm = d.querySelector(".new-task-form")
            const addBtnForm = d.querySelector("#add-task")
            addBtnForm.value = "Add Task"
            displayForm(addTaskForm)
            
        }

        // If "Add Task" or "Cancel" in add task form is clicked
        if(e.target.matches("#add-task") || e.target.matches("#cancel-task")){
            e.preventDefault()
            const task = d.getElementById("taskName").value
            const date = d.getElementById("dueDate").value
            const project = d.getElementById("projectName").value
            const level = d.getElementById("levelImportance").value
            const taskForm = d.querySelector(".new-task-form")

            const editTask = d.querySelectorAll(".editTask")

            if(e.target.matches("#add-task")){
                if(task === '' || date === '' || project === '' || level === ''){
                    displayAlert("Must fill all text fields", "warning")
                } else {
                    const details = TaskDetails(task, date, project, level)
                    newTaskDetails(details)
                    hideForm(taskForm)
                    clearFields()
                    displayAlert("You have successfully added a new task!", "success")
                }
            } else {
                hideForm(taskForm)
                clearFields()
                if(editing) {
                    d.querySelector('.task-body-list.editing').style.display = "flex";
                    d.querySelector('.task-body-list.editing').classList.remove('editing')
                }
            }
        }

        // If "Edit" icon is clicked 
        if(e.target.matches(".editText")){
            const addBtnForm = d.querySelector("#add-task")
            addBtnForm.value = "Edit Task"
            editAddedTask(e.target)
        }

        // If "Delete" icon is clicked 
        if(e.target.matches(".delete")){
            deleteButton(e.target)
            displayAlert("Successfully removed!", "primary")
        }

        // If checkbox value is checked
        if(e.target.matches(".task-checkbox")){
            checkedTask(e.target)
        }


    })
    
}

export { DOMevents, listProject }