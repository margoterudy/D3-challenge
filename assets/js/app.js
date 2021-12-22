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
})