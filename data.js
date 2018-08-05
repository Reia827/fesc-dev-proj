google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(getLineData);
google.charts.setOnLoadCallback(getColumnData);

// Draw Line Chart
function drawChartLine(freshData) {
  freshData.unshift(["Year", "Billion BTUs"])
  var data = google.visualization.arrayToDataTable(freshData)

  var options = {
    title: 'Total Consumption',
    colors:['#ff9900'],
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
  let requestUrl = "http://api.eia.gov/series/?api_key=f13519008e6e796d59f32d03bcaa2d60&series_id=SEDS.ESTCB.FL.A"
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
    colors:['#ff9900'],
    legend: { position: 'bottom' },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('chart_col'));
  chart.draw(data, options);
}

function getColumnData(){
  // Create a new request object
  let request = new XMLHttpRequest()
  // TODO: URL to contact goes here
  let requestUrl = "http://api.eia.gov/series/?api_key=f13519008e6e796d59f32d03bcaa2d60&series_id=SEDS.REPRB.FL.A"
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


/*// Instantiate and draw the chart.
var chart = new google.visualization.PieChart(document.getElementById('container'));
chart.draw(data, options);

// Set chart options
var options = {'title':'Browser market shares at a specific website, 2014',
   'width':550,
   'height':400};

   // Define the chart to be drawn.
var data = new google.visualization.DataTable();
data.addColumn('string', 'Year');
data.addColumn('number', 'BTUs');
data.addRows([
    ['2016',804283],
    ['2015',803865],
    ['2014',771379],
    ['2013',757189],
    ['2012',752941],
    ['2011',768009],
    ['2010',788887],
    ['2009',766848],
    ['2008',771702],
    ['2007',788461],
    ['2006',778685],
    ['2005',767622],
    ['2004',745810],
    ['2003',741696],
    ['2002',718136],
    ['2001',684966],
    ['2000',668216],
    ['1999',638966],
    ['1998',639254],
    ['1997',597240],
    ['1996',586291],
    ['1995',571483],
    ['1994',544365],
    ['1993',521176],
    ['1992',501598],
    ['1991',499299],
    ['1990',489741],
    ['1989',472473],
    ['1988',444382],
    ['1987',417862],
    ['1986',398095],
    ['1985',379307],
    ['1984',353246],
    ['1983',329216],
    ['1982',315744],
    ['1981',317921],
    ['1980',309694],
    ['1979',295551],
    ['1978',289031],
    ['1977',270767],
    ['1976',252408],
    ['1975',242096],
    ['1974',235482],
    ['1973',237104],
    ['1972',209665],
    ['1971',188564],
    ['1970',171346],
    ['1969',153032],
    ['1968',135509],
    ['1967',119314],
    ['1966',108610],
    ['1965',95878],
    ['1964',87016],
    ['1963',78258],
    ['1962',71216],
    ['1961',62705],
    ['1960',57344],
]);

// Instantiate and draw the chart.
var chart = new google.visualization.PieChart(document.getElementById('container'));
chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawChart); */

/*google.charts.load('current', {'packages':['corechart', 'timeline']});

google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Score Range');
  data.addColumn('number', 'Games');
  data.addRows([
    ['0-100', 2],
    ['100-200', 5],
    ['200-300', 3]
  ]);

  var options = {'title':'Bowling Score Incidences',
                 'width':400,
                 'height':300};

  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

function drawSemestersChart() {
  var data = new google.visualization.arrayToDataTable(
    [
      ['Semester', 'Credits', { role: 'style' }],
      ['Fall 2018', 0, '#114789'],
      ['Spring 2019', 0, '#8faeff'],
      ['Fall 2019', 1, '#114789'],
      ['Spring 2020', 1, '#8faeff'],
      ['Fall 2020', 3, '#114789'],
      ['Spring 2021', 3, '#8faeff'],
      ['Fall 2021', 3, '#114789'],
      ['Spring 2022', 3, '#8faeff']
    ]
  );
  var options = {'title':'Each Dollar Donated Goes To',
                 'width':400,
                 'height':300
                };

  var chart = new google.visualization.BarChart(document.getElementById('semesters'));
  chart.draw(data, options);
}

function drawAllocationChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Expense');
  data.addColumn('number', 'Cents');
  data.addRows([
    ['Administrative Costs', 4],
    ['Fundraising', 16],
    ['Youth Programs', 36],
    ['Adult Programs', 44]
  ]);

  var options = {'title':'Each Dollar Donated Goes To',
                 'width':400,
                 'height':300,
                 'pieHole': 0.5,
                  'colors': ['#8AD1C2', '#9F8AD1', '#D18A99', '#BCD18A']
                };

  var chart = new google.visualization.PieChart(document.getElementById('allocation'));
  chart.draw(data, options);
}

function drawTimelineChart(){
  var container = document.getElementById('timeline');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();

  dataTable.addColumn({ type: 'string', id: 'Phase' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows([
    [ 'Complete General Education Requirements', new Date(2018, 08, 01), new Date(2019, 4, 1)],
    [ 'Choose Major', new Date(2019, 5, 1),  new Date(2019, 7, 1)],
    [ 'One Major Course Per Semester', new Date(2019, 8, 01),  new Date(2020, 04, 01)],
    [ 'Three Major Courses Per Semester', new Date(2020, 8, 1),  new Date(2022, 4, 1)]
  ]);

  chart.draw(dataTable);
}


window.onload = function(){
  drawTimelineChart()
  // Event listeners for each button: clear all charts, redraw requested one
  document.getElementById('semester-trigger').addEventListener('click', function(){
      document.getElementById('semesters').innerHTML = ""
      document.getElementById('chart_div').innerHTML = ""
      document.getElementById('allocation').innerHTML = ""
      drawSemestersChart();
  })

  document.getElementById('bowling-trigger').addEventListener('click', function(){
    document.getElementById('semesters').innerHTML = ""
    document.getElementById('chart_div').innerHTML = ""
    document.getElementById('allocation').innerHTML = ""
    drawChart()
  })

  document.getElementById('allocation-trigger').addEventListener('click', function(){
    document.getElementById('semesters').innerHTML = ""
    document.getElementById('chart_div').innerHTML = ""
    document.getElementById('allocation').innerHTML = ""
    drawAllocationChart();
  })
} */
