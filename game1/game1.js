var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";
var boxx = 300;
var boxy = 200;
var boxSize = 40;

function setup() {
createCanvas(600, 600);
textAlign(CENTER);
textSize(20);
}


function draw() {
background(149, 53, 232);
if(gameState == "L1"){
levelOne();
}
if(gameState == "L2"){
levelTwo();
}
if(gameState == "L3"){
levelThree();
}
if(gameState == "L4"){
levelFour();
}
if(gameState == "L5"){
levelFive();
}
if(gameState == "win"){
Win();
}

text(("Score: " + score), width/2, 40);
}

function levelOne(){
text("Level 1", width/2, height-20);
var distToBall = dist(ballx, bally, mouseX, mouseY);
line(ballx, bally, mouseX, mouseY);
if(distToBall<ballSize/2){
  ballx=random(width);
  bally=random(height);
  score = score + 10;
}

if(score>190){
  gameState = "L2";
 
}

ellipse(ballx, bally, ballSize, ballSize);
} //end of level 1

function levelTwo(){
background(53, 71, 232);
text("Level 2", width/2, height-20);
var distToBall = dist(ballx, bally, mouseX, mouseY);
var distToBox = dist(boxx, boxy, mouseX, mouseY);
line(ballx, bally, mouseX, mouseY);
if(distToBall<ballSize/2){
  ballx=random(width);
  bally=random(height);
  boxx=random(width);
  boxy=random(height);
  score = score + 10;
}
  if(distToBox<boxSize){
  ballx=random(width);
  bally=random(height);
  boxx=random(width);
  boxy=random(height);
  score = score - 10;
}
if(score>390){
  gameState = "L3";
 
}
if(score<200){
  gameState = "L1";
 
}
fill(10, 10 ,10);
rect(boxx, boxy, boxSize, boxSize);
fill(255, 255, 255);
ellipse(ballx, bally, ballSize, ballSize);
} //end of level 2

function levelThree(){
background(53, 232, 146);
text("Level 3", width/2, height-20);
var distToBall = dist(ballx, bally, mouseX, mouseY);
var distToBox = dist(boxx, boxy, mouseX, mouseY);
line(ballx, bally, mouseX, mouseY);
if(distToBall<ballSize/2){
  ballx=random(width);
  bally=random(height);
  boxx=random(width);
  boxy=random(height);
  score = score + 10;
  boxSize = boxSize + 2;
}
  if(distToBox<boxSize){
  ballx=random(width);
  bally=random(height);
  boxx=random(width);
  boxy=random(height);
  score = score - 10;
  boxSize = boxSize - 1;
}
if(score>590){
  gameState = "L4";
 
}
if(score<400){
  gameState = "L2";
 
}
fill(10, 10 ,10);
rect(boxx, boxy, boxSize, boxSize);
fill(255, 255, 255);
ellipse(ballx, bally, ballSize, ballSize);
} //end of level 3

function levelFour(){
background(232, 172, 53);
text("Level 4", width/2, height-20);
var distToBall = dist(ballx, bally, mouseX, mouseY);
var distToBox = dist(boxx, boxy, mouseX, mouseY);
line(ballx, bally, mouseX, mouseY);
if(distToBall<ballSize/2){
  ballx=random(width);
  bally=random(height);
  boxx=random(width);
  boxy=random(height);
  score = score + 10;
  boxSize = boxSize + 5;
}
  if(distToBox<boxSize/2){
  ballx=random(width);
  bally=random(height);
  boxx=random(width);
  boxy=random(height);
  score = score - 10;
  boxSize = boxSize - 2;
}
if(score>790){
  gameState = "L5";
 
}
if(score<600){
  gameState = "L3";
 
}

fill(10, 10 ,10);
rect(boxx, boxy, boxSize, boxSize);
fill(255, 255, 255);
ellipse(ballx, bally, ballSize, ballSize);
} //end of level 4

function levelFive(){
background(232, 71, 53);
text("Level 5", width/2, height-20);
var distToBall = dist(ballx, bally, mouseX, mouseY);
var distToBox = dist(boxx, boxy, mouseX, mouseY);
if(distToBall<ballSize/2){
  ballx=random(width);
  bally=random(height);
  boxx=random(width);
  boxy=random(height);
  score = score + 10;
  boxSize = boxSize + 5;
}
  if(distToBox<boxSize/2){
  ballx=random(width);
  bally=random(height);
  boxx=random(width);
  boxy=random(height);
  score = score - 10;
  boxSize = boxSize - 2;
}
if(score>990){
  gameState = "win";
 
}
if(score<800){
  gameState = "L4";
 
}
fill(10, 10 ,10);
rect(boxx, boxy, boxSize, boxSize);
fill(255, 255, 255);
ellipse(ballx, bally, ballSize, ballSize);
} //end of level 5

function Win(){
background(232, 53, 184);
text("You Win", width/2, height-5);
} //end of win
