export const d = document;
export const container = d.getElementById("container")

const DOMcontent = () => {
    const navUI = (() => {
        const navbar = d.createElement("nav")
        const navItems = d.createElement("div")
        navItems. className = "nav-items";
        navItems.innerHTML = `
            <input type="button" class="btn" id="nav-menu">
            <h1 class="nav-logo">ToDo List</h1>
        `;
    
        navbar.appendChild(navItems)
    
        const body = d.querySelector("body")
        body.insertAdjacentElement('afterbegin', navbar)
    })()
    
    const sidebarUI = (() => {
        const sidebar = d.createElement("aside")
        sidebar.setAttribute("id", "sidebar")
        const sidebarContent = d.createElement("div")
        sidebarContent.className = "sidebar-content"
        sidebarContent.setAttribute = "sidebar-content"
        sidebarContent.innerHTML = `
            <h2 class="sidebar-header">Projects</h2>
            <div class="list-of-projects">
                <div class="project-tasks">
                    <p>All Tasks</p>
                </div>
            </div>
            <form class="sidebar-form">
                <input type="text" class="set-project-name" placeholder="Enter New Project's Name">
                <div class="sidebar-btn-wrapper">
                    <button class="sidebar-form-btn" id="add-project">Add</button>
                    <button class="sidebar-form-btn" id="cancel-project">Cancel</button>
                </div>
            </form>
            <button class="add-new-project">Add New Project</button>
        `
    
        sidebar.appendChild(sidebarContent)
    
        container.appendChild(sidebar)
    })()
    
    const mainContent = (() => {
        const tasksMain = d.createElement("section")
        tasksMain.setAttribute("id", "tasks-main")
        const taskHeader = d.createElement("div")
        taskHeader.className = "task-header"
        taskHeader.innerHTML = `
            <h2 class="name-task">All Tasks</h2>
            <button class="add-task-btn">Add Task</button>
        `
        const taskTable = d.createElement("div")
        taskTable.className = "task-table"
        taskTable.innerHTML = `
            <div class="task-table-head">
                <ul class="task-header-list">
                    <li class="input-checkbox-header"></li>
                    <li class="tasks-col-header">Task</li>
                    <li class="tasks-col-header">Due</li>
                    <li class="tasks-col-header">Project</li>
                    <li class="tasks-col-header">Priority</li>
                    <li class="controls-header"></li>
                </ul>
            </div>
            <div class="task-table-body">
            </div>
        `;
    
        tasksMain.appendChild(taskHeader)
            tasksMain.appendChild(taskTable)

        container.appendChild(tasksMain)
    })()

    const addNewTaskForm = (() => {
        const newTaskForm = d.createElement("form")
        newTaskForm.dataset.formMode = "Add Task"
        newTaskForm.className = "new-task-form"
        newTaskForm.innerHTML = `
            <label for="taskName">Task Name</label>
            <input type="text" id="taskName">
            <label for="dueDate">Due Date</label>
            <input type="date" id="dueDate">
            <label for="projectName">Project Category</label>
            <select id="projectName" name="Project Name" aria-label="Selection for project categories">
            </select>
            <label for="levelImportance">Priority Level</label>
            <select id="levelImportance" name="importance" aria-label="Selection for project's level of importance">
                <option id="very-important" value="Very Important">Very Important</option>
                <option id="important" value="Important">Important</option>
                <option id="less-important" value="Less Important">Less Important</option>
            </select>
            <div class="new-task-form-btn">
                <button class="new-task-btn" id="add-task">Add Task</button>
                <button class="new-task-btn" id="cancel-task">Cancel</button>
            </div>
        `
    
        const container = d.getElementById("container")
        container.appendChild(newTaskForm)
    })()
}

export { DOMcontent }