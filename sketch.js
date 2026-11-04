function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 45, 200);
}

function draw () {
  // fundo: muda cor onde estiver o rato
  // linha de cima
  if (mouseY < height / 2) { // linha de cima 1/3 de cima
    if (mouseX < width / 3) { 
      background (226, 111, 143);       // rosa
    } else if (mouseX < width / 3 * 2) {
      background (255, 150, 0);     // laranja
    } else {
      background (255, 230, 0);     // amarelo
    }
  } else {
    // linha de baixo
    if (mouseX < width / 3) {
      background(0, 180, 0);       // verde
    } else if (mouseX < width / 3 * 2) {
      background(0, 120, 255);     // azul
    } else {
      background(160, 0, 200);     // roxo
    }
  }


  }