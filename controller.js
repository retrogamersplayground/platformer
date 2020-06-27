import { canvas } from './index.js';
import { character } from './index.js';

export class Controller {
    constructor() {
        this.left = false;
        this.right = false;
        this.up = false;
        this.jump = false;
        
       window.addEventListener('keydown', event => {
            switch(event.keyCode) {
                case 37: //left key
                this.left = true;
                break;
                case 38: //up key
                this.up = true;
                break;
                case 39: //right key
                this.right = true;
                break;
            }
       });
       window.addEventListener('keyup', event => {
            switch(event.keyCode) {
                case 37: //left key
                this.left = false;
                break;
                case 38: //up key
                this.up = false;
                break;
                case 39: //right key
                this.right = false;
                break;
            }
        });
    }
   move() {
        if(this.up === true && this.jump != true) {
            character.jump();
            this.jump = true;
        }
        if(this.left === true) {
            character.moveLeft();
        }
        if(this.right === true) {
            character.moveRight();
        }  
   }
   resetJump() {
       this.jump = false;
   }
}
