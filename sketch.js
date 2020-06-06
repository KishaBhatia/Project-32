var stand1;
var box1,box2,box3,box4,box5;
var box6,box7,box8,box9;
var box10,box11,box12;
var box13,box14;
var box15;

var stand2;
var box16,box17,box18;

var stone;
var ground;
var count=0;

var backgroundImg;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
  //backgroundImg = loadImage("sprites/bg.png");
  getBackgroundImage();
}
function setup() {
  createCanvas(1220,750);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(610,740,1220,20);

  stand1 = new Ground(490,650,330,20);
  stand2 = new Ground(895,300,200,20);

  //stand1 bottomMost row(row1)
  box1=new Box(380,610,50,50);
  box2=new Box(435,610,50,50);
  box3=new Box(490,610,50,50);
  box4=new Box(545,610,50,50);
  box5=new Box(600,610,50,50);
  //stand1 row2
  box6=new Box(410,560,50,50);
  box7=new Box(463,560,50,50);
  box8=new Box(516,560,50,50);
  box9=new Box(569,560,50,50);
  //stand1 row3
  box10=new Box(435,510,50,50);
  box11=new Box(490,510,50,50);
  box12=new Box(545,510,50,50);
  //stand1 row4 
  box13=new Box(460,460,50,50);
  box14=new Box(515,460,50,50);
  //stand1 row5
  box15=new Box(485,410,50,50);

   //stand2 bottomMost row(row1)
   box16=new Box(840,260,50,50);
   box17=new Box(895,260,50,50);
   box18=new Box(950,260,50,50);
   //stand2 row2
   box19=new Box(860,205,50,50);
   box20=new Box(915,205,50,50);
   //stand2 row3
   box21=new Box(890,155,50,50);

   stone = new Stone(100,350,50,50);

   slingshot = new SlingShot(stone.body,{x:100, y:350});

}

function draw() {
 if(backgroundImg)
    background(backgroundImg);

  //background(68,3,39);

  Engine.update(engine);  

  
  ground.display();
  stand1.display();
  stand2.display();

  fill(231,174,249);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  fill(249,174,228);
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  fill(174,249,231);
  box10.display();
  box11.display();
  box12.display();

  fill(202,249,174);
  box13.display();
  box14.display();

  fill(255,252,132);
  box15.display();

  fill(249,174,228);
  box16.display();
  box17.display();
  box18.display();

  fill(174,249,231);
  box19.display();
  box20.display();

  fill(255,252,132);
  box21.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();

  stone.display();

  textFont("Comic Sans MS");
  textSize(25);
  text("Drag the Hexagonal Stone and Release it,to launch it towards the blocks",170,50);
  text("Press space to get a second chance to play",320,90);

  textSize(25);
  fill(115,247,217);
  text("Score: "+count,1000,700);


  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
   slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
      slingshot.attach(stone.body);
  }
}

async function getBackgroundImage(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
  var responseJSON=await response.json();
  console.log(responseJSON);

  var dateTime=await responseJSON.datetime;
  console.log(dateTime);
  var hour=dateTime.slice(11,13);
  console.log(hour);

  if(hour>=6 && hour<18){
      bg="bg2.jpg";
  }
  else{
      bg="bg1.jpg";
  }
   backgroundImg=loadImage(bg);
}