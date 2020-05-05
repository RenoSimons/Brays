var windowWidth = window.innerWidth;

function reportWindowSize() {
  windowWidth = window.innerWidth
}
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

window.addEventListener('resize', reportWindowSize);

//BANDJE COLOR SELECTOR
$(document).ready(function(){
	$("#kleurbol").click(function(e){
	
	$("#render-img").attr("src", "images/RenderGreen.png");
    });   
    $("#kleurbol2").click(function(){
        
        $("#render-img").attr("src", "images/RenderWhite.png");
    });   
    $("#kleurbol3").click(function(){
        
        $("#render-img").attr("src", "images/RenderBlack.png");
    });    
});

//PROGRESS BAR
jQuery( document ).ready(function() { scrolled(); });
jQuery( document ).scroll(function() { scrolled(); });

function scrolled() {
  var h = document.documentElement,
  b = document.body,
  st = 'scrollTop',
  sh = 'scrollHeight';
  var p = parseInt((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);

  jQuery('#progressbar').css("width", p + "%");
  jQuery('#progressbar').attr("aria-valuenow", p);
}

//SCROLLMAGIC ANIMATIONS MOBILE

if (windowWidth < 576) {
	
	//HIDE NAVBAR ON MOBILE
	$( document ).ready(function() {
	    $('#navbar').addClass("collapse");
	});
	
	var controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
		triggerElement: "#whybrays", 
		triggerHook: 0.9, // show, when scrolled 10% into view
		duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
		offset: 50 // move trigger to center of element
	})
	.setClassToggle("#whybrays", "visible") // add class to reveal
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#who", 
		triggerHook: 0.8, // show, when scrolled 10% into view
		duration: "160%", // hide 10% before exiting view (80% + 10% from bottom)
		offset: 50 // move trigger to center of element
	})
	.setClassToggle("#who", "visible") // add class to reveal
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#product", 
		triggerHook: 0.8, // show, when scrolled 10% into view
		duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
		offset: 50 // move trigger to center of element
	})
	.setClassToggle("#product", "visible") // add class to reveal
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement:"#specs", 
		triggerHook: 0.9, // show, when scrolled 10% into view
		duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
		offset: 50 // move trigger to center of element
	})
	.setClassToggle("#specs", "visible") // add class to reveal
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#app", 
		triggerHook: 0.8, // show, when scrolled 10% into view
		duration: "130%", // hide 10% before exiting view (80% + 10% from bottom)
		offset: 50 // move trigger to center of element
	})
	.setClassToggle("#app", "visible") // add class to reveal
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#contact", 
		triggerHook: 0.8, // show, when scrolled 10% into view
		duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
		offset: 50 // move trigger to center of element
	})
	.setClassToggle("#contact", "visible") // add class to reveal
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);
}


//SCROLLMAGIC ANIMATIONS TABLET
if (windowWidth > 577 && windowWidth < 1199) {
	$('body').scrollspy({target:'#navbar', offset:150});

	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	     //>=, not <=
	    if (scroll >= 750) {
	        $(".navbar").addClass("bg-light");
	    }
	    if (scroll <= 750) {
	        $(".navbar").removeClass("bg-light");
	    }
	});

	var controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
		triggerElement: "#whybrays", 
		triggerHook: 0.9, // show, when scrolled 10% into view
		duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
		offset: 50 // move trigger to center of element
	})
	.setClassToggle("#whybrays", "visible") // add class to reveal
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#who", 
		triggerHook: 0.8, // show, when scrolled 10% into view
		duration: "90%", // hide 10% before exiting view (80% + 10% from bottom)
		offset: 50 // move trigger to center of element
	})
	.setClassToggle("#who", "visible") // add class to reveal
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#product", 
		triggerHook: 0.8, // show, when scrolled 10% into view
		duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
		offset: 50 // move trigger to center of element
	})
	.setClassToggle("#product", "visible") // add class to reveal
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement:"#specs", 
		triggerHook: 0.9, // show, when scrolled 10% into view
		duration: "70%", // hide 10% before exiting view (80% + 10% from bottom)
		offset: 50 // move trigger to center of element
	})
	.setClassToggle("#specs", "visible") // add class to reveal
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);


	new ScrollMagic.Scene({
		triggerElement: "#app", 
		triggerHook: 0.8, // show, when scrolled 10% into view
		duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
		offset: 50 // move trigger to center of element
	})
	.setClassToggle("#app", "visible") // add class to reveal
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#contact", 
		triggerHook: 0.8, // show, when scrolled 10% into view
		duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
		offset: 50 // move trigger to center of element
	})
	.setClassToggle("#contact", "visible") // add class to reveal
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);
}


//SCROLLMAGIC ANIMATIONS DESKTOP

if (windowWidth >= 1199) {
	var controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
		triggerElement: "#whybrays", 
		triggerHook: 0.9, // show, when scrolled 10% into view
		duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
		offset: 50 // move trigger to center of element
	})
	.setClassToggle("#whybrays", "visible") // add class to reveal
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#who", 
		triggerHook: 0.8, // show, when scrolled 10% into view
		duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
		offset: 50 // move trigger to center of element
	})
	.setClassToggle("#who", "visible") // add class to reveal
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#product", 
		triggerHook: 0.8, // show, when scrolled 10% into view
		duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
		offset: 50 // move trigger to center of element
	})
	.setClassToggle("#product", "visible") // add class to reveal
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement:"#specs", 
		triggerHook: 0.9, // show, when scrolled 10% into view
		duration: "70%", // hide 10% before exiting view (80% + 10% from bottom)
		offset: 50 // move trigger to center of element
	})
	.setClassToggle("#specs", "visible") // add class to reveal
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#app", 
		triggerHook: 0.8, // show, when scrolled 10% into view
		duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
		offset: 50 // move trigger to center of element
	})
	.setClassToggle("#app", "visible") // add class to reveal
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#contact", 
		triggerHook: 0.8, // show, when scrolled 10% into view
		duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
		offset: 50 // move trigger to center of element
	})
	.setClassToggle("#contact", "visible") // add class to reveal
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

	$('body').scrollspy({target:'#navbar', offset:200});

	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	     //>=, not <=
	    if (scroll >= 800) {
	        $(".navbar").addClass("bg-light");
	    }
	    if (scroll <= 800) {
	        $(".navbar").removeClass("bg-light");
	    }
	});
}



