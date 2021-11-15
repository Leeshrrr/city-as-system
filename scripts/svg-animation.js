async function loadP() {


    let praw = await fetch('../svgs/p-image.svg');
    // console.log(praw);
    let ptext = await praw.text();
    document.querySelector('.p-holder').innerHTML = ptext;

    // console.log(ptext);
}

loadP();


// window.onload = function() {



//     const turn01 = document.querySelector(".turn01");

//     const p01 = document.querySelector("#p01");
//     console.log("yuyuyuyuyuy")
//     p01.style.width = "358px";

//     if (turn01.style.opacity == 0) {
//         //const p01 = document.querySelector("#p01");
//         console.log("0202020202020");
//         p01.style.width = "358px";

//     }

// }