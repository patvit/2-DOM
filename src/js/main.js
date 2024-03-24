import Position from './Position';
import goblin from '../img/goblin.png';

const containerEl = document.getElementsByClassName('container')[0];

const cells = [];
for (let i = 1; i <= 16; i += 1) {
  const cellEl = document.createElement('div');
  cellEl.classList.add('cell');
  cells.push(cellEl);
}

const imgEl = document.createElement('img');
imgEl.classList.add('goblin');
imgEl.src = goblin;

cells[Position.getRandomPosition()].append(imgEl);

containerEl.append(...cells);

setInterval(() => cells[Position.getRandomPosition()].append(imgEl), 1000);
