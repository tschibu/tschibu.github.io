// Die Canvas-Funktion beim Laden der Seite aufrufen
if(window.addEventListener){
	addEventListener("load", drawMyCanvas, false);
}


//Canvas zeichnen
function drawMyCanvas(){
	var canvas = document.getElementById('myCanvasPanel');
	var img = new Image();
	img.onload = function(){
		if(canvas.getContext){
			var context = canvas.getContext('2d');
			context.translate(200, 0);
			context.rotate(90 * Math.PI/180);
			context.drawImage(img, 0, 0);
		}
	}
	img.src = 'img/canvas.png';
}