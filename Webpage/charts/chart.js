google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);
var data_db;
var width;
var height;			
var ozone_stan;
var ozone_info;
var ozone_alarm;
var no2_stan;
var co2_stan;
var pm25_stan;
var pm10_stan;
var pm10_info;
var pm10_alarm;
var gau_green_yellow_ozone;
var gau_yellow_red_ozone;		
var gau_green_yellow_no2;
var gau_yellow_red_no2;
var gau_green_yellow_co2;
var gau_yellow_red_co2;	
var gau_green_yellow_pm25;
var gau_yellow_red_pm25;
var gau_green_yellow_pm10;
var gau_yellow_red_pm10;
var ozone_data=0;
var no2_data=0;
var co2_data=0;
var pm25_data=0;
var pm10_data=0;
var temp_data=0;
var download_db_chart1;
var download_db_chart2;
var download_db_standards1;
var download_db_standards2;
var data_ozone;
var data_no2;
var data_co2;
var data_pm25;
var data_pm10;
var data_wind;
var options_ozone;
var options_no2;
var options_co2;
var options_pm25;
var options_pm10;
var options_wind;
var chart_ozone;
var chart_no2;
var chart_co2;
var chart_pm25;
var chart_pm10;
var chart_wind;

if (window.innerWidth>1000)
{
	width=window.innerWidth*0.1;
}
else
{
	width=150;
}
height=width*0.6;
			
function download_db_chart(ids_ddc)
{ 
	var xhttp1; 
	xhttp1 = new XMLHttpRequest();
	xhttp1.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{
			download_db_chart1 = this.responseText;
			download_db_chart2=download_db_chart1.split("|");
			is_ozone	=download_db_chart2[0];
			ozone_data	=download_db_chart2[1];
			is_no2		=download_db_chart2[2];
			no2_data	=download_db_chart2[3];
			is_co2		=download_db_chart2[4];
			co2_data	=download_db_chart2[5];
			is_pm25		=download_db_chart2[6];
			pm25_data	=download_db_chart2[7];
			is_pm10		=download_db_chart2[8];
			pm10_data	=download_db_chart2[9];
			is_temp		=download_db_chart2[10];
			temp_data	=download_db_chart2[11];
			is_wind		=download_db_chart2[12];
			wind_data	=download_db_chart2[15];
		}
	};
				
	xhttp1.open("GET", "charts/gau_data.php?ids="+ids_ddc, true);
	xhttp1.send();
				
};
			
function download_db_standards()
{ 
	var xhttp2; 
	xhttp2 = new XMLHttpRequest();
	xhttp2.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{
			download_db_standards1 = this.responseText;
			download_db_standards2=download_db_standards1.split(".");
						
			ozone_stan 				= download_db_standards2[0];
			ozone_info				= download_db_standards2[1];
			ozone_alarm				= download_db_standards2[2];
			no2_stan 				= download_db_standards2[3];
			co2_stan				= download_db_standards2[4];
			pm25_stan 				= download_db_standards2[5];
			pm10_stan 				= download_db_standards2[6];
			pm10_info 				= download_db_standards2[7];
			pm10_alarm		 		= download_db_standards2[8];
			gau_green_yellow_ozone	= download_db_standards2[9];
			gau_yellow_red_ozone	= download_db_standards2[10];
			gau_green_yellow_no2	= download_db_standards2[11];
			gau_yellow_red_no2		= download_db_standards2[12];
			gau_green_yellow_co2	= download_db_standards2[13];
			gau_yellow_red_co2		= download_db_standards2[14];
			gau_green_yellow_pm25	= download_db_standards2[15];
			gau_yellow_red_pm25		= download_db_standards2[16];
			gau_green_yellow_pm10	= download_db_standards2[17];
			gau_yellow_red_pm10		= download_db_standards2[18];
						
		}
	};
	xhttp2.open("GET", "charts/gau_standards.php", true);
	xhttp2.send();
				
};
			
