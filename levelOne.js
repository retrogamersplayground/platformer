import { Block } from './block.js';

let block1 = new Block(0, canvas.height - 20, canvas.width - 300, 20, '8B4513', 'brick');
let block2 = new Block(canvas.width - 100, canvas.height - 20, canvas.width - 20, 20, '8B4513', 'brick');
let block3 = new Block(200, canvas.height - 80, 100, 20, '8B4513', 'brick');
let block4 = new Block(350, canvas.height - 140, 20, 20, '8B4513', 'brick');
let block5 = new Block(425, canvas.height - 200, 20, 20, '989898', 'rubber');
let block6 = new Block(350, canvas.height - 380, 20, 20, '8B4513', 'brick');
let block7 = new Block(200, canvas.height - 420, 100, 20, '8B4513', 'brick');
let block8 = new Block(100, canvas.height - 560, 5, 100, 'ffffff', 'trampoline');
let block9 = new Block(canvas.width - 300, canvas.height - 470, 5, 470, '000000', 'wall');
let block10 = new Block(canvas.width - 20, canvas.height - 40, 20, 20, 'FF0000', 'goal');
export let levelOne = [block1, block2, block3, block4, block5, block6, block7, block8, block9, block10];
