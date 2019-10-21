let button1;
let button2;
let button3;
let button4;
let button5;

function setup() {
  createCanvas(600, 400);
  
  button1 = createButton('Reset');
  button1.mousePressed(restart);
  
  button2 = createButton('Randomise Color');
  button2.mousePressed(ranColor);
  
  button3 = createButton('Randomise Shape');
  button3.mousePressed(ranShape);
  
  button4 = createButton('Randomise Wind');
  button4.mousePressed(ranWind);
  
  button5 = createButton('Flashing Color');
  button5.mousePressed(flaColor);
  float (fColor=0);
  
  //background
  float(backC=[random(180, 255), random(180, 255), random(180, 255)]);
  
  //flowers
  float(flowerHeight = random(15, 20));
  float(flowerWidth = random(5, 10));
  float(flowerC=[random(255), random(255), random(255)]);
  float(flowerChance=1);
 
  //leaf
  float(leafC=[random(255), random(255), random(255)]);
  float(ellipseWidth=random(7, 9));
  
  //trunk
  float(trunk=random(12, 20));
  float(trunkSlant1 = random(250, 290));
  float(trunkSlant2 = trunkSlant1+random(-20, 20));
  float(trunkSlant3 = trunkSlant1+random(-20, 20));
  float(trunkC=[random(255), random(255), random(255)]);
  
  //branches
  float(Bs = random(3, 20));
  
  //ifOR
  var orIF=0
  float(ifOR=[random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2)]);
  
  //Rlow, Rhigh, Llow, Lhigh
  var Rlow = 275;
  var Rhigh = 310;
  var Llow = 230;
  var Lhigh = 265;
  float(RlRhLlLh=[0, 0, 0, random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh)]);

  //ran
  float(ran=[random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10)]);
  
  //windStregnth (used for mouse interaction)
  float(windStrength=90);
}