function drawChart()
{	
	download_db_standards();
	
	data_ozone = google.visualization.arrayToDataTable
	([
        ['Label', 'Value'],
        ['µg/m³', 0],
    ]);
		
	data_no2 = google.visualization.arrayToDataTable
	([
        ['Label', 'Value'],
        ['µg/m³', 0],
    ]);
		
	data_co2 = google.visualization.arrayToDataTable
	([
        ['Label', 'Value'],
        ['ppm', 0],
    ]);
		
	data_pm25 = google.visualization.arrayToDataTable
	([
        ['Label', 'Value'],
        ['µg/m³', 0],
    ]);
		
	data_pm10 = google.visualization.arrayToDataTable
	([
        ['Label', 'Value'],
        ['µg/m³', 0],
    ]);
		
	data_wind = google.visualization.arrayToDataTable
	([
        ['Label', 'Value'],
        ['km/h', 0],
    ]);
		 
    options_ozone = 
	{
		width: width, 
		height: height,
		minorTicks: 5
    };
		
	options_no2 = 
	{
		width: width, 
		height: height,
		minorTicks: 5
    };
	
	options_co2 = 
	{
		width: width, 
		height: height,
		minorTicks: 5
    };
		
	options_pm25 = 
	{
		width: width, 
		height: height,
		minorTicks: 5
    };
		
	options_pm10 = 
	{
		width: width, 
		height: height,
		minorTicks: 5
    };
		
	options_wind = 
	{
		width: width, 
		height: height,
		min: 0,
		max: 100,
		minorTicks: 5
    };

    chart_ozone = new google.visualization.Gauge(document.getElementById('gau_chart_ozone'));
	chart_no2 = new google.visualization.Gauge(document.getElementById('gau_chart_no2'));
	chart_co2 = new google.visualization.Gauge(document.getElementById('gau_chart_co2'));
	chart_pm25 = new google.visualization.Gauge(document.getElementById('gau_chart_pm25'));
	chart_pm10 = new google.visualization.Gauge(document.getElementById('gau_chart_pm10'));
	chart_wind = new google.visualization.Gauge(document.getElementById('gau_chart_wind'));
}

