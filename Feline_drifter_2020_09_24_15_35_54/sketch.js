var x = 200;
var subiendo=1;

var a = 280;
var moviendo=1;

function setup() {
  createCanvas(450, 550);
}


function draw() {
  background(0,0,0);
  
  
  strokeWeight(1);
  fill(400, 10, 50);
   quad(270,100, 310, 90, 380,200,100,300);//pelo
   quad(270,100, 310, 90, 380,200,100,100);
   quad(270,100, 310, 90, 380,200,100,200);
   quad(270,100, 310, 90, 380,200,100,50);
   quad(270,100, 310, 90, 380,200,100,25);
   quad(270,100, 310, 90, 380,200,100,0);
        fill(240,205,205);
  
  
  
  
    fill(240,205,205);
  rect(160,100,160,180,60);
  rect(160,100,60,180,60, 10);//cabeza
  rect(160,100,50,180,60, 10);
  rect(160,100,40,180,60, 10);

  
  line(260,240, 210, 240, );//boca
 
  fill(235);
  ellipse(200,170,30,30);
  fill(235);
  ellipse(280,170,30,30);//esclera
  
  point(235, 210);
   point(245, 210, 400, 60);//nariz
  
fill(128,64,0);
  ellipse(x,800,10,10);
fill(128,64,0);
  ellipse(a,900,10,10, 40, 10); // pupila
  
  
   fill(100, 80, );
  triangle(170, 90, 260, 90, 20, 600);
  triangle(170, 90, 260, 90, 20, 800);
  triangle(170, 90, 260, 90, 20, 1200);
  triangle(170, 90, 260, 90, 20, 1800);
   triangle(300, 90, 220, 90, 343, 490);//pelo de alfrente
  triangle(300, 90, 220, 90, 343, 290);
  triangle(300, 90, 220, 90, 343, 390);
  

  
  
 
  

  fill(800, 4, 89, 40,  )
   quad(240,285,340,290,240,490,140,200);//cuerpo
  
  
    
  
  
  
  
  if (subiendo===1){
    x=x-0.5;
    if(x===190){
      subiendo=0;
    }
  }
  else {
    x=x+0.5;
    if(x===210){
      subiendo=1;
    }
  }
   if (moviendo===1){
    a=a-0.5;
    if(a===270){
     moviendo=0;
    }
   }
  else {
    a=a+0.5;
    if(a===290){
      moviendo=1;
    }
  }
}