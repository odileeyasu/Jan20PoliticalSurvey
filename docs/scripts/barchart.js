
// Create svg and initial bars
var svg = d3
    .select('div#myplot')
    .append('svg')
    .attr('width', '1000')
    .attr('height', '1000');

svg.append("rect")
  .attr("x","210").attr("y", "200")
  .attr("fill", "#F8F9F9")
  .attr('width', '800')
  .attr('height','235');

svg.append("text")
  .text("In").attr("x","110").attr("y", "70")
  .attr("font-size", "20");

svg.append("text")
.text("' opinion,").attr("x","430").attr("y", "70")
.attr("font-size", "20");

svg.append("text")
.text("are conflicts between ... and ... very strong, strong, \nnot very strong, or there are not conflicts?")
  .attr("x","110").attr("y", "95")
  .attr("font-size", "20");

var options = svg.append("g")
  .attr("id","buttons")

options.append("rect")
  .attr("id","rep")
  .attr("x","135").attr("y", "55")
  .attr("fill", "#E5E7E9")
  .attr('width', '90')
  .attr('height','20')
  .attr('stroke', "gray")
  .attr("stroke-width","3");

options.append("rect")
  .attr('id','dem')
  .attr("x","235").attr("y", "55")
  .attr("fill", "#E5E7E9")
  .attr('width', '80')
  .attr('height','20');

options.append("rect")
  .attr('id','ind')
  .attr("x","325").attr("y", "55")
  .attr("fill", "#E5E7E9")
  .attr('width', '100')
  .attr('height','20');

options.append("text")
  .attr('id','rep')
  .attr("x","140").attr("y", "70")
  .text("Republicans");

options.append("text")
  .attr('id','dem')
  .attr("x","240").attr("y", "70")
  .text("Democrats");

options.append("text")
  .attr('id','ind')
  .attr("x","332").attr("y", "70")
  .text("Independents");

var vsdata = [9, 12, 13, 75, 8];
var sdata = [27, 24, 24, 20, 28];
var nvsdata = [46, 43, 35, 3, 46];
var ndata = [16, 18, 26, 1, 16];
var facetlabels = ["Very strong conflicts",
                  "Strong conflicts",
                  "Not very strong conflicts",
                  "There are no conflicts"];
var ylabels = ["Young and Old",
              "Poor and Rich",
              "People in Cities and in Rural Areas",
              "Democrats and Republicans",
              "Black and White"];

var vs = svg
  .append('g')
  .attr('id', 'vs');
  

var s = svg
  .append('g')
  .attr('id', 's');

var nvs = svg
  .append('g')
  .attr('id', 'nvs');

var n = svg
  .append('g')
  .attr('id', 'n');

var y = svg.append('g')
  .attr('id','ylabels')
  .selectAll("text")
  .data(ylabels);

y.enter()
  .append("text")
  .attr("x", "200")
  .attr("y",(d,i)=>i*50+225)
  .attr("text-anchor","end")
  .attr("font-family","sans-serif")
  .attr("font-size","12")
  .text(d=>d);

var facets = svg.append('g')
  .attr('id','facets')
  .selectAll("text")
  .data(facetlabels);

facets.enter()
  .append("text")
  .attr("x", (d,i)=> i*200+210)
  .attr("y", "180")
  .attr("font-family","sans-serif")
  .attr("font-weight", "bold")
  .attr("font-size","12")
  .text(d=>d);


vs
	.selectAll('rect')
  .data(vsdata)
  .enter()
  .append('rect')
  .attr('x', '210')
  .attr('y', (d, i) => i * 50 + 200)
  .attr('width', d => d*2)
  .attr('height', '35')
  .attr('fill', '#78281F');

vs.selectAll("text")
	.data(vsdata)
	.enter()
  .append("text")
  .attr('x', d=>d*2+215)
  .attr('y', (d, i) => i * 50 + 222)
  .attr("fill", "#78281F")
  .attr("text-anchor","start")
  .text(d=>d+"%");


s
  .selectAll('rect')
  .data(sdata)
  .enter()
  .append('rect')
  .attr('x', '410')
  .attr('y', (d, i) => i * 50 + 200)
  .attr('width', d => d*2)
  .attr('height', '35')
  .attr('fill', '#B03A2E');

s.selectAll("text")
	.data(sdata)
	.enter()
  .append("text")
  .attr('x', d=>d*2+415)
  .attr('y', (d, i) => i * 50 + 222)
  .attr("fill", "#B03A2E")
  .attr("text-anchor","start")
  .text(d=>d+"%");


nvs
  .selectAll('rect')
  .data(nvsdata)
  .enter()
  .append('rect')
  .attr('x', '610')
  .attr('y', (d, i) => i * 50 + 200)
  .attr('width', (d) => d*2)
  .attr('height', '35')
  .attr('fill', "#EC7063");

