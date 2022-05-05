import './style.css';
import buttonsList from './buttons';

const content = document.createElement('div');
content.classList.add('content');
const h1 = document.createElement('h1');
h1.textContent = 'ПЕШИ ИСЧО!';
h1.classList.add('title');
content.append(h1);
const textarea = document.createElement('textarea');
textarea.value = 'test';
textarea.classList.add('textarea');
content.append(textarea);

function generateButtons() {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  for (let i = 0; i < buttonsList.length; i += 1) {
    const current = buttonsList[i];
    const btn = document.createElement('button');
    btn.classList.add(current.codeName);
    btn.classList.add('button');
    btn.textContent = current.eng.Low;
    keyboard.append(btn);
  }
  content.append(keyboard);
  return content;
}
document.body.append(generateButtons());

const description = document.createElement('p');
description.textContent = 'Клавиатура создана в операционной системе Ubuntu(Linux)';
description.classList.add('descr');
content.append(description);

const info = document.createElement('p');
info.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';
info.classList.add('info');
content.append(info);

window.addEventListener('keydown', (e) => {
  console.log(e)
})
