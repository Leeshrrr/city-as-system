async function loadSVG() {
    let svgraw = await fetch('./svgs/death-rate-svg.svg');
    // console.log(svgraw);
    let svgtext = await svgraw.text();
    document.querySelector('.svg-holder').innerHTML = svgtext;

    //console.log(svgtext);


    // let praw = await fetch('../svgs/p-image.svg');
    // // console.log(praw);
    // let ptext = await praw.text();
    // document.querySelector('.p-holder').innerHTML = ptext;

    // // console.log(ptext);
}

loadSVG();