function animOpening() {
	console.log("animOpening");

	var element = document.getElementById("anim-opening");
  	element.classList.add("anim-after");

  	/*var element2 = document.getElementById("text");
  	element2.classList.add("hidden");*/

  	var button = document.getElementById("button-start");
  	button.classList.add("button-index");

  	var popup = document.getElementById("popup");
  	popup.classList.remove("hidden");

  	var fade = document.getElementById("fade");
  	fade.classList.remove("hidden");
}

function participate() {
	var frame = document.getElementById("frame");
  	frame.classList.add("frame-upper");

	document.getElementById('switcher').className ='classname';

	window.setTimeout(test1, 300); 
	window.setTimeout(test2, 500);  

}

function test1() {
	var page1 = document.getElementById("page1");
  	page1.classList.add("hidden");

  	var episodes = document.getElementById("episodes");
  	episodes.classList.remove("under");

  	var navigation = document.getElementById("navigation");
  	navigation.classList.remove("under");


}

function test2() {
	var frameR = document.getElementById("frame");
  	frameR.classList.remove("frame-upper");
}



function gotop1() {

	var frame = document.getElementById("frame");
  	frame.classList.add("frame-upper");

  	document.getElementById('switcher4').className ='classname2';

	window.setTimeout(back1, 300); 
	window.setTimeout(back2, 500); 
}

function back1() {
	var navigation3 = document.getElementById("navigation3");
  	navigation3.classList.add("under");

  	var games = document.getElementById("games");
  	games.classList.add("under");
  	

	var page1 = document.getElementById("page1");
  	page1.classList.remove("hidden");

  	var episodes = document.getElementById("episodes");
  	episodes.classList.add("under");

  	var navigation = document.getElementById("navigation");
  	navigation.classList.add("under");

  	var element = document.getElementById("anim-opening");
  	element.classList.remove("anim-after");

  	var button = document.getElementById("button-start");
  	button.classList.remove("button-index");

  	var popup = document.getElementById("popup");
  	popup.classList.add("hidden");

  	var fade = document.getElementById("fade");
  	fade.classList.add("hidden");

  	
}
function back2() {
	var frameR = document.getElementById("frame");
  	frameR.classList.remove("frame-upper");
}



function gotop3() {
	var frame = document.getElementById("frame");
  	frame.classList.add("frame-upper");

	document.getElementById('switcher2').className ='classname';

	window.setTimeout(p3spawn1, 300); 
	window.setTimeout(p3spawn2, 500);  
}

function p3spawn1() {
	var episodes = document.getElementById("episodes");
  	episodes.classList.add("under");

  	var navigation = document.getElementById("navigation");
  	navigation.classList.add("under");

  	var navigation2 = document.getElementById("navigation2");
  	navigation2.classList.remove("under");

  	var players = document.getElementById("players");
  	players.classList.remove("under");
}

function p3spawn2() {
	var frameR = document.getElementById("frame");
  	frameR.classList.remove("frame-upper");
}


function gotop4() {
	var frame = document.getElementById("frame");
  	frame.classList.add("frame-upper");

	document.getElementById('switcher3').className ='classname';

	window.setTimeout(p4spawn1, 300);
	window.setTimeout(p4spawn2, 500);
}


function p4spawn1() {
	var players = document.getElementById("players");
  	players.classList.add("under");

  	var navigation2 = document.getElementById("navigation2");
  	navigation2.classList.add("under");

  	var navigation3 = document.getElementById("navigation3");
  	navigation3.classList.remove("under");

  	var games = document.getElementById("games");
  	games.classList.remove("under");
}

function p4spawn2() {
	var frameR = document.getElementById("frame");
  	frameR.classList.remove("frame-upper");
}



function g4() {
	/*console.log("g4");*/
	var honeycombopening = document.getElementById("honeycomb-opening");
  	honeycombopening.classList.add("honeycomb-after");

  	/*var element2 = document.getElementById("text");
  	element2.classList.add("hidden");*/

  	/*var button = document.getElementById("button-start");
  	button.classList.add("button-index");*/

  	var honeycombpopup = document.getElementById("honeycomb-popup");
  	honeycombpopup.classList.remove("hidden");


  	var fade = document.getElementById("fade2");
  	fade.classList.remove("hidden");
}

function closeHoneycomb() {
	var honeycombopening = document.getElementById("honeycomb-opening");
  	honeycombopening.classList.remove("honeycomb-after");

  	var honeycombpopup = document.getElementById("honeycomb-popup");
  	honeycombpopup.classList.add("hidden");

  	var fade = document.getElementById("fade2");
  	fade.classList.add("hidden");
}


function epi1() {
	/*console.log("g4");*/
	var epi1 = document.getElementById("epi1-opening");
  	epi1.classList.add("epi1-after");

  	/*var element2 = document.getElementById("text");
  	element2.classList.add("hidden");*/

  	/*var button = document.getElementById("button-start");
  	button.classList.add("button-index");*/

  	var epi1popup = document.getElementById("epi1-popup");
  	epi1popup.classList.remove("hidden");

  	var fade = document.getElementById("fade3");
  	fade.classList.remove("hidden");


  	/*var fade = document.getElementById("fade3");
  	fade.classList.remove("hidden");*/
}

function closeepi1() {
	var epi1 = document.getElementById("epi1-opening");
  	epi1.classList.remove("epi1-after");


  	var epi1popup = document.getElementById("epi1-popup");
  	epi1popup.classList.add("hidden");
  	var fade = document.getElementById("fade3");
  	fade.classList.add("hidden");
}

function p3() {
	/*console.log("g4");*/
	var p3 = document.getElementById("p3-opening");
  	p3.classList.add("p3-after");

  	/*var element2 = document.getElementById("text");
  	element2.classList.add("hidden");*/

  	/*var button = document.getElementById("button-start");
  	button.classList.add("button-index");*/

  	var p3popup = document.getElementById("p3-popup");
  	p3popup.classList.remove("hidden");


  	/*var fade = document.getElementById("fade3");
  	fade.classList.remove("hidden");*/

  	var fade = document.getElementById("fade4");
  	fade.classList.remove("hidden");
}

function closep3() {
	var p3 = document.getElementById("p3-opening");
  	p3.classList.remove("p3-after");

  	var p3popup = document.getElementById("p3-popup");
  	p3popup.classList.add("hidden");

  	var fade = document.getElementById("fade4");
  	fade.classList.add("hidden");

}



/*participate()
gotop3()
gotop4()*/