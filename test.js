let controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({ triggerElememt: ".state1" })
    .setClassToggle(".state1", "change")
    .addTo("controller");
console.log("1111111")