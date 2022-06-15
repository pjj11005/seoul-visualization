function Tp1(){

  let svg = d3
  .select("#dis")
  .append("svg")
  .attr("height", 400)
  .attr("width", 0);

let tooltip = d3.select("body").append("div")
  .attr("class", "toolTip")
  .style("display", "none");

d3.csv("../data/disease.csv").then( function(data) {

  const allGroup = new Set(data.map(d => d.area))
    
  // add the options to the button
  d3.select("#disease")
    .selectAll('myOptions')
     .data(allGroup)
    .enter()
    .append('option')
    .text((d)=> d ) // text showed in the menu
    .attr("value", (d)=> d) // corresponding value returned by the button

let area = ['서울','경기','경남','부산','인천',
'경북','대구','충남','전북','전남',
'충북','대전', '광주','강원','울산',
'제주','세종','전체 평균'
];
let area2=['서울', '전체 평균'];

let sum=[2501051, 3345282,    964756,    952991,    768884,    
        711889,    641217,    587704,    521198,    490645,
        448730,    430441,    397400,    379630,    344254,
        179328,    63715,    807595
    ]; //18개
  let ss =[2501051, 807595]; //sum[0, 17]
    
  let yScale = d3.scaleLinear()
  .domain(0,3345282)
  .range(450,0);
  let yAxis = d3.axisRight(yScale);

  let svgWidth = 600;
  let svgHeight = 400;

let chartMargin = {
top: 30,
right: 30,
bottom: 30,
left: 30
};

// Define dimensions of the chart area
let chartWidth = svgWidth - chartMargin.left - chartMargin.right;
let chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

let chartGroup = svg.append("g")
.attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

svg = d3
.select("#dis")
.append("svg")
.attr("height", svgHeight)
.attr("width", svgWidth);
make(17);

function update(selectedGroup){
if(selectedGroup=="전체 평균"){
  console.log("평균 선택");

  ss.pop();
  ss.push(sum[17]);
  area2.pop();
  area2.push(area[17]);

  svg.remove();
  svg = d3
.select("#dis")
.append("svg")
.attr("height", svgHeight)
.attr("width", svgWidth);
make(17);
} 

if(selectedGroup=="경기"){
  ss.pop();
  ss.push(sum[1]);
  area2.pop();
  area2.push(area[1]);
  svg.remove();
  svg = d3
  .select("#dis")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);
make(1);
} 
if(selectedGroup=="경남"){
  ss.pop();
  ss.push(sum[2]);
  area2.pop();
  area2.push(area[2]);
  svg.remove();
  svg = d3.select("#dis").append("svg").attr("height", svgHeight).attr("width", svgWidth);
make(2);
} 
if(selectedGroup=="부산"){
  ss.pop();
  ss.push(sum[3]);
  area2.pop();
  area2.push(area[3]);
  svg.remove();
  svg = d3.select("#dis").append("svg").attr("height", svgHeight).attr("width", svgWidth);
make(3);
} 
if(selectedGroup=="인천"){
  ss.pop();
  ss.push(sum[4]);
  area2.pop();
  area2.push(area[4]);
  svg.remove();
  svg = d3.select("#dis").append("svg").attr("height", svgHeight).attr("width", svgWidth);
make(4);
} 

if(selectedGroup=="경북"){
  ss.pop();
  ss.push(sum[5]);
  area2.pop();
  area2.push(area[5]);
  svg.remove();
  svg = d3.select("#dis").append("svg").attr("height", svgHeight).attr("width", svgWidth);
make(5);
} 
if(selectedGroup=="대구"){
  ss.pop();
  ss.push(sum[6]);
  area2.pop();
  area2.push(area[6]);
  svg.remove();
  svg = d3.select("#dis").append("svg").attr("height", svgHeight).attr("width", svgWidth);
make(6);
} 
if(selectedGroup=="충남"){
  ss.pop();
  ss.push(sum[7]);
  area2.pop();
  area2.push(area[7]);
  svg.remove();
  svg = d3.select("#dis").append("svg").attr("height", svgHeight).attr("width", svgWidth);
make(7);
} 
if(selectedGroup=="전북"){
  ss.pop();
  ss.push(sum[8]);
  area2.pop();
  area2.push(area[8]);
  svg.remove();
  svg = d3.select("#dis").append("svg").attr("height", svgHeight).attr("width", svgWidth);
make(8);
} 
if(selectedGroup=="전남"){
  ss.pop();
  ss.push(sum[9]);
  area2.pop();
  area2.push(area[9]);
  svg.remove();
  svg = d3.select("#dis").append("svg").attr("height", svgHeight).attr("width", svgWidth);
make(9);
} 
if(selectedGroup=="충북"){
  ss.pop();
  ss.push(sum[10]);
  area2.pop();
  area2.push(area[10]);
  svg.remove();
  svg = d3.select("#dis").append("svg").attr("height", svgHeight).attr("width", svgWidth);
make(10);
}
if(selectedGroup=="대전"){
  ss.pop();
  ss.push(sum[11]);
  area2.pop();
  area2.push(area[11]);
  svg.remove();
  svg = d3.select("#dis").append("svg").attr("height", svgHeight).attr("width", svgWidth);
make(11);
}if(selectedGroup=="광주"){
  ss.pop();
  ss.push(sum[12]);
  area2.pop();
  area2.push(area[12]);
  svg.remove();
  svg = d3.select("#dis").append("svg").attr("height", svgHeight).attr("width", svgWidth);
make(12);

} if(selectedGroup=="강원"){
  ss.pop();
  ss.push(sum[13]);
  area2.pop();
  area2.push(area[13]);
  svg.remove();
  svg = d3.select("#dis").append("svg").attr("height", svgHeight).attr("width", svgWidth);
make(13);
} if(selectedGroup=="울산"){
  ss.pop();
  ss.push(sum[14]);
  area2.pop();
  area2.push(area[14]);
  svg.remove();
  svg = d3.select("#dis").append("svg").attr("height", svgHeight).attr("width", svgWidth);
make(14);
} if(selectedGroup=="제주"){
  ss.pop();
  ss.push(sum[15]);
  area2.pop();
  area2.push(area[15]);
  svg.remove();
  svg = d3.select("#dis").append("svg").attr("height", svgHeight).attr("width", svgWidth);
make(15);
} if(selectedGroup=="세종"){
  ss.pop();
  ss.push(sum[16]);
  area2.pop();
  area2.push(area[16]);
  svg.remove();
  svg = d3.select("#dis").append("svg").attr("height", svgHeight).attr("width", svgWidth);
make(16);
} 
}

function make(i){
  chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

  yScale = d3.scaleLinear().domain([0, 3500000]).range([362,10]); //yscale
  yAxis = d3.axisRight(yScale);
svg.append("g")
.attr("class","y-axis")
.call(yAxis);

      chartGroup.selectAll("bar")
      .data(ss)
      .join(
          (enter) => enter.append("rect"),
          (update) => update.attr("class", "updated"),
          (exit)=>exit.remove()
      )
      .attr("x", (d, i) => 35+ i * 50)
      .attr("y", d => chartHeight - (d) / 10000)
      .attr("width", 35)
      .attr("height", d =>d / 10000)
      .attr("fill","skyblue")
      .on("mouseover", function() { tooltip.style("display", null); })
      .on("mouseout",  function() { tooltip.style("display", "none"); })
      .on("mousemove", function(e, d) {
          tooltip.style("left", (e.pageX + 10) + "px");
          tooltip.style("top", (e.pageY - 15) + "px");
          tooltip.text(d); 
        }) ;
    chartGroup.selectAll("text") // x label
    .data(ss)
    .enter()
    .append("text")
    .attr("x", (d, i) => 35 + i * 40 )
    .attr("y", d => chartHeight +25 ) 
    .attr("font-size", "14px")
    .text((d,i)=> area2[i]);
  }

  d3.select("#disease").on("change", function(event,d) {
    const selectedOption = d3.select(this).property("value")
    update(selectedOption)

})
})
}
Tp1();

