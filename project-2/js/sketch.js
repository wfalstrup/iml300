document.body.insertAdjacentHTML('afterbegin', '<div id="p5Canvas"></div>');

//let data = [];

let x = [];
let y = [];
let r = [];
let g = [];
let b = [];
let brushSize = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight)
  canvas.parent('p5Canvas')
  noStroke();
}

function mouseClicked() {

  r.push(random(0, 255));
  g.push(random(0, 255));
  b.push(random(0, 255));
  brushSize.push(5);
  x.push(mouseX);
  y.push(mouseY);
  drawShapes();

}

function drawShapes() {

  for (let i = 0; i < x.length; i++) {
    brushSize[i] += 5;
    fill(r[i], g[i], b[i]);
    fill(random(255), random(255), random(255));
    rect(x[i], y[i], brushSize[i]);

  }

}