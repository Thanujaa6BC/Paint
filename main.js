var mouseEvent = "empty";
var last_position_x, last_position_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e) {
color = document.getElementById("Color").value;
width_of_line = document.getElementById("width_of_line").value;
radius = document.getElementById("radius").value;
mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e) {
    current_position_x = e.clientX - canvas.offsetLeft;
    current_position_y = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=2;
        ctx.arc(current_position_x,current_position_y,radius,0,2*Math.PI);
        ctx.stroke();
     }

}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e) {
mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e) {
mouseEvent = "mouseleave";
}

function clearArea() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
}

