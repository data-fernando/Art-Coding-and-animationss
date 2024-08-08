function setup() {
  // variables del projecto

  // crea el canvas en x y y respectivamente
  createCanvas(600, 400);
}

function draw() {
  /// un solo parametro establece en escala de grises
  if(mouseIsPressed ===true){
    background(0);
  }else{
      // 3 parametros en RGB color formato
    background(61,184,235);
  }
  //css con palabras
  //background("blue")

//lee las propiedades hasta antes de encontrarrse con el shape(ciculo)

// SHAPE1
  //sun in top right
  fill("yellow"); //yellow  
  stroke("orange"); //orange outline 
  strokeWeight(15); //large outline    
  circle(550, 50, 100);
  
  text("🌸", mouseX*0.8, mouseY*0.8) //flower

//SHAPE2
  //grass on bottom half
  stroke(0);//black outline
  strokeWeight(2);//outline thickness
  fill("green");
  rect(0, 200, 600, 200);

//Text
   //emojis
   if(mouseIsPressed){
    textSize(50);
   }else{
    textSize(75);
   }
   
   text("🤩", mouseX, mouseY) //ladybug


}


// *Shapes:*

// ellipse()
// square()
// quad()
// triangle()
// line()
// point()
// arc()
