// set the dimensions and margins of the graph
var margin = {
        top: 10,
        right: 20,
        bottom: 30,
        left: 50
    },
    width = 1300 - margin.left - margin.right,
    height = 900 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

//Read the data
// d3.csv("./jsons/pipe-filtered.csv", function(data) {



// })
async function loadData() {
    let data = await d3.csv('./jsons/pipe-filtered.csv');
    return data

}

//loadData();
async function runLoad() {

    let data = await loadData();
    visualizeData(data);

}


runLoad();

function visualizeData(data) {

    // Add X axis
    var x = d3.scaleLinear()
        .domain([-0.5, 20.5])
        .range([0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        // .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, 25])
        .range([height, 0]);
    svg.append("g")
        //.call(d3.axisLeft(y));

    // Add a scale for bubble size
    var z = d3.scaleLinear()
        .domain([0, 0.5])
        .range([10, 60]);

    // Add a scale for bubble size
    var w = d3.scaleLinear()
        .domain([0, 0.5])
        .range([5, 30]);

    // console.log(data)

    // Add dots
    svg.append('g')
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function(d) {
            return x(d.countyorder);
        })
        .attr("cy", function(d) {
            return y(d.order);
        })
        .attr("r", function(d) {
            return z(d.highrate2016);
        })
        .style("fill", "brown")
        .style("opacity", "0.7")
        .attr("stroke", "black")
        // -3- Trigger the functions
        .on("mouseover", d => {
            showTooltip(d3.event, d)
                //console.log(d)
        })
        .on("mousemove", d => {
            moveTooltip(d3.event, d)
        })
        .on("mouseleave", d => { hideTooltip(d3.event, d) })


    //Add dots
    // svg.append('g')
    //     .selectAll("dot")
    //     .data(data)
    //     .enter()
    //     .append("circle")
    //     .attr("cx", function(d) {
    //         return x(d.order);
    //     })
    //     .attr("cy", function(d) {
    //         return y(d.countyorder);
    //     })
    //     .attr("r", function(d) {
    //         return w(d.ratechange);
    //     })
    //     .style("fill", "white")
    //     .style("opacity", "0.7")
    //     .attr("stroke", "black")






}

// -1- Create a tooltip div that is hidden by default:
const tooltip = d3.select("#my_dataviz")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .style("color", "white")


// -2- Create 3 functions to show / update (when mouse move but stay on same circle) / hide the tooltip
const showTooltip = function(event, d) {
    tooltip
        .transition()
        .duration(200)


    tooltip
        .style("opacity", 0.8)
        .style("stroke", "black")
        .html(`<p> School: ${d.School}</p><p> County: ${d.County}</p><p> Rate of pipe that has high lead level in 2016: ${Math.floor(d.highrate2016*10000)/100}%</p><p> Rate of pipe that has high lead level in 2020: ${Math.floor(d.highrate2020*10000)/100}%</p>`)
        .style("left", (event.x) / 2 + "px")
        .style("top", (event.y) / 2 + "px")
        //  .style("position", 'fixed')

    .style("width", 150 + "px")

}
const moveTooltip = function(event, d) {
    tooltip
        .style("left", (event.x) / 2 + "px")
        .style("top", (event.y) / 2 + 30 + "px")

    .style("position", 'fixed')
}
const hideTooltip = function(event, d) {
    tooltip
        .transition()
        .duration(200)
        .style("opacity", 0)
}