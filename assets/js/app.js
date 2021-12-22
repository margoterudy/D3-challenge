//Chart set up (found in D3 activity 9 Hairmetal)
var chartWidth = 960;
var chartHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
};

var width = chartWidth - margin.left - margin.right;
var height = chartHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", chartWidth)
  .attr("height", chartHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Import Data - CSV -*still activity 9
  d3.csv("assets/data/data.csv").then(function(USCensusData) {
    
    // Step 1: Parse Data/Cast as numbers
    USCensusData.forEach(function(data) {
      data.age = +data.age;
      data.smokes = +data.smokes;

    //   console.log(data); yay data shows!!!

    });

    // Step 2: Create scale functions
    var xScale = d3.scaleLinear()
    .domain(d3.extent(USCensusData, d => d.age))
    .range([0, width])
    .nice(); //makes the intersection of axes crisp

    var yScale = d3.scaleLinear()
        .domain([6,d3.max(USCensusData, d => d.smokes)])
        .range([height, 0])
        .nice();

    // Step 3: Create axis functions
    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);

    // Step 4: Append Axes to the chart
    chartGroup.append("g").attr("transform", `translate(0, ${height})`).call(xAxis);
    chartGroup.append("g").call(yAxis);

    //chart shows!

    // Step 5: Create Circles/Dots
    chartGroup.selectAll("circle")
        .data(USCensusData)
        .enter()
        .append("circle")
        .attr("cx", d=>xScale(d.age))
        .attr("cy", d=>yScale(d.smokes))
        .attr("r", "10")
        .attr("stroke-width", "1")
        .classed("stateCircle", true)
        .attr("opacity", 0.5);

                //I see dots!!!

        //Add text to Circles/dots
            chartGroup.append("g")
            .selectAll('text')
            .data(USCensusData)
            .enter()
            .append("text")
            .text(d=>d.abbr)
            .attr("x",d=>xScale(d.age))
            .attr("y",d=>yScale(d.smokes))
            .classed(".stateText", true)
            .attr("font-family", "times-roman-numeral")
            .attr("text-anchor", "middle")
            .attr("fill", "black")
            .attr("font-size", "8px")
            .style("font-weight", "bold")
            .attr("alignment-baseline", "central");
  

       //Create axes labels
            chartGroup.append("text")
            .attr("transform", `translate(${width / 2}, ${height + margin.top + 13})`)
            .attr("text-anchor", "middle")
            .attr("font-size", "16px")
            .attr("fill", "black")
            .style("font-weight", "bold")
            .text("Age");

            chartGroup.append("text")
            .attr("y", 0 - ((margin.left / 2) + 2))
            .attr("x", 0 - (height / 2))
            .attr("text-anchor", "middle")
            .attr("font-size", "16px")
            .attr("fill", "black")
            .style("font-weight", "bold")
            .attr("transform", "rotate(-90)")
            .text("Smokers (%)");
 

//end
}).catch(function(error) {
    console.log(error);
  });
