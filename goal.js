import {ctx} from './index.js';

export class Goal { 
    constructor () {

    }
    goalCompleted() {
        ctx.font = '100px Verdana';
        ctx.fillText('completed', 100, canvas.height/2);
    }
}