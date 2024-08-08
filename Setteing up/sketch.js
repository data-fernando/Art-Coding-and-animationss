function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(233);

  // Ejercicio 1
  //circulo posiccion x y Y con su ancho
  
  //circle(200,200,100)


  //Ejercicio 2
  //mover el circulo con el mouse y al presionar cambiar de color

  if (mouseIsPressed === true){
    fill(0);
  } else{
    fill(220);
  }



  circle(mouseX,mouseY,300)
}
