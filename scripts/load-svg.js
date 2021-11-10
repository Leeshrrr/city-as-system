async function loadSVG() {
    let svgraw = await fetch('../svgs/death-rate-svg.svg');
    console.log(svgraw);
    let svgtext = await svgraw.text();
    document.querySelector('.svg-holder').innerHTML = svgtext;

    console.log(svgtext);

}

loadSVG();