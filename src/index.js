import './styles/main.scss';
import { DOMcontent } from './app/DOMcontent';
import { DOMevents } from './app/DOMevents';
import { getTasks } from './app/storage'

document.addEventListener('DOMContentLoaded', () => {
  DOMcontent();
  DOMevents();
  getTasks();
});
