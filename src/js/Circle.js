export class Circle {
    constructor({ position, type = "std" }) {
        this.position = position; // {x: cordinate, y: cordinate}
        this.type = type;
        this.c = window.context2d; // 2d context
    }

    draw() {
        this.c.strokeStyle = "rgba(255, 255, 255, 0.5)";
        this.c.fillStyle = "rgba(255, 0, 0, .7)";
        this.c.beginPath();
        this.c.lineWidth = 1;
        this.c.arc(this.position.x, this.position.y, 4, 0, Math.PI * 2);
        this.c.stroke();
        this.c.fill();
        this.c.closePath();
    }
}
