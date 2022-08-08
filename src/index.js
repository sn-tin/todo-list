import './styles/main.scss';
import { DOMcontent } from './app/DOMcontent';
import { DOMevents, listProject } from './app/DOMevents';

document.addEventListener('DOMContentLoaded', () => {
  DOMcontent();
  DOMevents();
  listProject();
});
