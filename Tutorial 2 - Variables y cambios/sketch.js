let cloudOneX = 50;
let lineXone = 0;
let lineYone = 0;
let montaniaVx3=550

function setup() {
  createCanvas(800, 800);

  //custom variable for x coordinate of cloud


}

function draw() {
  background(0,71,frameCount % 255);

  //displays the x and y position of the mouse on the canvas
fill(240) //white text
textSize(21)
textStyle("italic")
text(`mouseX: ${mouseX}, mouseY: ${mouseY}`, 20, 20);



// lUna
  fill(255);
  stroke(2);
  circle(575,100,150)

 // luna creaciente efecto visual
  fill(0,71,frameCount % 255);
  stroke(0,71,171); /// borde
  circle(525,100,150)
 

  // agregar montanias

   //big gray mountains
   stroke(0);
   fill(80);
   triangle(-50,450,75,100, 350,450);
   triangle(150,450,300,100, (frameCount % montaniaVx3)+montaniaVx3 ,450);

    //grass
  fill('rgb(50,76,50)');
  rect(0,450, 800, 350);
 
//cloud
fill(255);
let cloudOneX = frameCount % width;
ellipse(cloudOneX, 50, 80, 40);
ellipse(cloudOneX - 40, 100, 60, 20);
ellipse(cloudOneX + 20, 150, 40, 10);


fill(240) //white text
textSize(21)
textStyle("italic")
/// hace referencia al Tamanio del canvas
text(`width: ${width}, heigth: ${height}`, 400, 20);
//hace referencia al tienpo de frames ue han ido pasando desde que se inicio el programa
text(`framecount ${frameCount}`,400,750)


// ARBOL
//growing tree
//trunk
fill("rgb(118,80,72)");
rect(mouseX-5, mouseY, 15, 50);
//leaves
fill("green");
triangle(mouseX-20, mouseY , mouseX, mouseY-40, mouseX+20, mouseY);

// ARBOL 2 
//growing tree
//trunk
fill("rgb(118,80,72)");
rect(150, 500, 15, 50);
//leaves
fill("green");
triangle(135, 500, 155, 440, 180, 500);


 // Arboles
{  // Árbol 1
  // Tronco
  fill("rgb(118,80,72)");
  rect(50, 500, 15, 50);
  // Hojas
  fill("green");
  triangle(35, 500, 55, 440, 80, 500);
  
  // Árbol 2
  // Tronco
  fill("rgb(118,80,72)");
  rect(200, 550, 20, 60);
  // Hojas
  fill("green");
  triangle(180, 550, 210, 470, 240, 550);
  
  // Árbol 3
  // Tronco
  fill("rgb(118,80,72)");
  rect(400, 450, 10, 40);
  // Hojas
  fill("green");
  triangle(385, 450, 405, 400, 420, 450);
  
  // Árbol 4
  // Tronco
  fill("rgb(118,80,72)");
  rect(600, 480, 12, 45);
  // Hojas
  fill("green");
  triangle(585, 480, 606, 420, 630, 480);
  
  // Árbol 5
  // Tronco
  fill("rgb(118,80,72)");
  rect(750, 510, 18, 55);
  // Hojas
  fill("green");
  triangle(730, 510, 760, 450, 790, 510);}


//shooting star
stroke("yellow");
line(lineXone, lineYone, lineXone + 30, lineYone - 30);
//ejemplo
line(20,30,50,60)
//set shooting star to random location
lineXone = random(0, width);
lineYone = random(0, height/2);

}
