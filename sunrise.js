var col = {
  r: 0,
  g: 0,
  b: 0
};

let cloudArray = [];
let starArray = [];
let starArrayNew = [];
let star1;

class cloud {
  constructor(x, y ,r) {
    this.x = x,
    this.y = y,
    this.r = r;
    this.randomColor1 =  255;
    this.randomColor2 = 255;
    this.randomColor3 = 255;
    
  }
  colorChange(px, py, randomChooser, index){
    
    this.randomChooser = randomChooser;
    // this.index = random(10, 95);
    
    let d = dist(px, py, this.x, this.y);
    
    if( d < this.r){
      this.randomColor1 = this.randomChooser+index;
      this.randomColor2 = this.randomChooser-index ;
      this.randomColor3 = this.randomChooser+index ;
    }
    
  }
  
  show() {
    fill(this.randomColor1, this.randomColor2, this.randomColor3);
    ellipse(this.x, this.y, this.r);
  }
  
  move(){
    this.x -= 0.6;
  }
  
  
}

class star {
  constructor(x,y,r) {
    this.x = x
    this.y = y
    this.r = r;
  }
  
  show() {
    fill(0, 0, 255);
    ellipse(this.x, this.y, this.r, this.r);
  }
}


let star2;
function mousePressed(){
  let x = mouseX;
  let y = mouseY; 
  let r = random(0,15);
  star2 = new star(x, y, r);
  starArray.push(star2);
  let index = random(10, 255);
  let randomChooser = random(0, 255);
  for( let i = 0; i < cloudArray.length; ++i){
     cloudArray[i].colorChange(mouseX, mouseY, randomChooser, index); 
  }
  
  
}
let star3;
function mouseDragged(){
let x = mouseX;
let y = mouseY;
let r = random(0, 12)
star3 = new star(x, y,r );
starArray.push(star3);
}

var yMove = 1800;
let r1;
let r2;
let r3
let r4
let r5
let r6
function setup() {
  createCanvas(1200, 1800);
  // r1 = random(15, 25)
  // r2 = random(15, 24)
  // r3 = random(15, 24)
  // r4 = random(15, 25)
  // r5 = random(15, 25)
  // r6 = random(15, 25)
  
  
  let x = 925;
  let y = 900;
  let r = random(70, 86);
  for (let i = 0; i < 5; ++i){
    if ( i == 2){
       y+= 2; 
    }
    else if ( i > 1 &&  i < 4){
      y+=5
    }
    cloudArray[i] = new cloud(x, y, r);
    x+=5;
    
    
  }
  
  x = 1650;
  y = 675;
  r = random(150, 163);
  for (let i = 5; i < 10; ++i){
    if ( i == 8){
       y+= 5; 
    }
    else if ( i > 6 &&  i < 10){
      y+=4
    }
    else{
       y-= 10; 
    }
    cloudArray[i] = new cloud(x, y, r);
    x+=9;
    
    
  }
  
  
  
  //star1 = new star(x, y, r);
  for (let i = 0; i < 5; ++i){
    x = random(width);
    y = random(0, 300)
    r = random(7, 10);
    starArrayNew[i] = new star(x, y, r);
  }
  // for (let i = 0; i < 90; ++i){
  //   starArray[i] = new star();
  // }
}

var x1 = 370//350
var x2 = 367//347
var x3 = 375//355
var x4 = 385//365
var x5 = 385//365
var x6 = 390//370

//var r1 = random(15, 25);
//var r2 = random(15, 25)
//var r3 = random(15, 25)
//var r4 = random(15, 25)
//var r5 = random(15, 25)
// var r6 = random(15, 25)

function draw() {
  
  col.b += 0.60
  yMove -= 1;
  
  background(col.r, col.g, col.b);
  
  
  
  //star1.show()
  // fill(0, 150, 250)
  // noStroke();
  // triangle(20, 400, 175, 180, 330, 400)
  
  
  
  // fill(255)
  // circle(x1, 200, r1)//15
  // circle(x2, 195, r3)//15
  // circle(x3, 190, r2)//18
  // circle(x4, 190, r4)//16
  // circle(x5, 195, r5)//18
  // circle(x6, 192, r6)//16
  
  
  
  
  
  for(let i =0; i < starArrayNew.length; ++i){
    starArrayNew[i].show();
    
  }
  for(let i =0; i < starArray.length; ++i){
    starArray[i].show();
    
    
  }
  
  fill(250,250, 0)
  noStroke();
  ellipse(660, yMove, 750)
  
  // for ( let i = 0; i < 5; ++i){
  //   cloudArray[i].move();
  //   x2 -= 0.3
  //   x3 -= 0.3
  //   x4 -= 0.3
  //   x5 -= 0.3
  //   x6 -= 0.3
  // }
  
  
  
  if ( yMove < -150){
    for (let i = 0; i < 4; ++i){
       night();
    }
    
  } 
  for (let i = 0; i < cloudArray.length; ++i){
    cloudArray[i].show();
    cloudArray[i].move();
  }
  //ellipse( mouseX, mouseY, 250) 
  
  
  fill(250, 82, 0)
  noStroke();
  triangle(60, 1800, 525, 810, 990, 1800)
  
  fill(250, 150, 0)
  noStroke();
  triangle(810, 1800, 1125, 1237, 1440, 1800)
  
  fill(195, 82, 0)
  noStroke();
  triangle(-120, 1800, 300, 1125, 702, 1800)
  
}

function night(){
   col.b -= 1
}