function Tp1212(){
  let tooltip = d3.select("body").append("div")
  .attr("class", "toolTip")
  .style("display", "none");

    //그래프 만들기 공통
    let svgWidth = 900;
    let svgHeight = 300;

// Define the chart's margins as an object
let chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
let chartWidth = svgWidth - chartMargin.left - chartMargin.right;
let chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

let barSpacing = 10;

   let svg = d3
    .select("body")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);

    let chartGroup = svg.append("g")
    .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

    let yScale = d3.scaleLinear().domain([0,1000]).range([240,-5]);
    let yAxis = d3.axisRight(yScale);

d3.csv("../data/pollution.csv").then( function(data) {

  const allGroup = ["이산화탄소","미세먼지","초미세먼지"]

  d3.select("#pol")
  .selectAll('myOptions')
     .data(allGroup)
  .enter()
    .append('option')
  .text((d)=> d ) // text showed in the menu
  .attr("value", (d)=> d) // corresponding value returned by the button



  svg = d3
  .select("#sel_pol")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);
  makeCO();

function update(selectedGroup){
  console.log("click");
  if(selectedGroup=="미세먼지"){
      console.log("미세먼지 선택");
      svg.remove();
      svg = d3
.select("#sel_pol")
.append("svg")
.attr("height", svgHeight)
.attr("width", svgWidth);
makeFine();
  }

      if(selectedGroup=="초미세먼지"){
          console.log("초미세먼지 선택");
          svg.remove();
          svg = d3
    .select("#sel_pol")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);
          makeUltra();
      } 

  if(selectedGroup=="이산화탄소"){
      console.log("이산화탄소 선택");
      svg.remove();
      svg = d3
.select("#sel_pol")
.append("svg")
.attr("height", svgHeight)
.attr("width", svgWidth);
makeCO();
  }
}
  
    
  function makeCO(){
    chartGroup = svg.append("g")
    .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);
