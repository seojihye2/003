var xPos1=40;
var xDir1=1;

function setup(){
  createCanvas(800,585);
  background(0);
}

function draw() {
  background(0);
  xPos1=xPos1+3*xDir1;

   //바게트 다리
  fill(255);
  quad(xPos1-20,535,xPos1-10,540,xPos1-40,580,xPos1-50,580);
  quad(xPos1+20,535,xPos1+10,540,xPos1+40,580,xPos1+50,580);
  
  //바게트 발
  fill(255);
  quad(xPos1-50,580,xPos1-40,570,xPos1-20,585,xPos1-30,585);
  quad(xPos1+37,575,xPos1+45,585,xPos1+65,570,xPos1+55,570);
    
  //바게트
  fill(250,140,0);
  stroke(200,100,0);
  strokeWeight(5);
  ellipse(xPos1,400,80,300);
  
  
  //바게트눈 
  stroke(50);
  arc(xPos1-12,300,15,10,0,PI);
  arc(xPos1+12,300,15,10,0,PI);
  
  //바게트 몸
  fill(200,100,0);
  noStroke();
  ellipse(xPos1,350,60,15);
  ellipse(xPos1,400,60,15);
  ellipse(xPos1,450,60,15);
  
  //바게트 입
  stroke(50);
  fill(250,140,0);
  strokeWeight(3);
  arc(xPos1,320,10,10,radians(-90),radians(90) );
  arc(xPos1,330,10,10,radians(-90),radians(90) );
  
  //바게트 수줍수줍
  fill(255,100,100);
  noStroke();
  ellipse(xPos1-20,315,20,10);
  ellipse(xPos1+20,315,20,10);
  
  if(xPos1<40 || xPos1>width-40) {
    xDir1*=-1;
  }
}