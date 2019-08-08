const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

//get canvas
//get context
// function fix_dpi() {
// //get CSS height
// //the + prefix casts it to an integer
// //the slice method gets rid of "px"
// let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
// //get CSS width
// let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
// //scale the canvas
// canvas.setAttribute('height', style_height * dpi);
// canvas.setAttribute('width', style_width * dpi);
// }

class Comet {

	constructor(angle, colorIndex){	
		this.x = -60;
		this.y = canvas.height/3;
		this.angle = angle
		this.colorIndex = colorIndex
		this.angleRads = this.angle * (Math.PI/180);
		this.colors = ['red','orange','yellow','green','blue','purple','magenta']
	}
	draw(){
		ctx.clearRect(this.x - 4, this.y - 4, 8, 8)
		// ctx.fillStyle = 'black'
		ctx.beginPath()
		ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2, true)
		ctx.fillStyle = this.colors[this.colorIndex];
		ctx.fill()
		this.x = this.x + 1 * Math.cos(this.angleRads)
		this.y = this.y + 1 * Math.sin(this.angleRads)

	}
	animate(){
		const time = setInterval(()=>{
			if (this.x < canvas.width + 10) {
				this.draw()
			}
		},10)
		
	}
}

const cometTimer = setInterval(() => {
	console.log('newComet');
	const newComet = new Comet(Math.random() * (15 - -15) + -15, Math.floor((Math.random() * 8)))
	newComet.draw()
	newComet.animate()
}, 75)

// const time = setInterval(()=>{
// 	ctx.clearRect(0, 0, canvas.width, canvas.height)
// },10)





