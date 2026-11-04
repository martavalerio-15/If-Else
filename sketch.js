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
      background (198, 7, 7);     // vermelho
    } else {   // quadrado 3/3 (se o rato não estiver nos outros dois quadrados de cima)
      background (275, 174, 0);     // amarelo
    }
  } else { // rato na linha de baixo
    if (mouseX < width / 3) { // quadrado 1/3 baixo
      background (202, 195, 7);       // verde
    } else if (mouseX < width / 3 * 2) { // quadrado 2/3 baixo
      background (0, 160, 255);     // azul
    } else { // quadrado 3/3 baixo (se o rato não estiver nos outros dois quadrados de baixo)
      background (190, 144, 250);     // roxo
    }
  }

fill (255);
if (mouseIsPressed) {
  circle (mouseX, mouseY, 250); // ao carregar o circulo fica grande
} else {
  circle (mouseX, mouseY, 50); // circulo pequeno
}

}

