//js code found online in GitHub, I wasn't able to figure it out on my own. I worked through this assignment and then tried to dissect the source code, but the js still isn't entirely clear to me. I used my own API key and updated color scheme.
//i worked with code from class but had trouble with one chart, so went back to this code

google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(getLineData);
google.charts.setOnLoadCallback(getColumnData);

// Draw Line Chart
function drawChartLine(freshData) {
  freshData.unshift(["Year", "Billion BTUs"])
  var data = google.visualization.arrayToDataTable(freshData)

  var options = {
    title: 'Total Consumption',
    colors:['#181a1b'],
    height: 500,
    curveType: 'none',
    tooltip: {trigger: 'selection'},
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_line'));
  chart.draw(data, options);
  }

function getLineData(){
  // Create a new request object
  let request = new XMLHttpRequest()
  // TODO: URL to contact goes here
  let requestUrl = "https://api.eia.gov/series/?api_key=f13519008e6e796d59f32d03bcaa2d60&series_id=SEDS.ESTCB.FL.A"
  // Open a connection
  request.open('GET', requestUrl, true)
  // Callback for when the request completes
  request.onload = function(){
    let theActualData = JSON.parse(request.response).series[0].data
    drawChartLine(theActualData)
  }
  // Callback for when there's an error
  request.error = function(err){
    console.log("error is: ", err)
  }
  // Send the request to the specified URL
  request.send()
}



// Draw Column Chart
function drawColumnChart(freshData) {
  freshData.unshift(["Year", "Billion BTUs"])
  var data = google.visualization.arrayToDataTable(freshData);

  var options = {
    title: 'Energy Production',
    colors:['#0b51c1'],
    legend: { position: 'bottom' },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('chart_col'));
  chart.draw(data, options);
}

function getColumnData(){
  // Create a new request object
  let request = new XMLHttpRequest()
  // TODO: URL to contact goes here
  let requestUrl = "https://api.eia.gov/series/?api_key=f13519008e6e796d59f32d03bcaa2d60&series_id=SEDS.REPRB.FL.A"
  // Open a connection
  request.open('GET', requestUrl, true)
  // Callback for when the request completes
  request.onload = function(){
    let theActualData = JSON.parse(request.response).series[0].data
    drawColumnChart(theActualData)
  }
  // Callback for when there's an error
  request.error = function(err){
    console.log("error is: ", err)
  }
  // Send the request to the specified URL
  request.send()
}
// Make charts responsive
$(window).resize(function(){
   drawChartLine();
   drawColumnChart();
 });
