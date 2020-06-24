export let canvas = document.getElementById('canvas');
export let ctx = canvas.getContext('2d');
import { Character } from './character.js';
//import { Block } from './block.js';
import { levelOne } from './levelOne.js';
let character = new Character();

console.log(levelOne);


function draw(){
    ctx.clearRect(0, 0, canvas.width , canvas.height)
    character.drawCharacter();
    levelOne.forEach(block => block.drawBlock());
    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
