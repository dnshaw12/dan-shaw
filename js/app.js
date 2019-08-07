const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

class Comet {

	constructor(){	
		this.x = canvas.width;
		this.y = 0;
		this.angle = Math.floor((Math.random() * (180 - 90)) + 90);
		this.angleRads = this.angle * (Math.PI/180);
	}
	draw(){
		ctx.beginPath()
		ctx.arc(this.x, this.y, 2, 0, Math.PI * 2, true)
		ctx.fillStyle = 'black';
		ctx.fill()
		// console.log(this.angle);

		const time = setInterval(()=>{
			this.animate()
		},100)

	}
	animate(){
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		this.x = this.x + 0.1 * Math.cos(this.angleRads)
		this.y = this.y + 0.1 * Math.sin(this.angleRads)
		// console.log(this.x,this.y);
		this.draw()
		// console.log('move');
	}
}

const cometTimer = setInterval(() => {
	console.log('newComet');
	const newComet = new Comet
	newComet.draw()
}, 500)