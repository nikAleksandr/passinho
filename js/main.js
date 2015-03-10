var data = new p5.Table(),
	numRows,
	row = 1,
	Pos,
	PrevPos,
	Vel,
	Accel,
	scl = 0.000001;

function preload(){
	data = loadTable("data/LOG00118.TXT", "csv");
}

function setup(){
	createCanvas(window.innerWidth, window.innerHeight);
	
	frameRate(100000);
	
	numRows = data.getRowCount();
	Pos = createVector(width/2,height-100,10),
	PrevPos = Pos,
	Vel = createVector(0,0,0),
	Accel = createVector(0,0,0);
	
	//could set background color based on overall level of movement (dark blue to chilly blue, to yellow to bright orange)
	background(255);
}

function draw(){
	//background(255);
	//save previous position values before processing the next ones
	PrevPos = Pos;
	noStroke();
	
	processData(row);
	
	
	fill(132, 55, 78, 1);
	ellipse(Pos.x, Pos.y, Pos.z, Pos.z);
	//line(PrevPos.x, PrevPos.y, Pos.x, Pos.y);
	
	//helper to print out the values of the vectors on screen
	//text("x: " + nf(Accel.x, 0, 1, 2), width-100, 20);
	//text("y: " + nf(Accel.y, 0, 1, 2), width-100, 40);
	
	
	row ++;
	if(row >= numRows){
		noLoop();
	}
}

//processData will take in the raw accelerometer data and process it into x, y, and z positions
function processData(row){
	var xyz = data.getRow(row);
	console.log("frameCount");
	Accel.set(xyz.get(1), xyz.get(2), xyz.get(0));
	//scale acceleration to reasonable pixel values
	Accel.mult(scl);
	Vel.add(Accel);
	Pos.add(Vel);
	
	
}
//returns a random choice between 0, 1, and 2
var rN = function(){
	var r = random();	
	if(r<.33) return 0;
	else if(r<.66) return 1;
	else return 2;
};
