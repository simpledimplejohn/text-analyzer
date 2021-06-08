function setup() {
  createCanvas(100, 100);
  noLoop();
}
function draw() {
  background(204);
  line(mouseX, 0, mouseX, 100);
  line(0, mouseY, 100, mouseY);
}
function mousePressed() {
  redraw(); // Run the code in draw one time
}