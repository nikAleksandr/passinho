

var data = new p5.Table(),
	numRows,
	row = 1,
	Pos,
	PrevPos,
	Vel,
	Accel;

function preload(){
	data = loadTable("data/LOG00119.TXT", "csv");
}

function setup(){
	numRows = data.getRowCount();
	Pos = createVector(0,0,0),
	PrevPos = Pos,
	Vel = createVector(0,0,0),
	Accel = createVector(0,0,0);
	
	//could set background color based on overall level of movement (dark blue to chilly blue, to yellow to bright orange)
	background(255);
	smooth();
}

function draw(){
	//save previous position values before processing the next ones
	PrevPos = Pos;

	processData(row);
	
	//line(PrevPos.x, PrevPos.y, Pos.x, Pos.y);
	row ++;
	if(row > numRows-1){
		frameRate(0);
	}
}

//processData will take in the raw accelerometer data and process it into x and y positions
function processData(row){
	var xyz = data.getRow(row);
	Pos.set(xyz.get(0), xyz.get(1), xyz.get(2));
	
	console.log(Pos);
	
	frameRate(1);
}
