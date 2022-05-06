import './style.css';
import Keyboard from './Keyboard';
import Dom from './Dom';

const page = new Dom();
page.createPage();

const keyboard = new Keyboard('rus');
const buttons = keyboard.generateButtons();
page.addKeyboard(buttons);

buttons.childNodes.forEach((b) => {
  b.addEventListener('mousedown', (e) => {
    e.preventDefault();
    const codeClass = e.target.classList[1];
    const item = keyboard.keys.find((el) => el.codeName === codeClass);
    if (!item) {
      return;
    }
    keyboard.pressKey(item.codeName);
    item.addPressed();
  });
  b.addEventListener('mouseup', (e) => {
    e.preventDefault();
    const codeClass = e.target.classList[1];
    const item = keyboard.keys.find((el) => el.codeName === codeClass);
    if (!item) {
      return;
    }
    keyboard.disableShift(item.codeName);
    item.removePressed();
  });
});

window.addEventListener('keydown', (e) => {
  e.preventDefault();
  const item = keyboard.keys.find((el) => el.codeName === e.code);
  if (!item) {
    return;
  }
  keyboard.pressKey(item);
  item.addPressed();
});

window.addEventListener('keyup', (e) => {
  e.preventDefault();
  const item = keyboard.keys.find((el) => el.codeName === e.code);
  if (!item) {
    return;
  }
  keyboard.disableShift(e.code);
  keyboard.cancelLayout(e.code);
  item.removePressed();
});
