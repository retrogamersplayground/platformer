import { canvas } from './index.js';
import { ctx } from './index.js';
import { controller } from './index.js';
import { levelOne } from './levelOne.js';
import { block3 } from './levelOne.js';
export class Character {
    constructor() {
        this.width = 10;
        this.height = 15;
        this.x = 50;
        this.x_velocity = 0;
        this.y = (canvas.height - 20 - 15);
        this.y_velocity = 0;
        this.color = '#000000';
        this.y_position = null;
    }
    drawCharacter() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
    moveLeft() {
        this.x_velocity -= 0.5;
    }
    moveRight() {
        this.x_velocity += 0.5;
    }
    jump() {
        this.y_velocity -= 24;
    }
    physics() {
        this.y_velocity += 1.5; //gravity
        this.x += this.x_velocity;
        this.y += this.y_velocity;
        this.x_velocity *= 0.9;//friction
        this.y_velocity *= 0.9;//friction
        this.y_position = Math.floor(this.y);
        this.x_position = Math.floor(this.x);
        //prevent falling below screen till block collision is done
       if (this.y > canvas.height - 20 - 15) {
            this.y = canvas.height - 20 - 15;
            controller.resetJump();
            this.y_velocity = 0;
        }

        //left wall collision
        if (this.x <= 0) {
            this.x = 0;
            this.x_velocity = 0;
        }
        //block3 collision top
        if(this.y_position - this.height < block3.y && this.x_position >= block3.x && this.x_position < block3.x + block3.width) {
            console.log('collision');
            this.y_velocity = 0;
            this.y = block3.y - this.height -1;
            controller.resetJump();
        }
        //block3 collision bottom
        // if(this.y_position < block3.y + block3.height + 1 && this.y_position < block3.y - 5 && this.x_position >= block3.x && this.x_position < block3.x + block3.width) {
        //     this.y = block3.y + block3.height;
        //     this.y_velocity = + 10;
        // }
        console.log(this.y_position);
    }
}
console.log(block3.y);
