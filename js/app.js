window.addEventListener("load", () => {
    const canvas = document.getElementById('c');
    const ctx = canvas.getContext('2d');
    const button = document.getElementById("submit");
    const sz = document.getElementById("sz");
    const clr = document.getElementById("clr");
    let paint = false;
    let size = 10;
    let brush = "round";
    let color = "black";
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    function start(e) {
        paint = true;
        draw(e);
    }
    function end() {
        paint = false;
        ctx.beginPath();
    }
    function draw(e) {
        if (!paint) return;
        ctx.lineWidth = size;
        ctx.strokeStyle = color;
        ctx.lineCap = brush;
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY)
    }

    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mouseup", end);
    canvas.addEventListener("mousemove", draw);

    sz.addEventListener("change", () => {
        if (sz.value <= 0) {
            sz.value = 1
        }
        if (sz.value >= 200) {
            sz.value = 200
        }
        if (sz.value > 0 && sz.value < 201) {
            sz.value = sz.value
        }
        else {
            sz.value = 1
        }

    })
    button.addEventListener("click", () => {
        size = parseInt(sz.value);
        color = clr.value;
    })
})


