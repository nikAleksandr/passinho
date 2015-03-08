function preload(){
	var data = new p5.Table();
	data = loadTable("data/LOG00119.TXT", "csv");
	console.log(data);
}

function setup(){
	smooth();
}

function draw(){
	line(data.get())
}