function draw() {
  if (fColor>0) {
  //background
  float(backC=[random(180, 255), random(180, 255), random(180, 255)]);
  
  //flower
  float(flowerC=[random(255), random(255), random(255)]);
  
  //leaf
  float(leafC=[random(255), random(255), random(255)]);
  
  //trunk
  float(trunkC=[random(255), random(255), random(255)]);
  }
  
  scale(width/600, height/400);
  
  //leaf color
  fill(leafC[0], leafC[1], leafC[2]);
  
  background(backC[0], backC[1], backC[2]);
  
  angleMode(DEGREES);

  strokeCap(ROUND);
  
  var t1w=(trunk*0.1);
  var t2w=(trunk*0.2);
  var b1w=(trunk*0.5);
  var b2w=(trunk*0.6);
  var b3w=(trunk*0.7);
  var b4w=(trunk*0.8);
  var b5w=(trunk*0.9);
  
  //T1
  stroke(trunkC[0], trunkC[1], trunkC[2]);
  strokeWeight(trunk);
  segment(300, 400, trunkSlant1, 0, 1);
  //T2
  strokeWeight(trunk-t1w);
  segment(0, 0, trunkSlant2, 0, 2);
  //T3
  strokeWeight(trunk-t2w);
  segment(0, 0, trunkSlant3, 0, 3);

//LEFT
  push();
  //L
  strokeWeight(trunk-b1w);
  segment(0, 0, 0, 1, 4);
    push();
    //LL
    strokeWeight(trunk-b2w);
    segment(0, 0, -Bs, 1, 6);
      push();
      //LLL
      strokeWeight(trunk-b3w);
      segment(0, 0, -(3*Bs), 1, 10);
        push();
        //LLLL
        strokeWeight(trunk-b4w);
        segment(0, 0, -(7*Bs), 2, 18);
          push();
          //LLLLL
          strokeWeight(trunk-b5w);
          segment(0, 0, -(15*Bs), 2, 34);
          pop();
          push();
          //LLLRR
          strokeWeight(trunk-b5w);
          segment(0, 0, -(14*Bs), 2, 35);
          pop();
        pop();
        push();
        //LLLR
        strokeWeight(trunk-b4w);
        segment(0, 0, -(6*Bs), 2, 19);
          push();
          //LLLRL
          strokeWeight(trunk-b5w);
          segment(0, 0, -(13*Bs), 2, 36);
          pop();
          push();
          //LLLRR
          strokeWeight(trunk-b5w);
          segment(0, 0, -(12*Bs), 2, 37);
          pop();  
        pop();
      pop();
      push();
      //LLR
      strokeWeight(trunk-b3w);
      segment(0, 0, -(2*Bs), 1, 11);
        push();
        //LLRL
        strokeWeight(trunk-b4w);
        segment(0, 0, -(5*Bs), 2, 20);
          push();
          //LLRLL
          strokeWeight(trunk-b5w);
          segment(0, 0, -(11*Bs), 2, 38);
          pop();
          push();
          //LLRLR
          strokeWeight(trunk-b5w);
          segment(0, 0, -(10*Bs), 2, 39);
          pop();
        pop();
        push();
        //LLRR
        strokeWeight(trunk-b4w);
        segment(0, 0, -(4*Bs), 2, 21);
          push();
          //LLRRL
          strokeWeight(trunk-b5w);
          segment(0, 0, -(9*Bs), 2, 40);
          pop();
          push();
          //LLRRR
          strokeWeight(trunk-b5w);
          segment(0, 0, -(8*Bs), 2, 41);
          pop();
        pop();  
      pop();
    pop();
    push();
    //LR
    strokeWeight(trunk-b2w);
    segment(0, 0, 0, 1, 7);
      push();
      //LRL
      strokeWeight(trunk-b3w);
      segment(0, 0, -Bs, 1, 12);
        push();
        //LRLL
        strokeWeight(trunk-b4w);
        segment(0, 0, -(3*Bs), 2, 22);
          push();
          //LRLLL
          strokeWeight(trunk-b5w);
          segment(0, 0, -(7*Bs), 2, 42);
          pop();
          push();
          //LRLLR
          strokeWeight(trunk-b5w);
          segment(0, 0, -(6*Bs), 2, 43);
          pop();
        pop();
        push();
        //LRLR
        strokeWeight(trunk-b4w);
        segment(0, 0, -(2*Bs), 2, 23);
          push();
          //LRLRL
          strokeWeight(trunk-b5w);
          segment(0, 0, -(5*Bs), 2, 44);
          pop();
          push();
          //LRLRR
          strokeWeight(trunk-b5w);
          segment(0, 0, -(4*Bs), 2, 45);
          pop();
        pop();  
      pop();
      push();
      //LRR
      strokeWeight(trunk-b3w);
      segment(0, 0, 0, 1, 13);
        push();
        //LRRL
        strokeWeight(trunk-b4w);
        segment(0, 0, -Bs, 2, 24);
          push();
          //LRRLL
          strokeWeight(trunk-b5w);
          segment(0, 0, -(3*Bs), 2, 46);
          pop();
          push();
          //LRRLR
          strokeWeight(trunk-b5w);
          segment(0, 0, -(2*Bs), 2, 47);
          pop();
        pop();
        push();
        //LRRR
        strokeWeight(trunk-b4w);
        segment(0, 0, 0, 2, 25);
          push();
          //LRRRL
          strokeWeight(trunk-b5w);
          segment(0, 0, -(1*Bs), 2, 48);
          pop();
          push();
          //LRRRR
          strokeWeight(trunk-b5w);
          segment(0, 0, -(0*Bs), 2, 49);
          pop();
        pop();  
      pop();
    pop();
  pop();
  
//RIGHT
  push();
  //R
  strokeWeight(trunk-b1w);
  segment(0, 0, 0, 1, 5);
    push();
    //RL
    strokeWeight(trunk-b2w);
    segment(0, 0, 0, 1, 8);
      push();
      //RLL
      strokeWeight(trunk-b3w);
      segment(0, 0, 0, 1, 14);
        push();
        //RLLL
        strokeWeight(trunk-b4w);
        segment(0, 0, 0, 2, 26);
          push();
          //RLLLL
          strokeWeight(trunk-b5w);
          segment(0, 0, (0*Bs), 2, 50);
          pop();
          push();
          //RLLLR
          strokeWeight(trunk-b5w);
          segment(0, 0, (1*Bs), 2, 51);
          pop();
        pop();
        push();
        //RLLR
        strokeWeight(trunk-b4w);
        segment(0, 0, Bs, 2, 27);
          push();
          //RLLRL
          strokeWeight(trunk-b5w);
          segment(0, 0, (2*Bs), 2, 52);
          pop();
          push();
          //RLLRR
          strokeWeight(trunk-b5w);
          segment(0, 0, (3*Bs), 2, 53);
          pop();
        pop();  
      pop();
      push();
      //RLR
      strokeWeight(trunk-b3w);
      segment(0, 0, Bs, 1, 15);
        push();
        //RLRL
        strokeWeight(trunk-b4w);
        segment(0, 0, (2*Bs), 2, 28);
          push();
          //RLRLL
          strokeWeight(trunk-b5w);
          segment(0, 0, (4*Bs), 2, 54);
          pop();
          push();
          //RLRLR
          strokeWeight(trunk-b5w);
          segment(0, 0, (5*Bs), 2, 55);
          pop();
        pop();
        push();
        //RLRR
        strokeWeight(trunk-b4w);
        segment(0, 0, (3*Bs), 2, 29);
          push();
          //RLRRL
          strokeWeight(trunk-b5w);
          segment(0, 0, (6*Bs), 2, 56);
          pop();
          push();
          //RLRRR
          strokeWeight(trunk-b5w);
          segment(0, 0, (7*Bs), 2, 57);
          pop();
        pop();  
      pop();
    pop();
    push();
    //RR
    strokeWeight(trunk-b2w);
    segment(0, 0, Bs, 1, 9);
      push();
      //RRL
      strokeWeight(trunk-b3w);
      segment(0, 0, (2*Bs), 1, 16);
        push();
        //RRLL
        strokeWeight(trunk-b4w);
        segment(0, 0, (4*Bs), 2, 30);
          push();
          //RRLLL
          strokeWeight(trunk-b5w);
          segment(0, 0, (8*Bs), 2, 58);
          pop();
          push();
          //RRLLR
          strokeWeight(trunk-b5w);
          segment(0, 0, (9*Bs), 2, 59);
          pop();
        pop();
        push();
        //RRLR
        strokeWeight(trunk-b4w);
        segment(0, 0, (5*Bs), 2, 31);
          push();
          //RRLRL
          strokeWeight(trunk-b5w);
          segment(0, 0, (10*Bs), 2, 60);
          pop();
          push();
          //RRLRR
          strokeWeight(trunk-b5w);
          segment(0, 0, (11*Bs), 2, 61);
          pop();
        pop();  
      pop();
      push();
      //RRR
      strokeWeight(trunk-b3w);
      segment(0, 0, (3*Bs), 1, 17);
        push();
        //RRRL
        strokeWeight(trunk-b4w);
        segment(0, 0, (6*Bs), 2, 32);
          push();
          //RRRLL
          strokeWeight(trunk-b5w);
          segment(0, 0, (12*Bs), 2, 62);
          pop();
          push();
          //RRRLR
          strokeWeight(trunk-b5w);
          segment(0, 0, (13*Bs), 2, 63);
          pop();
        pop();
        push();
        //RRRR
        strokeWeight(trunk-b4w);
        segment(0, 0, (7*Bs), 2, 33);
          push();
          //RRRRL
          strokeWeight(trunk-b5w);
          segment(0, 0, (14*Bs), 2, 64);
          pop();
          push();
          //RRRRR
          strokeWeight(trunk-b5w);
          segment(0, 0, (15*Bs), 2, 65);
          pop();
        pop();  
      pop();
    pop();
  pop();
}

