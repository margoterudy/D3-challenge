//Chart size

const chartWidth = 600;
const chartHeight = 400;

    const margin = {
    top: 30,
    right: 50,
    bottom: 90,
    left: 100
};
 


// Calculate chart width and height
const width = chartWidth - margin.left - margin.right;
const height = chartHeight - margin.top - margin.bottom;


// Create  wrapper, append group

const svg = d3.select("#scatter")
            .append("svg")
            .attr("width", chartWidth)
            .attr("height", chartHeight);


