let y = 0;
let ellipseSize = 60;
let sunSpeed = -.5;
let armSpeed = .2;
let sunSizeGrowth = .15;
let eye = 60;
let eyeSpeed = 3;
let tri1 = 40;
let tri2 = 15;
let tri3 = 40;
let hatSpeed = .2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200,300,600);
  
  //ground
  fill (200,800,100)
  stroke(10, 46, 4);
  rect (0,300, 400, 100);
  
  push()
  //sun
  fill(250, 226, 47);
  strokeWeight(0);
  translate(370,50);
  ellipse(0,y + 200, ellipseSize);
  
  y = y + sunSpeed;
  console.log(y);
  
  ellipseSize = ellipseSize + sunSizeGrowth;
  
  if( y <= -330)
     {
       sunSpeed = -sunSpeed
       sunSizeGrowth = sunSizeGrowth
     }
  if( y >= 0)
    {
      sunSpeed = -sunSpeed
      sunSizeGrowth = -sunSizeGrowth 
    }
  
  pop()
  
   //clouds
  fill(240, 240, 242);
  ellipse (220,80, 130,100);
  fill(242, 239, 242);
  ellipse (130,80, 120,100);
  fill(241, 242, 245);
  ellipse (150,90, 120,100);
  fill(242, 245, 242);
  ellipse (170,80, 130,100);
  fill(243, 243, 243);
  ellipse (190,100, 130,100);
  fill(242, 242, 242);
  ellipse (200,95, 120,100);
  
  //ellipse(x,y,width,height);
  fill(224, 29, 139)
  strokeWeight(1);
  ellipse (150,60,60,80);
  
  //bag
  strokeWeight(4)
  ellipse (50, 160, 35,15);
  strokeWeight(1);
  fill(230, 145, 193);
  rect (30, 160, 40,30);

  //body
  rect (110, 260, 20,50);
  push()
  rotate(radians(15));
  rect (130, 60, 100,160,10);
  rect (170, 220, 20,80);
  pop()
  
  //feet
  push()
  fill (105, 214, 169)
  ellipse (135,310, 40,20);
  ellipse (105,330, 40,20);
  pop()
  
  //arms
  strokeWeight(3);
  line (50, 150, 100,120);
  line (200, 120, 250, 100);
  
  //hat
  strokeWeight(1);
  triangle (100,tri1, 150,tri2, 200,tri3);
  
  tri1 = tri1 - hatSpeed;
  tri2 = tri2 - hatSpeed;
  tri3 = tri3 - hatSpeed;
  
  //eyes
  push()
  fill (255)
  ellipse (140,eye, 15,15);
  ellipse (160,eye, 15,15);
  strokeWeight(1);
  fill (107, 113, 220);
  ellipse (140,eye, 7,7);
  ellipse (160,eye, 7,7);
  pop()
  
  eye = eye + eyeSpeed;
    if( eye <= 240)
     {
       eyeSpeed = -eyeSpeed
     }
  
  //nose
  stroke(156, 22, 100);
  triangle(150,70, 160,80, 150,80);
  
  //mouth
  line(140, 90, 155,93);
  
  line(140, 90, 155,93);
  
    push();
  translate(0,200);
  strokeWeight(1);
  stroke(255)
  rect(-210,70, 20,20);
  pop();
  
  //tree
  strokeWeight(0);
  fill(105, 44, 6);
  rect(290, 250, 50, 200);
  triangle(250,400, 290,370, 310,400);
  triangle(325,400,340,370, 390,400);
  
  //leaves
  fill(6, 105, 46);
  ellipse (300,250, 100,100);
  fill(21, 112, 58);
  ellipse (270,220, 100,100);
  fill(35, 117, 69);
  ellipse (290,200, 100,100);
  fill(5, 115, 50);
  ellipse (340,210, 100,100);
  fill(25, 105, 58);
  ellipse (340,240, 100,100);
  fill(37, 107, 66);
  ellipse (310,185, 100,100);
  

  
}