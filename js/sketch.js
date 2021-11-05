function setup() {
    var canvas = createCanvas(600, 400);
    canvas.parent("p5container");

    background(200);
}

function draw() {
    rect(mouseX, mouseY, 100, 170);
    
}