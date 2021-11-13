async function loadMap() {
    let mapraw = await fetch('../svgs/usa-ny.svg');
    //console.log(svgraw);
    let maptext = await mapraw.text();
    document.querySelector('.map-holder').innerHTML = maptext;

    //console.log(svgtext);

}
loadMap();

async function loadChart() {
    let chartraw = await fetch('../svgs/high-chart.svg');
    //console.log(svgraw);
    let charttext = await chartraw.text();
    document.querySelector('.chart-holder').innerHTML = charttext;

    //console.log(svgtext);

}
loadChart();

window.onload = function() {




    for (let i = 0; i < mapData.length; i++) {
        let colorNum = 255 - 255 * 7 * mapData[i].up5Per;
        const changeElement = document.getElementById(mapData[i].countyName);
        const countyName = document.querySelector(".county-name");
        const countyName2 = document.querySelector(".dark-red");
        const population = document.querySelector(".children-population");
        const rate = document.querySelector(".high-rate");
        const tested = document.querySelector(".tested-number");

        console.log(mapData[i].bll5to9 / mapData[i].testedNum * 1000)



        changeElement.style.fill = rgb2hex([colorNum + 10, colorNum + 5, colorNum]);

        changeElement.addEventListener('mouseover', function() {
            changeElement.style.fill = "brown";
            countyName.innerHTML = `${mapData[i].countyName} County`;
            countyName2.innerHTML = `${mapData[i].countyName} County,`;
            population.innerHTML = mapData[i].totalNum;
            rate.innerHTML = `${(mapData[i].up5Per*100).toFixed(4)}%`;
            tested.innerHTML = `${mapData[i].testedNum}`

            const r01 = document.querySelector("#r01");
            r01.style.height = `${mapData[i].bll5to9/mapData[i].testedNum*3000}`;
            r01.style.y = `${143-mapData[i].bll5to9/mapData[i].testedNum*3000}px`;
            const r02 = document.querySelector("#r02");
            r02.style.height = `${mapData[i].bll10to14/mapData[i].testedNum*3000}`;
            r02.style.y = `${143-mapData[i].bll10to14/mapData[i].testedNum*3000}px`;
            const r03 = document.querySelector("#r03");
            r03.style.height = `${mapData[i].bll15to19/mapData[i].testedNum*3000}`;
            r03.style.y = `${143-mapData[i].bll15to19/mapData[i].testedNum*3000}px`;
            const r04 = document.querySelector("#r04");
            r04.style.height = `${mapData[i].bll20to24/mapData[i].testedNum*3000}`;
            r04.style.y = `${143-mapData[i].bll20to24/mapData[i].testedNum*3000}px`;
            const r05 = document.querySelector("#r05");
            r05.style.height = `${mapData[i].bll24to45/mapData[i].testedNum*3000}`;
            r05.style.y = `${143-mapData[i].bll24to45/mapData[i].testedNum*3000}px`;
            const r06 = document.querySelector("#r06");
            r06.style.height = `${mapData[i].bll45plus/mapData[i].testedNum*3000}`;
            r06.style.y = `${143-mapData[i].bll45plus/mapData[i].testedNum*3000}px`;


        });
        changeElement.addEventListener('mouseleave', function() {
            changeElement.style.fill = rgb2hex([colorNum + 10, colorNum + 5, colorNum]);
        });
    }

}

//颜色进制转换
function zero_fill_hex(num, digits) {
    var s = num.toString(16);
    while (s.length < digits)
        s = "0" + s;
    return s;
}

function rgb2hex(rgb) {
    var decimal = Math.min(parseInt(rgb[0]), 245) * 65536 + Math.min(parseInt(rgb[1]), 240) * 256 + Math.min(parseInt(rgb[2]), 235);
    //console.log(decimal);
    return "#" + zero_fill_hex(decimal, 6);
}

//console.log(rgb2hex([255, 0, 0]))