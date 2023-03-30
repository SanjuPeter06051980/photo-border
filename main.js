function preload(){

}

function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(110, 270);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,640,480);
    drawcircle();
    drawrect();
}

function take_snapshot(){
    save('pic.png');
}

function drawcircle(){
   fill("red");
   circle(30, 30, 100);
   circle(600, 30, 100);
   circle(30, 450, 100);
   circle(600, 450, 100);
}

function drawrect(){
    fill("green");
    rect(0, 0, 640, 20);
    rect(0, 460, 640, 20);
    rect(0, 0, 20, 460);
    rect(620, 0, 20, 460);
}