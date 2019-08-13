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
		this.y = canvas.height/3-5;
		this.angle = angle
		this.colorIndex = colorIndex
		this.angleRads = this.angle * (Math.PI/180);
		this.colors = ['red','orange','yellow','green','blue','purple','magenta']
		// this.rotation = Math.PI / 180
	}
	draw(){
		ctx.clearRect(this.x - 2.5, this.y - 2.5, 10, 10)
		// ctx.fillStyle = 'black'
		ctx.beginPath()
		// ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2, true)
		ctx.rect(this.x, this.y, 2, 2)
		// ctx.rotate(this.rotation)
		ctx.fillStyle = this.colors[this.colorIndex];
		ctx.fill()
		this.x = this.x + 1 * Math.cos(this.angleRads)
		this.y = this.y + 1 * Math.sin(this.angleRads)
		// this.rotation = this.rotation + 1

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


// window.addEventListener('scroll', function(e) {
// 	console.log(e);
// })

let fromTop = document.body.getBoundingClientRect().top

let scrollPos = 0;

let left = 0

const $title = $('#title-overlay')

console.log($title);

window.addEventListener('scroll', function(element){
  	


	if ((document.body.getBoundingClientRect()).top > scrollPos) {
		console.log('data-scroll-direction', 'UP');
		console.log(document.body.getBoundingClientRect().top);
		// if (left <= 0) {
		// 	left = left + 0.5
		// 	$('#title-overlay').css({'left':left*4+'px'})
		// 	console.log(left+'px');

		// }

	} else {
		console.log('data-scroll-direction', 'Down');

		console.log(document.body.getBoundingClientRect().top);

		// if (left >= -500) {
		// 	left = left - 0.5
		// 	$('#title-overlay').css({'left':left*4+'px'})
		// 	console.log(left+'px');

		// }
	
	}
	scrollPos = (document.body.getBoundingClientRect()).top;
});

if (document.body.getBoundingClientRect().top === 0) {

	console.log('!!!!!!!!!!!!!!!!!!!!');
	// $title.animate({
	// 	'left': '0'
	// }, 500, function(){
		$('#title-overlay').css({
			'left': '0'
		})
	// })
}

if (document.body.getBoundingClientRect().top < -500) {

	console.log('!!!!!!!!!!!!!!!!!!!!');
	// $title.animate({
	// 	'left': '0'
	// }, 500, function(){
		$('#title-overlay').css({
			'left': '0'
		})
	// })
}

// if (document.body.getBoundingClientRect().top <= -550) {
// 	console.log('black');
// 	$('nav').css({
// 		'background-color': 'black'
// 	})
// }

// if (document.body.getBoundingClientRect().top >= -550) {
// 	console.log('transparent');
// 	$('nav').css({
// 		'background-color': 'transparent'
// 	})
// }

const $tstDetails = $('#exp-show-details-tst')

$tstDetails.on('click',() => {
	console.log($('#exp-ul-tst').find('li'));
	$('#exp-ul-tst').find('li').toggleClass('open')
})

const $nysDetails = $('#exp-show-details-nys')

$nysDetails.on('click',() => {
	console.log($('#exp-ul-nys').find('li'));
	$('#exp-ul-nys').find('li').toggleClass('open')
})