nvs.selectAll("text")
	.data(nvsdata)
	.enter()
  .append("text")
  .attr('x', d=>d*2+615)
  .attr('y', (d, i) => i * 50 + 222)
  .attr("fill", "#EC7063")
  .attr("text-anchor","start")
  .text(d=>d+"%");

n
  .selectAll('rect')
  .data(ndata)
  .enter()
  .append('rect')
  .attr('x', '810')
  .attr('y', (d, i) => i * 50 + 200)
  .attr('width', (d) => d*2)
  .attr('height', '35')
  .attr('fill', '#E6B0AA');

n.selectAll("text")
	.data(ndata)
	.enter()
  .append("text")
  .attr('x', d=>d*2+815)
  .attr('y', (d, i) => i * 50 + 222)
  .attr("fill", "#E6B0AA")
  .attr("text-anchor","start")
  .text(d=>d+"%");

// General Update Pattern
demdata = [[14,44,16,72,26],[28,34,33,21,49],[44,14,35,4,19],[13,6,14,0,4]]
inddata = [[12,28,15,72,17],[23,31,26,20,31],[47,30,38,6,42],[16,8,19,0,8]]
repdata = [[9,12,13,75,8],[27,24,24,20,28],[46,43,35,3,46],[16,18,26,1,16]]

function changedata(VSdata,Sdata,NVSdata,Ndata) {
  	var dvs = svg
      .select("#vs");
    
    dvs.selectAll("rect")
      .data(VSdata)
      .transition()
      .duration(1000)
      .attr('width', d => d*2);

    dvs.selectAll("text")
      .data(VSdata)
      .transition()
      .duration(1000)
      .attr('x', d=>d*2+215)
      .text(d=>d+"%");
  
  	var ds = svg
      .select("#s");
    
    ds.selectAll("rect")
      .data(Sdata)
      .transition()
      .duration(1000)
      .attr('width', d => d*2);
    
    ds.selectAll("text")
      .data(Sdata)
      .transition()
      .duration(1000)
      .attr('x', d=>d*2+415)
      .text(d=>d+"%");
    
    var dnvs = svg
      .select("#nvs");
    
    dnvs.selectAll("rect")
      .data(NVSdata)
      .transition()
      .duration(1000)
      .attr('width', d => d*2);
    
    dnvs.selectAll("text")
      .data(NVSdata)
      .transition()
      .duration(1000)
      .attr('x', d=>d*2+615)
      .text(d=>d+"%");
    
    var dn = svg
      .select("#n");
    
    dn.selectAll("rect")
      .data(Ndata)
      .transition()
      .duration(1000)
      .attr('width', d => d*2);
    
    dn.selectAll("text")
      .data(Ndata)
      .transition()
      .duration(1000)
      .attr('x', d=>d*2+815)
      .text(d=>d+"%");
  }

  svg.select("#buttons").selectAll("text")
    .on("click", function () {
      var buttonID = d3.select(this).attr("id");
      svg.select("#buttons").selectAll("rect")
        .attr("stroke-width", "0");

      if (buttonID == "rep") {
        svg.select("#buttons").select("rect#rep")
          .attr("stroke", "grey")
          .attr("stroke-width","3");
        
        changedata(repdata[0],repdata[1],repdata[2],repdata[3])

      } else if (buttonID == "dem") {
        svg.select("#buttons").select("rect#dem")
          .attr("stroke", "grey")
          .attr("stroke-width","3");
        
        changedata(demdata[0],demdata[1],demdata[2],demdata[3])
      } else {
        svg.select("#buttons").select("rect#ind")
          .attr("stroke", "grey")
          .attr("stroke-width","3");
        
        changedata(inddata[0],inddata[1],inddata[2],inddata[3])
      }
  })

  svg.select("#buttons").selectAll("rect")
    .on("click", function () {
      var buttonID = d3.select(this).attr("id");
      svg.select("#buttons").selectAll("rect")
        .attr("stroke-width", "0");

      if (buttonID == "rep") {
        svg.select("#buttons").select("rect#rep")
          .attr("stroke", "grey")
          .attr("stroke-width","3");
        
        changedata(repdata[0],repdata[1],repdata[2],repdata[3])

      } else if (buttonID == "dem") {
        svg.select("#buttons").select("rect#dem")
          .attr("stroke", "grey")
          .attr("stroke-width","3");
        
        changedata(demdata[0],demdata[1],demdata[2],demdata[3])
      } else {
        svg.select("#buttons").select("rect#ind")
          .attr("stroke", "grey")
          .attr("stroke-width","3");
        
        changedata(inddata[0],inddata[1],inddata[2],inddata[3])
      }
  })

