// script.js
const canvas = document.getElementById("background-canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function drawBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const colors = ["#ff6b6b", "#f8cdda", "#6bc1ff", "#84fab0"];
    for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 3 + 1;
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.fill();
    }
}

// Start the animation
function startAnimation() {
    drawBackground();
    requestAnimationFrame(startAnimation);
}

startAnimation();
