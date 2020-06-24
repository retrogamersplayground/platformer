import { canvas } from './index.js';
import { ctx } from './index.js';

export class Character {
    constructor() {
        this.width = 10;
        this.height = 15;
        this.x = 50;
        this.y = canvas.height - 20 - this.height;
        this.color = '#000000';
    }
    drawCharacter() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}