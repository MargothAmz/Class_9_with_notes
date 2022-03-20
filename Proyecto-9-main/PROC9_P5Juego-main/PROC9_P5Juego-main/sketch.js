/*notas se elimino del indenx la libreria p5.min.js y p5.dom.js 
se dio de alta la libreria p5.js*/
var box;
var r=0;
var g=0;
var b=0;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,15,15);
  //cambio de color en un sprite con shape color igual un detalle de las librerias. 
  box.shapeColor="lightblue";
  button = createButton("button");
  button.position(300,150);
  button.mousePressed(changebackground);
}

function draw() 
{
  background(r,g,b);
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x + 2;
    background("gray");
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x = box.position.x - 2;
    background("olive");
  }
  if(keyIsDown(UP_ARROW)){
    box.position.y = box.position.y - 2;
    background("aquamarine");
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y = box.position.y + 2;
    background("pink");
  }
  fill("white");
  text("test",150,150);
  textSize(50);
  fill(255,228,196);
  text("test2",160,160);

  //Se maneja con codigos hexadecimales codigo ASCII 
  if(keyIsDown(70)||keyDown("W")){//tecla F =70,f=102
    background("indigo");
  }
  if(keyIsDown(65)||keyDown("r")){//tecla A =65, 
    box.shapeColor="red";
  }
  drawSprites();
}

function changebackground(){
  r = 0;//saturación de rojo 
  g = 255;//saturación de verde 
  b = 0;//saturacón de azul 
}
