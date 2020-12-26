function changeColor(){
    
    var x,y,z ,color;
x=Math.round(Math.random()*256);
y=Math.round(Math.random()*256);
z=Math.round(Math.random()*256);
color = 'rgb(' + x + ', ' + y + ',' + z + ')';
document.body.style.background=color;
document.getElementById("showColor").innerHTML=color;
}
function stop(){
 document.body.style.background="#ffffff"
 document.getElementById("showColor").innerHTML="rgb(255,255,255)";
}



 