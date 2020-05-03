//SCROLLSPY FOR NAVIGATION

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

//SCROLLMAGIC ANIMATIONS

var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
	triggerElement: "#whybrays", 
	triggerHook: 0.9, // show, when scrolled 10% into view
	duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
	offset: 50 // move trigger to center of element
})
.setClassToggle("#whybrays", "visible") // add class to reveal
.addIndicators() // add indicators (requires plugin)
.addTo(controller);

new ScrollMagic.Scene({
	triggerElement: "#who", 
	triggerHook: 0.8, // show, when scrolled 10% into view
	duration: "200%", // hide 10% before exiting view (80% + 10% from bottom)
	offset: 50 // move trigger to center of element
})
.setClassToggle("#who", "visible") // add class to reveal
.addIndicators() // add indicators (requires plugin)
.addTo(controller);

new ScrollMagic.Scene({
	triggerElement: "#app", 
	triggerHook: 0.8, // show, when scrolled 10% into view
	duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
	offset: 50 // move trigger to center of element
})
.setClassToggle("#app", "visible") // add class to reveal
.addIndicators() // add indicators (requires plugin)
.addTo(controller);