var x = 300;
var y = 0;
var speed = 20;

var windowX = 1000;;
var windowY = 700;
var border_right;

var back = false;
var velocity;

var gravity = 120;

var balls = [];

var rSlider, gSlider, bSlider;
var red = 0;
var green = 0;
var blue = 0;


function setup() {   
    //set up window and canvas
    windowX = windowWidth;
    windowY = windowHeight;
    createCanvas(windowX, windowY);
    border_right = 0.8*windowWidth;
    
    
    //fill in different color boxes
    fill(167);
    rect(0,0,windowWidth,windowHeight); //the main canvas background


    //create sliders
    textSize(15);
    noStroke();
    rSlider = createSlider(0, 255, 255);
    rSlider.position(border_right+30, 20);
    gSlider = createSlider(0, 255, 150);
    gSlider.position(border_right+30, 50);
    bSlider = createSlider(0, 255, 125);
    bSlider.position(border_right+30, 80);
}

function draw() {
    fill(125);
    rect(border_right,0,0.2*windowX,windowY/3); //controls background
    for (var b of balls) {
        b.update();
        // console.log(b.xSpeed + " " + b.ySpeed);
    }

    //sliders stuff
    red = rSlider.value();
    green = gSlider.value();
    blue = bSlider.value();

    fill(255);
    text("red", rSlider.x + rSlider.width + 20, 35);
    text("green", gSlider.x  + gSlider.width + 20, 65);
    text("blue", bSlider.x + bSlider.width + 20, 95);



    //a shape for testing the color
    fill(red,green,blue);
    ellipse(border_right + 100, 200, 100, 100);
}

class ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 50;
        this.xSpeed = 300;
        this.ySpeed = 0;
        this.lowerB = windowY - this.radius;
    }
    update() {
        this.y += this.ySpeed * 0.01;
        this.x += this.xSpeed * 0.01;
        this.ySpeed += gravity;
        //(this.y >= this.lowerB)
        if ((this.y >= this.lowerB && this.ySpeed > 0)) {
            this.ySpeed = -this.ySpeed*0.90;
        }
        stroke(255);
        // fill(236,143,62);
        fill(red,green,blue);
        if (this.x-this.radius <= windowX) {
            
            ellipse(this.x, this.y, this.radius*2, this.radius*2);
        }
    }
}

function mousePressed() {
    if (mouseX < border_right | mouseY > windowY/3) {
        b = new ball(mouseX, mouseY);
        if (b.x >= border_right/2) {
            b.xSpeed = -b.xSpeed;
        }
        balls.push(b);
    }
}