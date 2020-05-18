
function drawCoordinates(P, pointSize=1)
{
    ctx.fillStyle = "blue"; 

    ctx.beginPath(); 
    ctx.arc(P[0], P[1], pointSize, 0, Math.PI * 2, true); 
    ctx.fill();
}

function findMidPoint(P1, P2)
{
	var MP = [0,0]
	MP[0] = Math.ceil((P1[0]+P2[0])/2);
	MP[1] = Math.ceil((P1[1]+P2[1])/2);
	return MP; 
}

function initSystem(array)
{
	for (var i = array.length - 1; i >= 0; i--) {

		drawCoordinates(array[i], array[i])
	}
	makeFractal()
}

function drawNextPoint()
{
	drawCoordinates(MP)
	var randIdx = Math.floor(Math.random() * Triangle.length);
	MP = findMidPoint(Triangle[randIdx], MP)

	PointCount = PointCount + 1

	if(PointCount == DepthLevel)
	{
		clearTimeout(timer)
	}

}

function makeFractal()
{	
	timer = setInterval(drawNextPoint, 0.25)
}

var timer
var canvas = document.createElement("CANVAS");
canvas.width = 750
canvas.height = 750
ctx = canvas.getContext('2d')

var MP = [Math.floor((canvas.width-50)/2), Math.floor((canvas.height-50)/2)]
var Triangle = [[Math.floor((canvas.width-50)/2), 25], [25, canvas.height-25], [canvas.width-25, canvas.height-25]]


DepthLevel = 20000
PointCount = 0

document.body.appendChild(canvas)
ctx.clearRect(0, 0, 500, 500);

initSystem(Triangle)
