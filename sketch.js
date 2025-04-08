function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB); // 設置顏色模式為 HSB
}

function draw() {
  // 根據滑鼠位置計算顏色
  let hue = map(mouseX, 0, width, 0, 360);
  let saturation = map(mouseY, 0, height, 100, 0);
  let brightness = 100;
  
  // 設置邊框顏色和粗細
  stroke((hue + 180) % 360, saturation, brightness);
  strokeWeight(5);
  
  // 設置填充顏色
  fill(hue, saturation, brightness);
  
  // 畫圓，直徑改為 100，直徑改為 100
  ellipse(mouseX, mouseY, 100, 100);
}
