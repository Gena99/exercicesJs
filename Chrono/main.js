var Chrono = function(){
	//this.h = 0;
	//this.mn = 0;
	this.sec = 0;
	this.interval = undefined;
	this.start = function(){
		console.log('start');
		if(this.interval == undefined ){
			this.interval = window.setInterval(function(){
				chrono.sec ++;
				$('#sec').text(chrono.sec);
			}, 1000);		
		}
	}
	this.pause = function(){
		console.log('pause');
		window.clearInterval(chrono.interval);
		this.interval = undefined;

	}
	this.stop = function(){
		console.log('stop');
		window.clearInterval(chrono.interval);
		this.interval = undefined;
		this.sec = 0;
		$('#sec').text(chrono.sec);
	}
}

$(document).ready(function(){
	chrono = new Chrono()
	//Déclarer un gestionnaire d'évènement click (event handler) sur le button créé dans le HTML
	$('#demarrer').click(function(){
		chrono.start();
	});
	$('#pause').click(function(){
		chrono.pause();
	});
	$('#stop').click(function(){
		chrono.stop();
	});

});

