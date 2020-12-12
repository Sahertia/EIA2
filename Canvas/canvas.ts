namespace A08_Canvas {

    window.addEventListener("load", init);
    let ctx: CanvasRenderingContext2D;




    function init(): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = 1200;
        canvas.height = 675;
        // let canvas: HTMLCanvasElement = document.getElementById("canvas");
        // let ctx: CanvasRenderingContext2D = canvas.getContext("2d");
        drawHillside();

        ctx.fillStyle = "#0000ff";
        // ctx.fillRect(0, 0, ctx.canvas.height, ctx.canvas.height);
        ctx.strokeRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.beginPath();
        ctx.arc(0, 0, 150, 40, 50);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(700, 500, 100, 780, Math.PI / 2.8, 0, 2 * Math.PI);
        ctx.stroke();

        // create save points to reset canvas after translate
        ctx.save(); //to save
        ctx.restore(); // reset


      
        // draw house scaleable
        ctx.beginPath();
        ctx.moveTo(200, 200);
        ctx.lineTo(200, 230);
        ctx.lineTo(210, 230);
        ctx.lineTo(210, 210);
        ctx.lineTo(230, 210);
        ctx.lineTo(230, 230);
        ctx.lineTo(240, 230);
        ctx.lineTo(240, 200);
        ctx.lineTo(200, 200);
        ctx.lineTo(220, 180);
        ctx.lineTo(240, 200);
        ctx.stroke();



        function drawHillside(): void {

            ctx.beginPath();
            ctx.moveTo(0, 300);
            ctx.lineTo(700, 700);
            ctx.lineTo(700, 700);
            ctx.lineTo(0, 700);
            ctx.lineTo(0, 700);
            ctx.closePath();
            ctx.fillStyle = "#FFFFFF";
            ctx.fill();
        }

    }

}