function segment(x, y, a, l, n) {
  translate(x, y);
  angleMode(DEGREES);
  rotate(RlRhLlLh[n-1]+a);
  if(l>0) {
  line(0, 0, ran[n-1]+45, 0);
  translate(ran[n-1]+45, 0);
  }else{
  line(0, 0, ran[n-1]+45-20, 0);
  translate(ran[n-1]+45-20, 0);
  }
  
  push();
  if(ifOR[n-4]>1) {
  rotate((RlRhLlLh[n-1]+a)-(ran[n-1]+ran[n-1]+10));
  }else{
  rotate((RlRhLlLh[n-1]+a)+(ran[n-1]+ran[n-1]+10));
  }
  
  if(l>0) {
  ellipseMode(CORNER);
  noStroke();
  ellipse(-ellipseWidth/2, 0, ellipseWidth, ran[n-1]+28);
    if(l>1) {
        if(ifOR[n-4]>flowerChance) {
        ellipseMode(CENTER);
        fill(flowerC[0], flowerC[1], flowerC[2]);
        ellipse(0, 0, flowerWidth, flowerHeight);
        rotate(120);
        ellipse(0, 0, flowerWidth, flowerHeight);
        rotate(120);
        ellipse(0, 0, flowerWidth, flowerHeight);
        rotate(120);
        fill(flowerC[1], flowerC[2], flowerC[0]);
        circle(0, 0, 2);
        }else{}
    }else{}
  }else{}
  pop();
  if(mouseX>0) {
    rotate(-((RlRhLlLh[n-1]+a)+((mouseX-300)/windStrength))); 
    }else{rotate(-(RlRhLlLh[n-1]+a));}
}

