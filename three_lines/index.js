var a1;
var a2;
var a3;

var a1_dragged = false;
var a2_dragged = false;
var a3_dragged = false;

var systems = [];

function setup() {   
    //set up window and canvas
    createCanvas(windowWidth, windowHeight);
    background(0);
    a1 = new anchor(300,200);
    a1.c = color(255,0,0);
    a2 = new anchor(1200, 300);
    a2.c = color(0,255,0);
    a3 = new anchor(700, 600);
    a3.c = color(0,0,255);
    
}

function draw() {
    background(0);
    a1.update();
    a2.update();
    a3.update();
    // console.log(dist(a.x, a.y, mouseX, mouseY));
    
    if(a1_dragged) {
        a1.x = mouseX;
        a1.y = mouseY;
    }
    if(a2_dragged) {
        a2.x = mouseX;
        a2.y = mouseY;
    }
    if(a3_dragged) {
        a3.x = mouseX;
        a3.y = mouseY;
    }
    
    for (var l of systems) {
        l.update();
    }
}

function mousePressed() {
    if((dist(mouseX, mouseY, a1.x, a1.y) >= a1.radius) 
    && (dist(mouseX, mouseY, a2.x, a2.y) >= a2.radius) 
    && (dist(mouseX, mouseY, a3.x, a3.y) >= a3.radius)) {
        l = new line_system();
        systems.push(l);
    }

    if ((dist(mouseX, mouseY, a1.x, a1.y) <= a1.radius)) {
        a1_dragged = true;
    }

    if ((dist(mouseX, mouseY, a2.x, a2.y) <= a2.radius)) {
        a2_dragged = true;
    }

    if ((dist(mouseX, mouseY, a3.x, a3.y) <= a3.radius)) {
        a3_dragged = true;
    }
}

function mouseReleased() {
    if ((dist(mouseX, mouseY, a1.x, a1.y) <= a1.radius)) {
        a1_dragged = false;
    }

    if ((dist(mouseX, mouseY, a2.x, a2.y) <= a2.radius)) {
        a2_dragged = false;
    }

    if ((dist(mouseX, mouseY, a3.x, a3.y) <= a3.radius)) {
        a3_dragged = false;
    }
}


function dist(x1,y1,x2,y2) {
    return sqrt(pow(abs(x1-x2), 2) + pow(abs(y1-y2), 2));
}

class line_system {
    constructor() {
        this.r = new lin(mouseX, mouseY, a1.x, a1.y);
        this.r.c = color(255, 0, 0);
        this.g = new lin(mouseX, mouseY, a2.x, a2.y);
        this.g.c = color(0, 255, 0);
        this.b = new lin(mouseX, mouseY, a3.x, a3.y);
        this.b.c = color(0, 0, 255);
    }

    update() {
        this.r.update();
        this.g.update();
        this.b.update();
    }
}

class lin {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.c = color(0,0,0);
    }

    update() {
        stroke(this.c);
        line(this.x1, this.y1, this.x2, this.y2);
    }

}

class anchor {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 30;
        this.c = color(0,0,0)
    }

    update() {
        fill(this.c);
        // fill(255, 125, 125);
        ellipse(this.x, this.y, this.radius*2, this.radius*2);
    }
}