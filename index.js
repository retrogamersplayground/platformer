export let canvas = document.getElementById('canvas');
export let ctx = canvas.getContext('2d');

function draw(){
    ctx.clearRect(0, 0, canvas.width , canvas.height)
    
    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