function set_data_chart(ids_sdc)
{
	download_db_chart(ids_sdc);
		
	setTimeout(function()
		{
			if(is_ozone==1)
			{
				data_ozone.setValue(0,1,ozone_data);
				ozone_pro=Math.round((ozone_data/ozone_stan)*100);
				document.getElementById("gau_chart_pro_ozone").innerHTML = ozone_pro+"%";
			}
			else
			{
				data_ozone.setValue(0,1,0);
				document.getElementById("gau_chart_pro_ozone").innerHTML = "N/A";
			}
				
			if (is_no2==1)
			{
				data_no2.setValue(0,1,no2_data);
				no2_pro=Math.round((no2_data/no2_stan)*100);
				document.getElementById("gau_chart_pro_no2").innerHTML = no2_pro+"%";
			}
			else
			{
				data_no2.setValue(0,1,0);
				document.getElementById("gau_chart_pro_no2").innerHTML = "N/A";
			}
				
			if(is_co2==1)
			{
				data_co2.setValue(0,1,co2_data);
				co2_pro=Math.round((co2_data/co2_stan)*100);
				document.getElementById("gau_chart_pro_co2").innerHTML = co2_pro+"%";
			}
			else
			{
				data_co2.setValue(0,1,0);
				document.getElementById("gau_chart_pro_co2").innerHTML = "N/A";
			}
				
			if (is_pm25==1)
			{
				data_pm25.setValue(0,1,pm25_data);
				pm25_pro=Math.round((pm25_data/pm25_stan)*100);
				document.getElementById("gau_chart_pro_pm25").innerHTML = pm25_pro+"%";
			}
			else
			{
				data_pm25.setValue(0,1,0);
				document.getElementById("gau_chart_pro_pm25").innerHTML = "N/A";
			}
				
			if(is_pm10==1)
			{
				data_pm10.setValue(0,1,pm10_data);
				pm10_pro=Math.round((pm10_data/pm10_stan)*100);
				document.getElementById("gau_chart_pro_pm10").innerHTML = pm10_pro+"%";
			}
			else
			{
				data_pm10.setValue(0,1,0);
				document.getElementById("gau_chart_pro_pm10").innerHTML = "N/A";
			}
				
			if(is_wind==1)
			{
				data_wind.setValue(0,1,wind_data);
				document.getElementById("gau_chart_pro_wind").innerHTML = wind_data+" km/h";
			}
			else
			{
				data_wind.setValue(0,1,0);
				document.getElementById("gau_chart_pro_wind").innerHTML = "N/A";
			}
			  
			options_ozone = 
			{
				width: width, 
				height: height,
				greenFrom: 0, 
				greenTo: gau_green_yellow_ozone,
				yellowFrom: gau_green_yellow_ozone, 
				yellowTo: gau_yellow_red_ozone,
				redFrom: gau_yellow_red_ozone, 
				redTo: 1.5*gau_yellow_red_ozone,
				min: 0, 
				max: 1.5*gau_yellow_red_ozone,
				minorTicks: 5
			};
				
			options_no2 = 
			{
				width: width, 
				height: height,
				greenFrom: 0, 
				greenTo: gau_green_yellow_no2,
				yellowFrom: gau_green_yellow_no2, 
				yellowTo: gau_yellow_red_no2,
				redFrom: gau_yellow_red_no2, 
				redTo: 1.5*gau_yellow_red_no2,
				min: 0, 
				max: 1.5*gau_yellow_red_no2,
				minorTicks: 5
			};
				
			options_co2 = 
			{
				width: width, 
				height: height,
				greenFrom: 0, 
				greenTo: gau_green_yellow_co2,
				yellowFrom: gau_green_yellow_co2, 
				yellowTo: gau_yellow_red_co2,
				redFrom: gau_yellow_red_co2, 
				redTo: 1.5*gau_yellow_red_co2,
				min: 0, 
				max: 1.5*gau_yellow_red_co2,
				minorTicks: 5
			};
			
			options_pm25 = 
			{
				width: width, 
				height: height,
				greenFrom: 0, 
				greenTo: gau_green_yellow_pm25,
				yellowFrom: gau_green_yellow_pm25, 
				yellowTo: gau_yellow_red_pm25,
				redFrom: gau_yellow_red_pm25, 
				redTo: 1.5*gau_yellow_red_pm25,
				min: 0, 
				max: 1.5*gau_yellow_red_pm25,
				minorTicks: 5
			};
				
			options_pm10 = 
			{
				width: width, 
				height: height,
				greenFrom: 0, 
				greenTo: gau_green_yellow_pm10,
				yellowFrom: gau_green_yellow_pm10, 
				yellowTo: gau_yellow_red_pm10,
				redFrom: gau_yellow_red_pm10, 
				redTo: 1.5*gau_yellow_red_pm10,
				min: 0, 
				max: 1.5*gau_yellow_red_pm10,
				minorTicks: 5
			};
			  
			chart_ozone.draw(data_ozone, options_ozone);
			chart_no2.draw(data_no2, options_no2);
			chart_co2.draw(data_co2, options_co2);
			chart_pm25.draw(data_pm25, options_pm25);
			chart_pm10.draw(data_pm10, options_pm10);
			chart_wind.draw(data_wind, options_wind);
						
			if(is_temp==1)
			{
				document.getElementById("gau_chart_temp").innerHTML = "TEMPERATURA: "+temp_data+" &deg;C";
			}
			else
			{
				document.getElementById("gau_chart_temp").innerHTML = "TEMPERATURA: BRAK POMIARU";
			}			
		},250);
}