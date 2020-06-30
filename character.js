import { canvas } from './index.js';
import { ctx } from './index.js';
import { controller } from './index.js';
import { levelOne, block2 } from './levelOne.js';
import { block1 } from './levelOne.js';
import { block3 } from './levelOne.js';
import { block4 } from './levelOne.js';
import { block5 } from './levelOne.js';
import { block9 } from './levelOne.js';
import {block10} from './levelOne.js';
import { goal } from './index.js';

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
        this.rubberJump = 0;
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
        this.y_velocity -= 100;
    }
    physics() {
        this.y_velocity += 1.5; //gravity
        this.x += this.x_velocity;
        this.y += this.y_velocity;
        this.y += this.rubberJump;
        this.x_velocity *= 0.9;//friction
        this.y_velocity *= 0.9;//friction
        this.y_position = Math.floor(this.y);
        this.x_position = Math.floor(this.x);
        
        //block 1 collision
       if (this.y_position + this.height >= /*canvas.height - 20 - 15*/ block1.y && this.x_position < block1.x + block1.width) {
            this.y = block1.y - this.height - 1;
            controller.resetJump();
            this.y_velocity = 0;
        }

        //block2 collision
        if (this.y_position + this.height >= /*canvas.height - 20 - 15*/ block2.y && this.x_position + this.width >= block2.x) {
            this.y = block2.y - this.height - 1;
            controller.resetJump();
            this.y_velocity = 0;
        }

        //left wall collision
        if (this.x <= 0) {
            this.x = 0;
            this.x_velocity = 0;
        }

        //right wall collision
        if(this.x > canvas.width) {
            this.x = canvas.width - this.width;
            this.x_velocity = 0;
        }

        //block3 collision top
        if(this.y_position - this.height < block3.y && this.x_position >= block3.x && this.x_position < block3.x + block3.width) {
            console.log('collision');
            this.y_velocity = 0;
            this.y = block3.y - this.height -1;
            controller.resetJump();
        }

        //block4 collision top
        if(this.y_position - this.height < block4.y && this.x_position >= block4.x && this.x_position < block4.x + block4.width) {
            console.log('collision');
            this.y_velocity = 0;
            this.y = block4.y - this.height -1;
            controller.resetJump();
        }

        //block 5 collision top
        if(this.y_position - this.height < block5.y && this.x_position >= block5.x && this.x_position < block5.x + block5.width) {
            console.log('collision');
            this.y_velocity = 0;
            this.y = block5.y - this.height -1;
            controller.resetJump();
        }

        //wall block9 collision
        if((this.x_position + this.width >= block9.x && this.x_position + (this.width / 2) <= block9.x + block9.width && this.y_position - this.height > block9.y)) {
            this.x = block9.x - this.width;
            this.x_velocity = 0;
        }
         
        //goal block10 collision
        if(this.y_position + this.height > block10.y + block10.height && this.x_position >= block10.x && this.x_position < block10.x + block10.width || (this.y_position - this.height > block10.y && this.x_position - this.width >= block10.x)) {
            this.velcoity = 0;
            goal.goalCompleted();
        }
    }
}

