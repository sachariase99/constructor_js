class myRect {
    constructor (ctx) {
        this.ctx = ctx;

        this.updateRect();
    }

    updateRect() {
        this.x = Math.random() * 300;
        this.y = Math.random() * 450;
        this.width = Math.random() * 15;
        this.height = Math.random() * 15;

        this.drawRect();
    }

    drawRect() {
        this.ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, ${Math.random()})`;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

const myCanvas = document.getElementById('myCanvas');
myCanvas.width = 300;
myCanvas.height = 450;

const ctx = myCanvas.getContext('2d');

console.log(ctx);

let myArray = [];


for (let i = 0; i < 10; i++) {
    myArray.push(new myRect(ctx));
}

var myTimer = setInterval(change, 100);

function change() {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

    myArray.forEach(element => {
        element.updateRect();
    });
}