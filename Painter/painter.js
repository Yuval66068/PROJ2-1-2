let el = document.getElementById('c');
let ctx = el.getContext('2d');
ctx.lineJoin = "round"
ctx.strokeStyle = "#332512"; 
ctx.globalAlpha = "0.2"; 
ctx.lineWidth = 30; 
ctx.globalCompositeOperation = "source-over";

let isDrawing, lastPoint;

el.onmousedown = function(e) {
    isDrawing = true;
    lastPoint = { x: e.clientX, y: e.clientY };
};

el.onmousemove = function(e) {
if (!isDrawing) return;

    let currentPoint = { x: e.clientX, y: e.clientY };

    ctx.beginPath();
    ctx.moveTo(lastPoint.x, lastPoint.y);
    ctx.lineTo(currentPoint.x, currentPoint.y);
    ctx.closePath();
    ctx.stroke();

    lastPoint = currentPoint;
};

el.onmouseup = function() {
    isDrawing = false;
};

function clearit() {
    ctx.clearRect(0,0, 1000, 1000);
}