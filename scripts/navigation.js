let menuIcon = document.querySelector(".header-menu");
let aboutIcon = document.querySelector(".about-icon");
let menu = document.querySelector(".menu");
let mainText = document.querySelectorAll(".main-text");
let subtitle = document.querySelectorAll(".sub-title");
let menuClass = 0;
let aboutClass = 0;


menuIcon.addEventListener("click", function() {

    if (menuClass == 0) {
        // menuIcon.style.color = "#8f0909";
        menu.style.left = "0"
        menuClass = 1;

    } else if (menuClass == 1) {
        //menuIcon.style.color = "black";
        menu.style.left = "-20%"
        menuClass = 0;

    }
})
aboutIcon.addEventListener("click", function() {

    if (aboutClass == 0) {
        aboutIcon.src = "images/close-icon.svg";
        aboutClass = 1;
    } else if (aboutClass == 1) {
        aboutIcon.src = "images/menu-icon.svg";
        aboutClass = 0;
    }
})

// init controller
var controller1 = new ScrollMagic.Controller();

// build tween
var tween = TweenMax.from("#section2", 0.5, { autoAlpha: 0, scale: 0.7 });
// var tween2 = TweenMax.from("#section2", 0.5, { autoAlpha: 0, scale: 0.7 });

// build scene
var scene = new ScrollMagic.Scene({ triggerElement: "a#section2", duration: 2000, triggerHook: "onLeave" })
    .setTween(tween)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller1);



// change behaviour of controller to animate scroll instead of jump
controller1.scrollTo(function(newpos) {
    TweenMax.to(window, 1.5, { scrollTo: { y: newpos } });
});

//  bind scroll to anchor links
$(document).on("click", "a[href^='#']", function(e) {
    var id = $(this).attr("href");
    if ($(id).length > 0) {
        e.preventDefault();

        // trigger scroll
        controller1.scrollTo(id);

        // if supported by the browser we can even update the URL.
        if (window.history && window.history.pushState) {
            history.pushState("", document.title, id);
        }
    }
});