import './styles/main.scss'
import { DOMcontent } from './app/DOMcontent.js'
import { DOMevents, listProject } from './app/DOMevents.js'

document.addEventListener('DOMContentLoaded', () => {
    DOMcontent()
    DOMevents()
    listProject()
})