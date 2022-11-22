let x = 55;
let s = 35;
var title;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(243, 248, 242);
  fill(229, 99, 15);
  ellipse(x, 40, s, s);
  fill(229, 212, 206);
  ellipse(x, 80, s, s);
  fill(53, 129, 184);
  ellipse(x, 120, s, s);
  fill(31, 115, 63);
  ellipse(x, 160, s, s);
  fill(127, 209, 125);
  ellipse(x, 200, s, s);
  fill(93, 115, 126);
  ellipse(x, 240, s, s);
  fill(193, 102, 107);
  ellipse(x, 280, s, s);
  fill(72, 169, 166);
  ellipse(x, 320, s, s);
  fill("black");
  ellipse(x, 400, s, s);
  fill(160, 155, 231);
  ellipse(x, 360, s, s);
  push();
  textAlign("center");
  fill("black");
  textSize(35);
  textFont("Sacramento");
  text("Hello! represent how you feel today", width / 2, (height / 20) * 18);
  pop();
  push();
  textAlign("center");
  fill("black");
  textSize(20);
  textFont("Sacramento");
  text(
    "create abstract art by choosing colors that match with your current mood",
    width / 2,
    (height / 20) * 19
  );
  pop();
}
function draw() {
  if (mouseIsPressed && dist(mouseX, mouseY, x, 40) < s) {
    fill(229, 99, 15);
  }
  if (mouseIsPressed && dist(mouseX, mouseY, x, 80) < s) {
    fill(229, 212, 206);
  }
  if (mouseIsPressed && dist(mouseX, mouseY, x, 120) < s) {
    fill(53, 129, 184);
  }
  if (mouseIsPressed && dist(mouseX, mouseY, x, 160) < s) {
    fill(31, 115, 63);
  }
  if (mouseIsPressed && dist(mouseX, mouseY, x, 200) < s) {
    fill(127, 209, 125);
  }
  if (mouseIsPressed && dist(mouseX, mouseY, x, 240) < s) {
    fill(93, 115, 126);
  }
  if (mouseIsPressed && dist(mouseX, mouseY, x, 280) < s) {
    fill(193, 102, 107);
  }
  if (mouseIsPressed && dist(mouseX, mouseY, x, 320) < s) {
    fill(72, 169, 166);
  }
  if (mouseIsPressed && dist(mouseX, mouseY, x, 400) < s) {
    fill("black");
  }
  if (mouseIsPressed && dist(mouseX, mouseY, x, 360) < s) {
    fill(160, 155, 231);
  }

  if (mouseIsPressed) {
    noStroke();
    ellipse(mouseX, mouseY, 20, 20);
  }
  save = createButton("SAVE");
  save.position(windowWidth - 100, 600);
  save.mousePressed(download);
}
function download() {
  let to_save = get(0, 0, windowWidth, windowHeight);
  to_save.save("mymood", "png");
}

