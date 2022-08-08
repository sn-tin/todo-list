const TaskDetails = (task, date, project, level) => {
    return {
        task: task,
        date: date,
        project: project,
        level: level
    }
}

const ProjectName = (projectName) => {
    return {
        projectName: projectName
    }
}

export { TaskDetails, ProjectName }