var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color="black";
width_of_line = 1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(x){
    color=document.getElementById("color_input").value;
    width_of_line=document.getElementById("width_input").value;
    mouseEvent ="mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(x){
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(x){
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(x){
    current_position_of_x = x.clientX - canvas.offsetLeft;
    current_position_of_y = x.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown"){
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = width_of_line;
      console.log("Last position position of X and Y co-ordinates");
      console.log("X -"+ last_position_of_x + "Y -" + last_position_of_y);
      ctx.moveTo(last_position_of_x,last_position_of_y);
      console.log("Current position of X and Y co-ordinates");
      console.log("X -" + current_position_of_x + "Y -" + current_position_of_y);
      ctx.lineTo(current_position_of_x,current_position_of_y);
      ctx.stroke()
      }
      last_position_of_x = current_position_of_x;
      last_position_of_y = current_position_of_y;
}