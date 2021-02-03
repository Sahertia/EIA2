"use strict";
var A08_Canvas;
(function (A08_Canvas) {
    window.addEventListener("load", init);
    let ctx;
    function init() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        ctx = canvas.getContext("2d");
        canvas.width = 800;
        canvas.height = 600;
        // let canvas: HTMLCanvasElement = document.getElementById("canvas");
        // let ctx: CanvasRenderingContext2D = canvas.getContext("2d");
        drawHouse();
        drawcloud(200, 200);
        drawcloud2(600, 100);
        ctx.fillStyle = "#0000ff";
        // ctx.fillRect(0, 0, ctx.canvas.height, ctx.canvas.height);
        ctx.strokeRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.beginPath();
        ctx.arc(100, 100, 60, 40, 50);
        // ctx.closePath();
        ctx.stroke();
        // drawing an ellipse
        // ctx.beginPath();
        // ctx.ellipse(700, 500, 100, 780, Math.PI / 2.8, 0, 2 * Math.PI);
        // ctx.stroke();
        // create save points to reset canvas after translate
        // reset
        // draw house scaleable ?
        function drawHouse() {
            ctx.beginPath();
            ctx.moveTo(400, 200);
            ctx.lineTo(360, 200);
            ctx.lineTo(360, 280);
            ctx.lineTo(375, 280);
            ctx.lineTo(375, 220);
            ctx.lineTo(425, 220);
            ctx.lineTo(425, 280);
            ctx.lineTo(440, 280);
            ctx.lineTo(440, 200);
            ctx.lineTo(400, 200);
            ctx.lineTo(400, 170);
            ctx.lineTo(360, 200);
            ctx.lineTo(400, 170);
            ctx.lineTo(440, 200);
            ctx.closePath();
            ctx.stroke();
        }
        ctx.font = "20px serif";
        ctx.textBaseline = "hanging";
        ctx.strokeText("LIFT", 380, 205);
        //draw snowHill
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(0, 420);
        ctx.quadraticCurveTo(400, 140, 800, 420);
        ctx.stroke();
        ctx.restore();
        // crazy cloud vorlage
        // ctx.beginPath();
        // ctx.moveTo(170, 80);
        // ctx.bezierCurveTo(130, 100, 130, 150, 230, 150);
        // ctx.bezierCurveTo(250, 180, 320, 180, 340, 150);
        // ctx.bezierCurveTo(420, 150, 420, 120, 390, 100);
        // ctx.bezierCurveTo(430, 40, 370, 30, 340, 50);
        // ctx.bezierCurveTo(320, 5, 250, 20, 250, 50);
        // ctx.bezierCurveTo(200, 5, 150, 20, 170, 80);
        // ctx.closePath();
        // ctx.lineWidth = 5;
        // ctx.fillStyle = "#8ED6FF";
        // ctx.fill();
        // ctx.strokeStyle = "#0000ff";
        // ctx.stroke();
        function drawcloud(x, y) {
            ctx.beginPath();
            ctx.arc(x, y, 30, Math.PI * 0.5, Math.PI * 1.5);
            ctx.arc(x + 35, y - 24, 35, Math.PI * 1, Math.PI * 1.85);
            ctx.arc(x + 75, y - 20, 25, Math.PI * 1.37, Math.PI * 1.91);
            ctx.arc(x + 100, y, 30, Math.PI * 1.5, Math.PI * 0.5);
            ctx.moveTo(x + 100, y + 30);
            ctx.lineTo(x, y + 30);
            ctx.strokeStyle = "#797874";
            ctx.stroke();
            ctx.fillStyle = "#8ED6FF";
            ctx.fill();
        }
        function drawcloud2(x, y) {
            ctx.beginPath();
            ctx.arc(x, y, 30, Math.PI * 0.5, Math.PI * 1.5);
            ctx.arc(x + 35, y - 24, 35, Math.PI * 1, Math.PI * 1.85);
            ctx.arc(x + 75, y - 20, 25, Math.PI * 1.37, Math.PI * 1.91);
            ctx.arc(x + 100, y, 30, Math.PI * 1.5, Math.PI * 0.5);
            ctx.moveTo(x + 100, y + 30);
            ctx.lineTo(x, y + 30);
            ctx.strokeStyle = "#797874";
            ctx.stroke();
            ctx.fillStyle = "#8ED6FF";
            ctx.fill();
        }
        ctx.restore();
        ctx.save();
        drawLift();
        function drawLift() {
            // ctx.beginPath();
            // ctx.rect(100, 500, 40, 100);
            // ctx.stroke();
            // ctx.fillStyle = "#000000";
            // ctx.fill();
            // Create gradient
            //Cables
            ctx.beginPath();
            // ctx.lineWidth = 5;
            // ctx.strokeStyle = "#000000";
            ctx.moveTo(100, 500);
            ctx.lineTo(360, 220);
            ctx.closePath();
            ctx.moveTo(150, 500);
            ctx.lineTo(375, 220);
            ctx.stroke();
            // Top of the Pole
            ctx.beginPath();
            ctx.arc(125, 500, 25, 40, 50);
            ctx.fillStyle = "#000000";
            ctx.fill();
            ctx.stroke();
            // Lift Pole
            let grd = ctx.createLinearGradient(0, 0, 0, 650);
            grd.addColorStop(0.8, "black");
            grd.addColorStop(0.2, "yellow");
            grd.addColorStop(1, "orange");
            // Fill with gradient
            ctx.fillStyle = grd;
            ctx.fillRect(100, 500, 50, 100);
            ctx.restore();
        }
    }
})(A08_Canvas || (A08_Canvas = {}));
//# sourceMappingURL=canvas%20-%20Kopie.js.map