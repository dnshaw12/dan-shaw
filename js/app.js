const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

class Comet {

	constructor(angle){	
		this.x = canvas.width;
		this.y = 0;
		this.angle = angle
		this.angleRads = this.angle * (Math.PI/180);
	}
	draw(){
		ctx.clearRect(this.x-5, this.y-5, 10, 10)
		ctx.beginPath()
		ctx.arc(this.x, this.y, 2, 0, Math.PI * 2, true)
		ctx.fillStyle = 'white';
		ctx.fill()
		this.x = this.x + 0.75 * Math.cos(this.angleRads)
		this.y = this.y + 0.75 * Math.sin(this.angleRads)

	}
	animate(){
		const time = setInterval(()=>{
			if (this.x >= 0 || this.y <= canvas.height) {
				this.draw()
			}
		},10)
		
	}
}

const cometTimer = setInterval(() => {
	console.log('newComet');
	const newComet = new Comet(Math.floor((Math.random() * (180 - 90)) + 90))
	newComet.draw()
	newComet.animate()
}, 500)