var canvas, context;

function inicio(){
	canvas = document.getElementById("dibujo");
	
	context = dibujo.getContext("2d");
	context.beginPath();
	context.strokeStyle = "#00F";
	context.arc(150,150,100,0,2*Math.PI,false);
	context.closePath();
	context.stroke();
	var boton = document.getElementById("boton");
	boton.addEventListener("click",dibujarGrilla);

}

function dibujarGrilla()
{
	lineas = Number(document.getElementById("usuario").value);

	var limiteX = canvas.width, limiteY = canvas.height;

 for (i=0; i<=limiteX ; i+=(limiteX/lineas))
 {
 	context.beginPath();
 	context.moveTo(i+0.5,0);
 	context.lineTo(i+0.5,limiteY);
 	context.strokeStyle="#AAA";
 	context.closePath();
 	context.stroke();
 	
 }

 for (i=0; i<=limiteY ; i+=(limiteY/lineas))
 {
 	context.beginPath();
 	context.moveTo(0,i+0.5);
 	context.lineTo(limiteX,i+0.5);
 	context.strokeStyle="#AAA";
 	context.closePath();
 	context.stroke();
 	
 }
	

}