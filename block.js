import { ctx } from './index.js';

export class Block {
    constructor(x, y, width, height, color, type) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.color = '#' + color;
        this.type = type;
    }
    drawBlock() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
        ctx.closePath();
    }
}