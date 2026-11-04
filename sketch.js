function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 45, 200);
}

function draw () {
  // fundo: muda cor onde estiver o rato
  // linha de cima
  if (mouseY < height / 2) { // rato na parte de cima 
    if (mouseX < width / 3) {  // quadrado 1/3 cima
      background (226, 111, 143);       // rosa
    } else if (mouseX < width / 3 * 2) { // quadrado 2/3 cima
      background (255, 150, 0);     // laranja
    } else {   // quadrado 3/3 (se o rato não estiver nos outros dois quadrados de cima)
      background (255, 230, 0);     // amarelo
    }
  } else { // rato na linha de baixo
    if (mouseX < width / 3) { // quadrado 1/3 baixo
      background (0, 180, 0);       // verde
    } else if (mouseX < width / 3 * 2) { // quadrado 2/3 baixo
      background (0, 120, 255);     // azul
    } else { // quadrado 3/3 baixo (se o rato não estiver nos outros dois quadrados de baixo)
      background (160, 0, 200);     // roxo
    }
  }
}
fill (255);
if (mouseIsPressed) {
  circle (mouseX, mouseY, 250); // ao carregar o circulo fica grande
} else {
  circle (mouseX, mouseY, 50); // circulo pequeno
}

