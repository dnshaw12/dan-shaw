const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

class Comet {

	constructor(angle, colorIndex){	
		this.x = -30;
		this.y = canvas.height/2;
		this.angle = angle
		this.colorIndex = colorIndex
		this.angleRads = this.angle * (Math.PI/180);
		this.colors = ['red','orange','yeallow','green','blue','purple','pink']
	}
	draw(){
		ctx.clearRect(this.x - 4, this.y - 4, 8, 8)
		ctx.beginPath()
		ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2, true)
		ctx.fillStyle = this.colors[this.colorIndex];
		ctx.fill()
		this.x = this.x + 1 * Math.cos(this.angleRads)
		this.y = this.y + 1 * Math.sin(this.angleRads)

	}
	animate(){
		const time = setInterval(()=>{
			if (this.x >= -5 || this.y <= canvas.height + 5) {
				this.draw()
			}
		},10)
		
	}
}

const cometTimer = setInterval(() => {
	console.log('newComet');
	const newComet = new Comet(Math.floor((Math.random() * (35 - -35)) + -35), Math.floor((Math.random() * 8)))
	newComet.draw()
	newComet.animate()
}, 75)

// const time = setInterval(()=>{
// 	ctx.clearRect(0, 0, canvas.width, canvas.height)
// },10)





