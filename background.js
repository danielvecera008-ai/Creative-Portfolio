const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

let offset = 0;

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "rgba(255, 80, 200, 0.35)";
  ctx.lineWidth = 1;

  const spacing = 40;
  const horizon = canvas.height * 0.6;

  for (let y = 0; y < 30; y++) {
    let depth = y * spacing + (offset % spacing);
    let scale = 1 - y / 30;
    ctx.beginPath();
    ctx.moveTo(0, horizon + depth * scale);
    ctx.lineTo(canvas.width, horizon + depth * scale);
    ctx.stroke();
  }

  for (let x = -canvas.width; x < canvas.width * 2; x += spacing) {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 + (x - canvas.width / 2) * 0.02, horizon);
    ctx.lineTo(canvas.width / 2 + (x - canvas.width / 2), canvas.height);
    ctx.stroke();
  }

  offset += 1.2;
  requestAnimationFrame(drawGrid);
}

drawGrid();