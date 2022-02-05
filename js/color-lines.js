function main() {

  let pageWidth = 840;
  let pageHeight = 1201;
  let lineHeight = 30;
  let lineColorBlue = '#a5f5f5';
  let lineColorPink = '#f5a5f5';

  let canvas = document.getElementById('myBoard');

  canvas.width = pageWidth;
  canvas.height = pageHeight;
  canvas.lineHeight = lineHeight;

  drawLines(canvas, lineHeight, lineColorBlue, lineColorPink);
}


function drawLines(canvas, height, colorBlue, colorPink, row = -1) {
  pageHeight = canvas.height;
  pageWidth = canvas.width;
  let ctx = canvas.getContext('2d');
  let vertical = height;
  while ( vertical + 3 * height < pageHeight) {
    ctx.beginPath();
    ctx.strokeStyle = colorBlue;
    ctx.moveTo(0, vertical);
    ctx.lineTo(pageWidth, vertical);
    ctx.stroke();
    ctx.beginPath();
    vertical = vertical + height;
    ctx.moveTo(0, vertical);
    ctx.strokeStyle = colorPink;
    ctx.lineTo(pageWidth, vertical);
    vertical = vertical + height;
    ctx.moveTo(0, vertical);
    ctx.lineTo(pageWidth, vertical);
    vertical = vertical + height;
    ctx.stroke();
  }
}