function restart() {
  //background
  float(backC=[random(180, 255), random(180, 255), random(180, 255)]);
  
  //flowers
  float(flowerHeight = random(15, 20));
  float(flowerWidth = random(5, 10));
  float(flowerC=[random(255), random(255), random(255)]);
  float(flowerChance=1);
 
  //leaf
  float(leafC=[random(255), random(255), random(255)]);
  float(ellipseWidth=random(7, 9));
  
  //trunk
  float(trunk=random(12, 20));
  float(trunkSlant1 = random(250, 290));
  float(trunkSlant2 = trunkSlant1+random(-20, 20));
  float(trunkSlant3 = trunkSlant1+random(-20, 20));
  float(trunkC=[random(255), random(255), random(255)]);
  
  //branches
  float(Bs = random(3, 20));
  
  //ifOR
  var orIF=0
  float(ifOR=[random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2)]);
  
  //Rlow, Rhigh, Llow, Lhigh
  var Rlow = 275;
  var Rhigh = 310;
  var Llow = 230;
  var Lhigh = 265;
  float(RlRhLlLh=[0, 0, 0, random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh)]);

  //ran
  float(ran=[random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10)]);
  
  //windStregnth (used for mouse interaction)
  float(windStrength=90);
  
  //flashing color
  fColor = 0;
}

function ranColor() {
  //background
  float(backC=[random(180, 255), random(180, 255), random(180, 255)]);
  
  //flower
  float(flowerC=[random(255), random(255), random(255)]);
  
  //leaf
  float(leafC=[random(255), random(255), random(255)]);
  
  //trunk
  float(trunkC=[random(255), random(255), random(255)]);
}

function ranShape() {
  
  //flowers
  float(flowerHeight = random(15, 20));
  float(flowerWidth = random(5, 10));
  float(flowerChance=1);
 
  //leaf
  float(ellipseWidth=random(7, 9));
  
  //trunk
  float(trunk=random(12, 20));
  float(trunkSlant1 = random(250, 290));
  float(trunkSlant2 = trunkSlant1+random(-20, 20));
  float(trunkSlant3 = trunkSlant1+random(-20, 20));
  
  //branches
  float(Bs = random(3, 20));
  
  //ifOR
  var orIF=0
  float(ifOR=[random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2), random(orIF, 2)]);
  
  //Rlow, Rhigh, Llow, Lhigh
  var Rlow = 275;
  var Rhigh = 310;
  var Llow = 230;
  var Lhigh = 265;
  float(RlRhLlLh=[0, 0, 0, random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh), random(Llow, Lhigh), random(Rlow, Rhigh)]);

  //ran
  float(ran=[random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10)]);
}

function ranWind() {
  float(windStrength=random(.000000001, 5));
}

function flaColor() {
  if (fColor<1) {
    fColor=1;
  }else{
    fColor=0;
  }
}
