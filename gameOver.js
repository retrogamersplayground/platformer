import { ctx } from './index.js';
export class GameOver {
    constructor() {

    }
    gameOver() {
        ctx.font = '100px Verdana';
        ctx.fillText('Game Over', 100, canvas.height/2); 
    }
}