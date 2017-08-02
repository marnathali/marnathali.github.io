      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);
      google.charts.setOnLoadCallback(myBarChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Personas', 10],
          ['Fundaciones', 40],
          ['Corporaciones', 12]
          
        ]);

        // Set chart options
        var options = {'title':'Tipos de usuarios registrados por mes',
                       'width':400,
                       'height':250};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('registrados'));
        chart.draw(data, options);
      }


function myBarChart() {

        // Create the data table for Anthony's pizza.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Personas', 2],
          ['Fundaciones', 10],
          ['Corporaciones', 5]
         
        ]);

        // Set options for Anthony's pie chart.
        var options = {title:'Usuarios activos en este momento ',
                       width:400,
                       height:250};

        // Instantiate and draw the chart for Anthony's pizza.
        var chart = new google.visualization.BarChart(document.getElementById('activos'));
        chart.draw(data, options);
      }