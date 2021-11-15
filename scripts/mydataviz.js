// set the dimensions and margins of the graph
var margin = {
        top: 10,
        right: 20,
        bottom: 30,
        left: 50
    },
    width = 1440 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("./jsons/pipe-filtered.csv", function(data) {

    // Add X axis
    var x = d3.scaleLinear()
        .domain([0, 33])
        .range([0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, 23])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));

    // Add a scale for bubble size
    var z = d3.scaleLinear()
        .domain([0, 0.5])
        .range([5, 30]);

    // Add a scale for bubble size
    var w = d3.scaleLinear()
        .domain([0, 0.5])
        .range([2, 10]);

    // Add dots
    svg.append('g')
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function(d) {
            return x(d.order);
        })
        .attr("cy", function(d) {
            return y(d.countyorder);
        })
        .attr("r", function(d) {
            return z(d.highrate2016);
        })
        .style("fill", "brown")
        .style("opacity", "0.7")
        .attr("stroke", "black")
        // -3- Trigger the functions
        .on("mouseover", showTooltip)
        .on("mousemove", moveTooltip)
        .on("mouseleave", hideTooltip)

    // Add dots
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

    // -1- Create a tooltip div that is hidden by default:
    var tooltip = d3.select("#my_dataviz")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "black")
        .style("border-radius", "5px")
        .style("padding", "10px")
        .style("color", "white")


    // -2- Create 3 functions to show / update (when mouse move but stay on same circle) / hide the tooltip
    var showTooltip = function(d) {
        tooltip
            .transition()
            .duration(200)
        tooltip
            .style("opacity", 1)
            .html("County: " + d.County)
            .style("left", (d3.mouse(this)[0] + 30) + "px")
            .style("top", (d3.mouse(this)[1] + 30) + "px")

        console.log("12334234213")
    }
    var moveTooltip = function(d) {
        tooltip
            .style("left", (d3.mouse(this)[0] + 30) + "px")
            .style("top", (d3.mouse(this)[1] + 30) + "px")


    }
    var hideTooltip = function(d) {
        tooltip
            .transition()
            .duration(200)
            .style("opacity", 0)
    }





})