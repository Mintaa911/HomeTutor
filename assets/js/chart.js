google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {

var data = google.visualization.arrayToDataTable([
    ['Sex', 'Count Student'],
    ['Male',     11],
    ['Female',      2],
    
]);

var options = {
    title: 'Student data by sex'
};

var chart = new google.visualization.PieChart(document.getElementById('piechart1'));
chart.draw(data, options);
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {

var data = google.visualization.arrayToDataTable([
    ['Sex', 'Count Student'],
    ['Male',     11],
    ['Female',      2],
    
]);

var options = {
    title: 'Student data by sex'
};

var chart = new google.visualization.PieChart(document.getElementById('piechart2'));
chart.draw(data, options);
}

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(barchart1);
function barchart1() {
      var data = google.visualization.arrayToDataTable([
        ['Level', 'Student'],
        ['1', 50],
        ['2', 10],
        ['3', 5],
        ['4', 10],
        ['5', 8],
        ['6', 20],
        ['7', 9],
        ['8', 30]]);

      var options = {
        title: 'Number of students in each grade',
        vAxis: {
          title: 'Level of class',
          minValue: 1,
          textStyle: {
            bold: true,
            fontSize: 12,
            color: '#4d4d4d'
          },
         
        },
        hAxis: {
          title: 'Number of student',
          textStyle: {
            fontSize: 14,
            bold: true,
            color: '#848484'
          },
         
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart_bar1'));
      chart.draw(data, options);
    }



google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(barchart2);

function barchart2() {
      var data = google.visualization.arrayToDataTable([
        ['Level', 'Student'],
        ['1', 50],
        ['2', 10],
        ['3', 5],
        ['4', 10],
        ['5', 8],
        ['6', 20],
        ['7', 9],
        ['8', 30]]);

      var options = {
        title: 'Number of students in each grade',
        vAxis: {
          title: 'Level of class',
          minValue: 1,
          textStyle: {
            bold: true,
            fontSize: 12,
            color: '#4d4d4d'
          },
         
        },
        hAxis: {
          title: 'Number of student',
          textStyle: {
            fontSize: 14,
            bold: true,
            color: '#848484'
          },
         
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart_bar2'));
      chart.draw(data, options);
    }