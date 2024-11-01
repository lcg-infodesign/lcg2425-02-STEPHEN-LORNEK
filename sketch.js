let cols, rows;
let minCloudSize = 30; 
let maxCloudSize = 60; 
// dimensione nuvole
let padding = 50; 

let button; // pulsante

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(135, 206, 235); // Colore azzurro del cielo
  noLoop();
  
  // numero di colonne e righe in base alla larghezza della finestra
  cols = floor(width / (maxCloudSize + padding));
  rows = floor(height / (maxCloudSize + padding));
  
  drawCloudGrid();
  
  // pulsante
  button = createButton('Ricarica');
  button.position(width / 2 - 40, height - 60);
  button.size(80, 30);
  button.style('background-color', 'rgba(255, 255, 255, 0)'); //  trasparente
  button.style('border', '2px solid white'); // Contorno bianco
  button.style('color', 'white'); // Testo
button.style('border-radius', '13px'); // Angoli arrotondati
  button.mouseOver(() => {
  button.style('background-color', 'white'); // bianco quando il mouse è sopra
  });
  button.mouseOut(() => {
    button.style('background-color', 'rgba(255, 255, 255, 0)'); // trasparente quando il mouse esce
  });
  button.mousePressed(() => {
    location.reload(); // Ricarica la pagina quando il pulsante viene cliccato
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(135, 206, 235);
  
  cols = floor(width / (maxCloudSize + padding));
  rows = floor(height / (maxCloudSize + padding));
  
  drawCloudGrid();
  

  button.position(width / 2 - 40, height - 60);
}

function drawCloudGrid() {
  // griglia centrale
  let startX = (width - (cols * (maxCloudSize + padding) - padding)) / 2;
  let startY = (height - (rows * (maxCloudSize + padding) - padding)) / 2;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = startX + i * (maxCloudSize + padding) + random(-10, 10);
      let y = startY + j * (maxCloudSize + padding) + random(-10, 10);
      
      drawCloud(x, y);
    }
  }
}

function drawCloud(x, y) {
  push();
  translate(x, y);
  
  // nuvola con un numero casuale di ellissi 
  let numEllipses = int(random(5, 7)); 

  for (let i = 0; i < numEllipses; i++) {
    // Posizione casuale per ogni ellisse, più vicina al centro della nuvola
    let offsetX = random(-maxCloudSize / 3, maxCloudSize / 3);
    let offsetY = random(-maxCloudSize / 4, maxCloudSize / 4);

    //dimensioni
    let w = random(minCloudSize, maxCloudSize * 1.2);
    let h = random(minCloudSize / 2, maxCloudSize / 1.5);

    fill(255); 
    noStroke();
    ellipse(offsetX, offsetY, w, h);
  }

  pop();
}


