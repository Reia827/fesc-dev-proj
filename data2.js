//this work is from class on August 6
//this code added to api-page

// 1 DOMContentLoaded --add event listener for this
// 2 Google chart library loaded
// 3 get data from api
// 4 data received from API
// 5 draw chart

function onDOMLoad(){
  console.log("I'm the first step, I should load Google library ")
  google.charts.load('current', {'packages':['corechart','bar']});
  google.charts.setOnLoadCallback(getData);
}

document.addEventListener("DOMContentLoaded", onDOMLoad)

function getData(){
  console.log("Getting data is the third step! ")

  let request = new XMLHttpRequest()
  let requestUrl = "http://api.eia.gov/series/?api_key=f13519008e6e796d59f32d03bcaa2d60&series_id=SEDS.REPRB.FL.A"
  request.open('GET', requestUrl, true)

  request.onload = function(){
    if(request.status !== 200){
      console.log("Something went wrong: ", request)
      return
    }

    let response = JSON.parse(request.response)
    console.log(response.series[0].data)
    drawProductionChart(response.series[0].data)
  }

  request.error = function(err){
    console.log("error is: ", err)
    return
  }
  request.send()
}

function drawProductionChart(freshData) {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Year');
  data.addColumn('number', 'Renewable Energy Production');
  data.addRows(freshData);

  var options = {'title':'Annual renewable energy production in Florida',
                 legend: { position: 'bottom' },
                  vAxis: {title: "Billion Btu"},
                 hAxis: {title: "Year"},
                 'colors': ['#f45341']
                };

  var chart = new google.visualization.ColumnChart(document.getElementById('chart-production'));
  chart.draw(data, options);
}