// Append a group to the SVG area and shift ('translate') it to the right and down to adhere

d3.csv("../data/pol_co.csv").then(function(sumData) {
  // Cast the hours value to a number for each piece of sumData
  sumData.forEach(function(data) {
    data.CO = +data.CO;}
  );

  // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
  let barWidth = (chartWidth - (barSpacing * (sumData.length - 1))) / sumData.length;
  const xScale = d3
  .scaleBand()
  .domain(sumData.map((v,i)=> i))
  .range([0,300]).padding(0.4);
  const xAxis = d3.axisBottom(xScale).ticks(sumData.length);
  //svg.select('.x-axis').style("transform", "translateY(150px)").call(xAxis);
  yScale = d3.scaleLinear().domain([0,80000]).range([265,15]); //0000
  yAxis = d3.axisRight(yScale);
  svg.append("g")
  .attr("class","y-axis")
  //text((d)=>d.CO)
  .call(yAxis);

  // Create code to build the bar chart using the tvData.
  chartGroup.selectAll(".bar")
    .data(sumData)
    .enter()
    .append("rect")
    .classed("bar", true)
    .attr("width", 40)
    .attr("height", d => d.CO / 315)
    .attr("x", (d, i) => 30+ i * (40 + barSpacing))
    .attr("y", d => chartHeight - d.CO / 315)
    .attr("fill","skyblue")
    .on("mouseover", function() { tooltip.style("display", null); })
    .on("mouseout",  function() { tooltip.style("display", "none"); })
    .on("mousemove", function(e, d) {
        tooltip.style("left", (e.pageX + 10) + "px");
        tooltip.style("top", (e.pageY - 15) + "px");
        tooltip.text(d.CO)            });


    chartGroup.selectAll("text")
    .data(sumData)
    .enter()
    .append("text")
    .attr("x", (d, i) => 32+ i * (40 + 10) )
    .attr("y", 260) 
    .attr("font-size", "13px")
    .text((d)=> d.area);

}).catch(function(error) {
  console.log(error);
});

}

        function makeFine(){
          chartGroup = svg.append("g")
    .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);
// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
let a=[];
        // Load data from hours-of-tv-watched.csv
        d3.csv("../data/pol_fine.csv").then(function(sumData) {
          // Cast the hours value to a number for each piece of sumData
          sumData.forEach(function(data) {
            data.fine_dust = +data.fine_dust;
            //data.area=+data.area
          });
          console.log(a);
          let barWidth = (chartWidth - (barSpacing * (sumData.length - 1))) / sumData.length;
          yScale = d3.scaleLinear().domain([0,18000]).range([265,30]); 
          yAxis = d3.axisRight(yScale);
        svg.append("g")
        .attr("class","y-axis")
        .call(yAxis);
          chartGroup.selectAll(".bar")
          .data(sumData)
          .enter()
          .append("rect")
          .classed("bar", true)
          .attr("width", 40)
          .attr("height", d => d.fine_dust / 75)
          .attr("x", (d, i) => 30 + i * (40 + barSpacing))
          .attr("y", d => chartHeight - d.fine_dust / 75)
          .attr("fill","skyblue")
          .on("mouseover", function() { tooltip.style("display", null); })
          .on("mouseout",  function() { tooltip.style("display", "none"); })
          .on("mousemove", function(e, d) {
          tooltip.style("left", (e.pageX + 10) + "px");
          tooltip.style("top", (e.pageY - 15) + "px");
          tooltip.text(d.fine_dust)           
         });


          chartGroup.selectAll("text")
          .data(sumData)
          .enter()
          .append("text")
          .attr("x", (d, i) => 32 + i * (40 + barSpacing) )
          .attr("y", 260 ) 
          .attr("font-size", "13px")
          .text((d)=> d.area);
        }).catch(function(error) {
          console.log(error);
        });
        
                }

        function makeUltra(){             
  chartGroup = svg.append("g")
.attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

             d3.csv("../data/pol_ultra.csv").then(function(sumData) {  
              sumData.forEach(function(data) {
               data.ultrafine_dust = +data.ultrafine_dust;
                });
                  let barWidth = (chartWidth - (barSpacing * (sumData.length - 1))) / sumData.length;
                  yScale = d3.scaleLinear().domain([0,5000]).range([265,19]); 
                  yAxis = d3.axisRight(yScale);
                  svg.append("g")
                  .attr("class","y-axis")
                  .call(yAxis);

                  chartGroup.selectAll(".bar")
                  .data(sumData)
                  .enter()
                  .append("rect")
                  .classed("bar", true)
                  .attr("width", 40)
                  .attr("height", d => d.ultrafine_dust / 20)
                  .attr("x", (d, i) => 30+i * (40 + barSpacing))
                  .attr("y", d => chartHeight - d.ultrafine_dust / 20)
                  .attr("fill","skyblue")
                  .on("mouseover", function() { tooltip.style("display", null); })
                  .on("mouseout",  function() { tooltip.style("display", "none"); })
                  .on("mousemove", function(e, d) {
                      tooltip.style("left", (e.pageX + 10) + "px");
                      tooltip.style("top", (e.pageY - 15) + "px");
                      tooltip.text(d.ultrafine_dust)            });

                
                  chartGroup.selectAll("text")
                  .data(sumData)
                  .enter()
                  .append("text")
                  .attr("x", (d, i) =>32 + i * (40 + barSpacing) )
                  .attr("y", 260 ) 
                  .attr("font-size", "13px")
                  .text((d)=> d.area);
                }).catch(function(error) {
                  console.log(error);
                });
}
d3.select("#pol").on("change", function(event,d) {
  const selectedOption = d3.select(this).property("value")
  update(selectedOption)

})
           
}) 
}
Tp1212();


