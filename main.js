let canvas = document.querySelector("#canvas"),
    cx = canvas.getContext("2d");

function branch(length, angle, scale) {
    cx.fillRect(0, 0, 1, length);
    if (length < 8) return;
    cx.save();
    cx.translate(0, length);
    cx.rotate(-angle);
    branch(length * scale, angle, scale);
    cx.rotate(angle * 2);
    branch(length * scale, angle, scale);
    cx.restore();
}
cx.translate(350, 0);
branch(100, 0.5, 0.8);