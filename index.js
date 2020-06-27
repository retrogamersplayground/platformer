export let canvas = document.getElementById('canvas');
export let ctx = canvas.getContext('2d');
import { Character } from './character.js';
import { levelOne } from './levelOne.js';
import { Controller } from './controller.js';

export let character = new Character();
export let controller = new Controller(character);

window.addEventListener('keydown', controller.keyListener);
window.addEventListener('keyup', controller.keyListener);

function draw(){
    ctx.clearRect(0, 0, canvas.width , canvas.height)
    character.drawCharacter();
    character.physics();
    controller.move();
    levelOne.forEach(block => block.drawBlock());
    
    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);