function Seoul(){

const margin = {
  top: 20,
  bottom: 20,
  left: 30,
  right: 20
};
const width = 800 - margin.left - margin.right;
const height = 350 - margin.top - margin.bottom;

const svg = d3.select("#dust")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);


const svg2 = d3.select("#region")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);


//Read the data
d3.csv("../data/seoul.csv").then( function(data) {

    // List of groups (here I have one group per column)
    const allGroup = ["미세먼지","초미세먼지"]
  
    // add the options to the button
    d3.select("#selectButton2")
      .selectAll('myOptions')
         .data(allGroup)
      .enter()
        .append('option')
      .text((d)=> d ) // text showed in the menu
      .attr("value", (d)=> d) // corresponding value returned by the button

    // A color scale: one color for each group
    const myColor = d3.scaleOrdinal()
      .domain(allGroup)
      .range(d3.schemeSet2);

    const x = d3.scaleBand()
        .range([ 0, width ])
    const xAxis2 = svg.append("g")
      .attr("transform", `translate(0,${height})`)
      
      // Initialize the Y axis
    const y = d3.scaleLinear()
      .range([ height, 0]);
    const yAxis2 = svg.append("g")
      .attr("class", "myYaxis")

    x.domain(data.map(d => d.연도))
    xAxis2.transition().duration(1000).call(d3.axisBottom(x));
            
    y.domain([0, d3.max(data, function(d) { return +d.수치; })])
    yAxis2.transition().duration(1000).call(d3.axisLeft(y));
    // Initialize line with first group of the list
    const line = svg
    .append('g')
    .append("path")
      .datum(data.filter(function(d){return d.종류=="미세먼지"}))
      .attr("d", d3.line()
        .x(function(d) { return x(d.연도)+40 })
        .y(function(d) { return y(+d.수치) })
      )
      .attr("stroke", function(d){ return myColor("미세먼지") })
      .style("stroke-width", 4)
      .style("fill", "none")
      

    const allGroup2 = new Set(data.map(d => d.연도))
    
      // add the options to the button
      d3.select("#selectButton")
        .selectAll('myOptions')
         .data(allGroup2)
        .enter()
        .append('option')
        .text((d)=> d ) // text showed in the menu
        .attr("value", (d)=> d) // corresponding value returned by the button
  
      // A color scale: one color for each group
      
      const x2 = d3.scaleBand()
        .range([ 0, width ])
        .padding(0.2);
      const xAxis = svg2.append("g")
        .attr("transform", `translate(0,${height})`)
      
      // Initialize the Y axis
      const y2 = d3.scaleLinear()
        .range([ height, 0]);
      const yAxis = svg2.append("g")
        .attr("class", "myYaxis")
  
      const dataFilter1 = data.filter(function(d){return d.연도=="2012"})
  
       
        x2.domain(dataFilter1.map(d => d.지역))
        xAxis.call(d3.axisBottom(x2));
       
      // Add Y axis
        y2.domain([0, d3.max(dataFilter1, function(d) { return +d.총미세먼지; })])
        yAxis.transition().duration(1000).call(d3.axisLeft(y2));
        // Create new data with the selection?
        
      var u = svg2.selectAll("rect")
      .data(dataFilter1)
  
      u
        .enter()
        .append("rect") // Add a new rect for each new elements
        .merge(u) // get the already existing elements as well
        .transition() // and apply changes to all of them
        .duration(1000)
          .attr("x", function(d) { return x2(d.지역); })
          .attr("y", function(d) { return y2(d.총미세먼지); })
          .attr("width", x2.bandwidth())
          .attr("height", function(d) { return height - y2(d.총미세먼지); })
          .attr("fill", "blue")
          
      // If less group in the new dataset, I delete the ones not in use anymore
      u
        .exit()
        .remove()

      const x3 = d3.scaleBand()
        .range([ 0, width ])
        .padding(0.7);
      const xAxis3 = svg.append("g")
      .attr("transform", `translate(0,${height})`)
      
      // Initialize the Y axis
      const y3 = d3.scaleLinear()
      .range([ height, 0]);
      const yAxis3 = svg.append("g")
      .attr("class", "myYaxis")

    // A function that update the chart
    function update(selectedGroup) {

    const dataFilter2 = data.filter(function(d){return d.종류==selectedGroup})
    const dataFilter3 = data.filter(function(d){return d.연도==selectedGroup})

    x.domain(dataFilter2.map(d => d.연도))
    xAxis2.call(d3.axisBottom(x));
        
    y.domain([0, d3.max(dataFilter2, function(d) { return +d.수치; })])
    yAxis2.transition().duration(1000).call(d3.axisLeft(y));
    
    line
      .datum(dataFilter2)
      .transition()
      .duration(100)
      .attr("d", d3.line()
        .x(function(d) { return x(d.연도)+40 })
        .y(function(d) { return y(+d.수치) })
      )
      .attr("stroke", function(d){ return myColor(selectedGroup) })   
      

    x3.domain(dataFilter3.map(d => d.연도))
    .padding(0.7)
    xAxis3.transition().duration(1000).call(d3.axisBottom(x3));
      
    y3.domain([0, d3.max(dataFilter3, function(d) { return +d.서울시_총미세먼지; })])
    yAxis3.transition().duration(1000).call(d3.axisLeft(y3));
      
      var u = svg.selectAll("rect")
    .data(dataFilter3)

    u
      .enter()
      .append("rect") // Add a new rect for each new elements
      .merge(u) // get the already existing elements as well
      .transition() // and apply changes to all of them
      .duration(1000)
        .attr("x", function(d) { return x3(d.연도); })
        .attr("y", function(d) { return y3(d.서울시_총미세먼지); })
        .attr("width", x3.bandwidth())
        .attr("height", function(d) { return height - y3(d.서울시_총미세먼지); })
        .attr("fill", "red")

    // If less group in the new dataset, I delete the ones not in use anymore
    u
      .exit()
      .remove()
    
    }

    function update2(selectedGroup) {

      const dataFilter3 = data.filter(function(d){return d.연도==selectedGroup})
  
       
        x2.domain(dataFilter3.map(d => d.지역))
        xAxis.call(d3.axisBottom(x2));
        
        y2.domain([0, d3.max(dataFilter3, function(d) { return +d.총미세먼지; })])
        yAxis.transition().duration(1000).call(d3.axisLeft(y2));
        // Create new data with the selection?
        
        var u = svg2.selectAll("rect")
      .data(dataFilter3)
  
      u
        .enter()
        .append("rect") // Add a new rect for each new elements
        .merge(u) // get the already existing elements as well
        .transition() // and apply changes to all of them
        .duration(1000)
          .attr("x", function(d) { return x2(d.지역); })
          .attr("y", function(d) { return y2(d.총미세먼지); })
          .attr("width", x2.bandwidth())
          .attr("height", function(d) { return height - y2(d.총미세먼지); })
          .attr("fill", "blue")
  
      // If less group in the new dataset, I delete the ones not in use anymore
      u
        .exit()
        .remove()
      
     }

     
    // When the button is changed, run the updateChart function
    d3.select("#selectButton2").on("change", function(event,d) {
        const selectedOption = d3.select(this).property("value")
        update(selectedOption)

    })

    d3.select("#selectButton").on("change", function(event,d) {
      const selectedOption2 = d3.select(this).property("value")
      update2(selectedOption2)
      update(selectedOption2)
  })

})
}
Seoul();   