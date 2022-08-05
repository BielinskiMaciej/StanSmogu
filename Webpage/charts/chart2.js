google.charts.load('current', {'packages':['gauge','corechart'],'callback': user_drawChart});
			
var user_data_db_1;
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
var user_is_ozone;
var user_is_no2;
var user_is_co2;
var user_is_pm25;
var user_is_pm10;
var user_is_temp;
var user_is_wind;
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
var user_ozone_data_1=0;
var user_no2_data_1=0;
var user_co2_data_1=0;
var user_pm25_data_1=0;
var user_pm10_data_1=0;
var user_temp_data_1=0;		
var user_data_db_1;
var stand_db;		
var user_data_1;
var data4;
var user_data_ozone_1;
var user_data_no2_1;
var user_data_co2_1;
var user_data_pm25_1;
var user_data_pm10_1;
var user_data_wind_1;		
var options_ozone;
var options_no2;
var options_co2;
var options_pm25;
var options_pm10;
var options_wind;	
var user_chart_ozone_1;
var user_chart_no2_1;
var user_chart_co2_1;
var user_chart_pm25_1;
var user_chart_pm10_1;
var user_chart_wind_1;
var user_data_db_live;
var user_ozone_data_live=0;
var user_no2_data_live=0;
var user_co2_data_live=0;
var user_pm25_data_live=0;
var user_pm10_data_live=0;
var user_temp_data_live=0;
var user_data_db_live;
var user_data_live;
var user_data_ozone_live;
var user_data_no2_live;
var user_data_co2_live;
var user_data_pm25_live;
var user_data_pm10_live;
var user_data_wind_live;
var user_chart_ozone_live;
var user_chart_no2_live;
var user_chart_co2_live;
var user_chart_pm25_live;
var user_chart_pm10_live;
var user_chart_wind_live;
var user_data_db_24;
var user_ozone_data_24=0;
var user_no2_data_24=0;
var user_co2_data_24=0;
var user_pm25_data_24=0;
var user_pm10_data_24=0;
var user_temp_data_24=0;
var user_data_db_24;
var user_data_24;
var user_data_ozone_24;
var user_data_no2_24;
var user_data_co2_24;
var user_data_pm25_24;
var user_data_pm10_24;
var user_data_wind_24;
var user_chart_ozone_24;
var user_chart_no2_24;
var user_chart_co2_24;
var user_chart_pm25_24;
var user_chart_pm10_24;
var user_chart_wind_24;
var none_user=false;
var date;

if (window.innerWidth>1000)
{
	width=window.innerWidth*0.1;
}
else
{
	width=150;
}
height=width*0.6;

function download_db_chart_user_live(ids)
{ 
	var xhttp8; 
	xhttp8 = new XMLHttpRequest();
	xhttp8.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{
			download_db_chart_user_live1 = this.responseText;
			download_db_chart_user_live2=download_db_chart_user_live1.split("|");
			user_ozone_data_live	=download_db_chart_user_live2[1];
			user_no2_data_live		=download_db_chart_user_live2[3];
			user_co2_data_live		=download_db_chart_user_live2[5];
			user_pm25_data_live		=download_db_chart_user_live2[7];
			user_pm10_data_live		=download_db_chart_user_live2[9];
			user_temp_data_live		=download_db_chart_user_live2[11];
			user_wind_data_live		=download_db_chart_user_live2[15];
		}
	};		
	xhttp8.open("GET", "charts/gau_data_live.php?ids="+ids, true);
	xhttp8.send();	
};
			
function download_db_chart_user_1(ids)
{ 
	var xhttp9; 
	xhttp9 = new XMLHttpRequest();
	xhttp9.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{
			download_db_chart_user_1_1 = this.responseText;
			download_db_chart_user_1_2=download_db_chart_user_1_1.split("|");
			user_is_ozone		=download_db_chart_user_1_2[0];
			user_ozone_data_1	=download_db_chart_user_1_2[1];
			user_is_no2			=download_db_chart_user_1_2[2];
			user_no2_data_1		=download_db_chart_user_1_2[3];
			user_is_co2			=download_db_chart_user_1_2[4];
			user_co2_data_1		=download_db_chart_user_1_2[5];
			user_is_pm25		=download_db_chart_user_1_2[6];
			user_pm25_data_1	=download_db_chart_user_1_2[7];
			user_is_pm10		=download_db_chart_user_1_2[8];
			user_pm10_data_1	=download_db_chart_user_1_2[9];
			user_is_temp		=download_db_chart_user_1_2[10];
			user_is_wind		=download_db_chart_user_1_2[12];
			user_temp_data_1	=download_db_chart_user_1_2[11];
			user_wind_data_1	=download_db_chart_user_1_2[15];
		}
	};
	xhttp9.open("GET", "charts/gau_data.php?ids="+ids, true);
	xhttp9.send();	
};
			
function download_db_chart_user_24(ids)
{
	var xhttp10; 
	xhttp10 = new XMLHttpRequest();
	xhttp10.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{
			download_db_chart_user_24_1 = this.responseText;
			download_db_chart_user_24_2=download_db_chart_user_24_1.split("|");
			user_ozone_data_24	=download_db_chart_user_24_2[1];
			user_no2_data_24	=download_db_chart_user_24_2[3];
			user_co2_data_24	=download_db_chart_user_24_2[5];
			user_pm25_data_24	=download_db_chart_user_24_2[7];
			user_pm10_data_24	=download_db_chart_user_24_2[9];
			user_temp_data_24	=download_db_chart_user_24_2[11];
			user_wind_data_24	=download_db_chart_user_24_2[15];
		}
	};		
	xhttp10.open("GET", "charts/gau_data_24.php?ids="+ids, true);
	xhttp10.send();	
};
			
function download_db_chart_user_24_sel(ids,date)
{
	var xhttp11; 
	xhttp11 = new XMLHttpRequest();
	xhttp11.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{
			download_db_chart_user_24_sel1 = this.responseText;
			Empty_user_gau=download_db_chart_user_24_sel1[0]+download_db_chart_user_24_sel1[1]+download_db_chart_user_24_sel1[2]+download_db_chart_user_24_sel1[3];			
			if(Empty_user_gau=="None")
			{
				none_user=true;
				user_ozone_data_24	=0;
				user_no2_data_24	=0;
				user_co2_data_24	=0;
				user_pm25_data_24	=0;
				user_pm10_data_24	=0;
				user_temp_data_24	=0;
				user_wind_data_24	=0;
				document.getElementById("label_gau_24").innerHTML = "Brak danych z tego dnia";	
			}
			else
			{
				download_db_chart_user_24_sel2=download_db_chart_user_24_sel1.split("|");
				user_ozone_data_24	=download_db_chart_user_24_sel2[1];
				user_no2_data_24	=download_db_chart_user_24_sel2[3];
				user_co2_data_24	=download_db_chart_user_24_sel2[5];
				user_pm25_data_24	=download_db_chart_user_24_sel2[7];
				user_pm10_data_24	=download_db_chart_user_24_sel2[9];;
				user_temp_data_24	=download_db_chart_user_24_sel2[11];
				user_wind_data_24	=download_db_chart_user_24_sel2[15];
				none_user=false;
			}
		}
	};	
	xhttp11.open("GET", "charts/gau_data_sel_24.php?ids="+ids+"&date="+date, true);
	xhttp11.send();
};
			
function download_db_standards()
{ 
	var xhttp12; 
	xhttp12 = new XMLHttpRequest();
	xhttp12.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{
			download_db_standards1 = this.responseText;
			download_db_standards2=download_db_standards1.split(".");
			ozone_stan 			=download_db_standards2 [0];
			ozone_info			=download_db_standards2 [1];
			ozone_alarm			=download_db_standards2 [2];
			no2_stan 			=download_db_standards2 [3];
			co2_stan			=download_db_standards2 [4];
			pm25_stan 			=download_db_standards2 [5];
			pm10_stan 			=download_db_standards2 [6];
			pm10_info 			=download_db_standards2 [7];
			pm10_alarm		 	=download_db_standards2 [8];
			gau_green_yellow_ozone	=download_db_standards2[9];
			gau_yellow_red_ozone	=download_db_standards2[10];
			gau_green_yellow_no2	=download_db_standards2[11];
			gau_yellow_red_no2		=download_db_standards2[12];
			gau_green_yellow_co2	=download_db_standards2[13];
			gau_yellow_red_co2		=download_db_standards2[14];
			gau_green_yellow_pm25	=download_db_standards2[15];
			gau_yellow_red_pm25		=download_db_standards2[16];
			gau_green_yellow_pm10	=download_db_standards2[17];
			gau_yellow_red_pm10		=download_db_standards2[18];
		}
	};
	xhttp12.open("GET", "charts/gau_standards.php", true);
	xhttp12.send();
};
			
function user_drawChart()
{
	user_data_ozone_live = google.visualization.arrayToDataTable
		([
			['Label', 'Value'],
			['µg/m³', 0],
		]);
		
	user_data_no2_live = google.visualization.arrayToDataTable
		([
			['Label', 'Value'],
			['µg/m³', 0],
        ]);
		
	user_data_co2_live = google.visualization.arrayToDataTable
		([
			['Label', 'Value'],
			['ppm', 0],
        ]);
		
	user_data_pm25_live = google.visualization.arrayToDataTable
		([
			['Label', 'Value'],
			['µg/m³', 0],
        ]);
		
	user_data_pm10_live = google.visualization.arrayToDataTable
		([
			['Label', 'Value'],
			['µg/m³', 0],
        ]);
		
	user_data_wind_live = google.visualization.arrayToDataTable
		([
			['Label', 'Value'],
			['km/h', 0],
        ]);
	
    user_data_ozone_1 = google.visualization.arrayToDataTable
		([
			['Label', 'Value'],
			['µg/m³', 0],
        ]);
		
	user_data_no2_1 = google.visualization.arrayToDataTable
		([
			['Label', 'Value'],
			['µg/m³', 0],
        ]);
		
	user_data_co2_1 = google.visualization.arrayToDataTable
		([
			['Label', 'Value'],
			['ppm', 0],
        ]);
		
	user_data_pm25_1 = google.visualization.arrayToDataTable
		([
			['Label', 'Value'],
			['µg/m³', 0],
        ]);
		
	user_data_pm10_1 = google.visualization.arrayToDataTable
		([
			['Label', 'Value'],
			['µg/m³', 0],
        ]);
		
	user_data_wind_1 = google.visualization.arrayToDataTable
		([
			['Label', 'Value'],
			['km/h', 0],
        ]);
		
	user_data_ozone_24 = google.visualization.arrayToDataTable
		([
			['Label', 'Value'],
			['µg/m³', 0],
        ]);
		
	user_data_no2_24 = google.visualization.arrayToDataTable
		([
			['Label', 'Value'],
			['µg/m³', 0],
        ]);
		
	user_data_co2_24 = google.visualization.arrayToDataTable
		([
			['Label', 'Value'],
			['ppm', 0],
        ]);
		
	user_data_pm25_24 = google.visualization.arrayToDataTable
		([
			['Label', 'Value'],
			['µg/m³', 0],
        ]);
		
		user_data_pm10_24 = google.visualization.arrayToDataTable
		([
			['Label', 'Value'],
			['µg/m³', 0],
        ]);
		
	user_data_wind_24 = google.visualization.arrayToDataTable
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

        user_chart_ozone_live = new google.visualization.Gauge(document.getElementById('user_gau_chart_ozone_live'));
		user_chart_no2_live = new google.visualization.Gauge(document.getElementById('user_gau_chart_no2_live'));
		user_chart_co2_live = new google.visualization.Gauge(document.getElementById('user_gau_chart_co2_live'));
		user_chart_pm25_live = new google.visualization.Gauge(document.getElementById('user_gau_chart_pm25_live'));
		user_chart_pm10_live = new google.visualization.Gauge(document.getElementById('user_gau_chart_pm10_live'));
		user_chart_wind_live = new google.visualization.Gauge(document.getElementById('user_gau_chart_wind_live'));

        user_chart_ozone_1 = new google.visualization.Gauge(document.getElementById('user_gau_chart_ozone_1'));
		user_chart_no2_1 = new google.visualization.Gauge(document.getElementById('user_gau_chart_no2_1'));
		user_chart_co2_1 = new google.visualization.Gauge(document.getElementById('user_gau_chart_co2_1'));
		user_chart_pm25_1 = new google.visualization.Gauge(document.getElementById('user_gau_chart_pm25_1'));
		user_chart_pm10_1 = new google.visualization.Gauge(document.getElementById('user_gau_chart_pm10_1'));
		user_chart_wind_1 = new google.visualization.Gauge(document.getElementById('user_gau_chart_wind_1'));
		
		user_chart_ozone_24 = new google.visualization.Gauge(document.getElementById('user_gau_chart_ozone_24'));
		user_chart_no2_24 = new google.visualization.Gauge(document.getElementById('user_gau_chart_no2_24'));
		user_chart_co2_24 = new google.visualization.Gauge(document.getElementById('user_gau_chart_co2_24'));
		user_chart_pm25_24 = new google.visualization.Gauge(document.getElementById('user_gau_chart_pm25_24'));
		user_chart_pm10_24 = new google.visualization.Gauge(document.getElementById('user_gau_chart_pm10_24'));
		user_chart_wind_24 = new google.visualization.Gauge(document.getElementById('user_gau_chart_wind_24'));
				
		download_db_standards();
	}

function user_set_data_chart_1(ids)
{
	download_db_chart_user_live(ids);
	download_db_chart_user_1(ids);
			
	setTimeout(function()
		{
			if(user_is_ozone==1)
			{
				user_data_ozone_live.setValue(0,1,user_ozone_data_live);
				user_ozone_pro_live=Math.round((user_ozone_data_live/ozone_stan)*100);
				document.getElementById("user_gau_chart_pro_ozone_live").innerHTML = user_ozone_pro_live+"%";
				user_data_ozone_1.setValue(0,1,user_ozone_data_1);
				user_ozone_pro_1=Math.round((user_ozone_data_1/ozone_stan)*100);
				document.getElementById("user_gau_chart_pro_ozone_1").innerHTML = user_ozone_pro_1+"%";
					
			}
			else
			{
				user_data_ozone_1.setValue(0,1,0);
				document.getElementById("user_gau_chart_pro_ozone_1").innerHTML = "N/A";
				user_data_ozone_live.setValue(0,1,0);
				document.getElementById("user_gau_chart_pro_ozone_live").innerHTML = "N/A";
			}
				
			if (user_is_no2==1)
			{
				user_data_no2_1.setValue(0,1,user_no2_data_1);
				user_no2_pro_1=Math.round((user_no2_data_1/no2_stan)*100);
				document.getElementById("user_gau_chart_pro_no2_1").innerHTML = user_no2_pro_1+"%";
				user_data_no2_live.setValue(0,1,user_no2_data_live);
				user_no2_pro_live=Math.round((user_no2_data_live/no2_stan)*100);
				document.getElementById("user_gau_chart_pro_no2_live").innerHTML = user_no2_pro_live+"%";
			}
			else
			{
				user_data_no2_1.setValue(0,1,0);
				document.getElementById("user_gau_chart_pro_no2_1").innerHTML = "N/A";
				user_data_no2_live.setValue(0,1,0);
				document.getElementById("user_gau_chart_pro_no2_live").innerHTML = "N/A";
			}
				
			if(user_is_co2==1)
			{
				user_data_co2_1.setValue(0,1,user_co2_data_1);
				user_co2_pro_1=Math.round((user_co2_data_1/co2_stan)*100);
				document.getElementById("user_gau_chart_pro_co2_1").innerHTML = user_co2_pro_1+"%";
				user_data_co2_live.setValue(0,1,user_co2_data_live);
				user_co2_pro_live=Math.round((user_co2_data_live/co2_stan)*100);
				document.getElementById("user_gau_chart_pro_co2_live").innerHTML = user_co2_pro_live+"%";	
			}
			else
			{
				user_data_co2_1.setValue(0,1,0);
				document.getElementById("user_gau_chart_pro_co2_1").innerHTML = "N/A";
				user_data_co2_live.setValue(0,1,0);
				document.getElementById("user_gau_chart_pro_co2_live").innerHTML = "N/A";	
			}
				
			if (user_is_pm25==1)
			{
				user_data_pm25_1.setValue(0,1,user_pm25_data_1);
				user_pm25_pro_1=Math.round((user_pm25_data_1/pm25_stan)*100);
				document.getElementById("user_gau_chart_pro_pm25_1").innerHTML = user_pm25_pro_1+"%";
				user_data_pm25_live.setValue(0,1,user_pm25_data_live);
				user_pm25_pro_live=Math.round((user_pm25_data_live/pm25_stan)*100);
				document.getElementById("user_gau_chart_pro_pm25_live").innerHTML = user_pm25_pro_live+"%";	
			}
			else
			{
				user_data_pm25_1.setValue(0,1,0);
				document.getElementById("user_gau_chart_pro_pm25_1").innerHTML = "N/A";
				user_data_pm25_live.setValue(0,1,0);
				document.getElementById("user_gau_chart_pro_pm25_live").innerHTML = "N/A";	
			}
				
			if(user_is_pm10==1)
			{
				user_data_pm10_1.setValue(0,1,user_pm10_data_1);
				user_pm10_pro_1=Math.round((user_pm10_data_1/pm10_stan)*100);
				document.getElementById("user_gau_chart_pro_pm10_1").innerHTML = user_pm10_pro_1+"%";	
				user_data_pm10_live.setValue(0,1,user_pm10_data_live);
				user_pm10_pro_live=Math.round((user_pm10_data_live/pm10_stan)*100);
				document.getElementById("user_gau_chart_pro_pm10_live").innerHTML = user_pm10_pro_live+"%";	
			}
			else
			{
				user_data_pm10_1.setValue(0,1,0);
				document.getElementById("user_gau_chart_pro_pm10_1").innerHTML = "N/A";
				user_data_pm10_live.setValue(0,1,0);
				document.getElementById("user_gau_chart_pro_pm10_live").innerHTML = "N/A";	
			}
				
			if(user_is_wind==1)
			{
				user_data_wind_1.setValue(0,1,user_wind_data_1);
				document.getElementById("user_gau_chart_pro_wind_1").innerHTML = user_wind_data_1+" km/h";
				user_data_wind_live.setValue(0,1,user_wind_data_live);
				document.getElementById("user_gau_chart_pro_wind_live").innerHTML = user_wind_data_live+" km/h";
			}
			else
			{
				user_data_wind_1.setValue(0,1,0);
				document.getElementById("user_gau_chart_pro_wind_1").innerHTML = "N/A";
				user_data_wind_live.setValue(0,1,0);
				document.getElementById("user_gau_chart_pro_wind_live").innerHTML = "N/A";
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
			 
			user_chart_ozone_1.draw(user_data_ozone_1, options_ozone);
			user_chart_no2_1.draw(user_data_no2_1, options_no2);
			user_chart_co2_1.draw(user_data_co2_1, options_co2);
			user_chart_pm25_1.draw(user_data_pm25_1, options_pm25);
			user_chart_pm10_1.draw(user_data_pm10_1, options_pm10);
			user_chart_wind_1.draw(user_data_wind_1, options_wind);
				
			user_chart_ozone_live.draw(user_data_ozone_live, options_ozone);
			user_chart_no2_live.draw(user_data_no2_live, options_no2);
			user_chart_co2_live.draw(user_data_co2_live, options_co2);
			user_chart_pm25_live.draw(user_data_pm25_live, options_pm25);
			user_chart_pm10_live.draw(user_data_pm10_live, options_pm10);
			user_chart_wind_live.draw(user_data_wind_live, options_wind);
				
				
			if(user_is_temp==1)
			{
				document.getElementById("user_gau_chart_temp_1").innerHTML = "TEMPERATURA: "+user_temp_data_1+" &deg;C";
				document.getElementById("user_gau_chart_temp_live").innerHTML = "TEMPERATURA: "+user_temp_data_live+" &deg;C";
			}
			else
			{
				document.getElementById("user_gau_chart_temp_1").innerHTML = "TEMPERATURA: BRAK POMIARU";
				document.getElementById("user_gau_chart_temp_live").innerHTML = "TEMPERATURA: BRAK POMIARU";
			}
				
		},250);
       
}

function user_set_data_chart_24(ids)
{
	download_db_chart_user_24(ids);
		
	setTimeout(function()
		{
			if(user_is_ozone==1)
			{
				user_data_ozone_24.setValue(0,1,user_ozone_data_24);
				user_ozone_pro_24=Math.round((user_ozone_data_24/ozone_stan)*100);
				document.getElementById("user_gau_chart_pro_ozone_24").innerHTML = user_ozone_pro_24+"%";
			}
			else
			{
				user_data_ozone_24.setValue(0,1,0);
				document.getElementById("user_gau_chart_pro_ozone_24").innerHTML = "N/A";
			}
			
			if (user_is_no2==1)
			{
				user_data_no2_24.setValue(0,1,user_no2_data_24);
				user_no2_pro_24=Math.round((user_no2_data_24/no2_stan)*100);
				document.getElementById("user_gau_chart_pro_no2_24").innerHTML = user_no2_pro_24+"%";
			}
			else
			{
				user_data_no2_24.setValue(0,1,0);
				document.getElementById("user_gau_chart_pro_no2_24").innerHTML = "N/A";
			}
				
			if(user_is_co2==1)
			{
				user_data_co2_24.setValue(0,1,user_co2_data_24);
				user_co2_pro_24=Math.round((user_co2_data_24/co2_stan)*100);
				document.getElementById("user_gau_chart_pro_co2_24").innerHTML = user_co2_pro_24+"%";
			}
			else
			{
				user_data_co2_24.setValue(0,1,0);
				document.getElementById("user_gau_chart_pro_co2_24").innerHTML = "N/A";
			}
				
			if (user_is_pm25==1)
			{
				user_data_pm25_24.setValue(0,1,user_pm25_data_24);
				user_pm25_pro_24=Math.round((user_pm25_data_24/pm25_stan)*100);
				document.getElementById("user_gau_chart_pro_pm25_24").innerHTML = user_pm25_pro_24+"%";
			}
			else
			{
				user_data_pm25_24.setValue(0,1,0);
				document.getElementById("user_gau_chart_pro_pm25_24").innerHTML = "N/A";
			}
			
			if(user_is_pm10==1)
			{
				user_data_pm10_24.setValue(0,1,user_pm10_data_24);
				user_pm10_pro_24=Math.round((user_pm10_data_24/pm10_stan)*100);
				document.getElementById("user_gau_chart_pro_pm10_24").innerHTML = user_pm10_pro_24+"%";
			}
			else
			{
				user_data_pm10_24.setValue(0,1,0);
				document.getElementById("user_gau_chart_pro_pm10_24").innerHTML = "N/A";
			}
					
			if(user_is_wind==1)
			{
				user_data_wind_24.setValue(0,1,user_wind_data_24);
				document.getElementById("user_gau_chart_pro_wind_24").innerHTML = user_wind_data_24+" km/h";
			}
			else
			{
				user_data_wind_24.setValue(0,1,0);
				document.getElementById("user_gau_chart_pro_wind_24").innerHTML = "N/A";
			}
			  
			user_chart_ozone_24.draw(user_data_ozone_24, options_ozone);
			user_chart_no2_24.draw(user_data_no2_24, options_no2);
			user_chart_co2_24.draw(user_data_co2_24, options_co2);
			user_chart_pm25_24.draw(user_data_pm25_24, options_pm25);
			user_chart_pm10_24.draw(user_data_pm10_24, options_pm10);
			user_chart_wind_24.draw(user_data_wind_24, options_wind);
				
			if(user_is_temp==1)
			{
				document.getElementById("user_gau_chart_temp_24").innerHTML = "TEMPERATURA: "+user_temp_data_24+" &deg;C";
			}
			else
			{
				document.getElementById("user_gau_chart_temp_24").innerHTML = "TEMPERATURA: BRAK POMIARU";
			}
						
		},600);
}
		
function user_set_data_chart_24_sel(ids,date)
{
	download_db_chart_user_24_sel(ids,date);
		
	setTimeout(function()
		{
			if(none_user==true)
			{
				document.getElementById("label_gau_24").innerHTML = "Brak danych z tego dnia";
			}
			else
			{
				document.getElementById("label_gau_24").innerHTML = "Średnia z dnia: "+date;
				
				if(user_is_ozone==1)
				{
					user_data_ozone_24.setValue(0,1,user_ozone_data_24);
					user_ozone_pro_24=Math.round((user_ozone_data_24/ozone_stan)*100);
					document.getElementById("user_gau_chart_pro_ozone_24").innerHTML = user_ozone_pro_24+"%";
				}
				else
				{
					user_data_ozone_24.setValue(0,1,0);
					document.getElementById("user_gau_chart_pro_ozone_24").innerHTML = "N/A";
				}
				
				if (user_is_no2==1)
				{
					user_data_no2_24.setValue(0,1,user_no2_data_24);
					user_no2_pro_24=Math.round((user_no2_data_24/no2_stan)*100);
					document.getElementById("user_gau_chart_pro_no2_24").innerHTML = user_no2_pro_24+"%";
				}
				else
				{
					user_data_no2_24.setValue(0,1,0);
					document.getElementById("user_gau_chart_pro_no2_24").innerHTML = "N/A";
				}
					
				if(user_is_co2==1)
				{
					user_data_co2_24.setValue(0,1,user_co2_data_24);
					user_co2_pro_24=Math.round((user_co2_data_24/co2_stan)*100);
					document.getElementById("user_gau_chart_pro_co2_24").innerHTML = user_co2_pro_24+"%";
				}
				else
				{
					user_data_co2_24.setValue(0,1,0);
					document.getElementById("user_gau_chart_pro_co2_24").innerHTML = "N/A";
				}
				
				if (user_is_pm25==1)
				{
					user_data_pm25_24.setValue(0,1,user_pm25_data_24);
					user_pm25_pro_24=Math.round((user_pm25_data_24/pm25_stan)*100);
					document.getElementById("user_gau_chart_pro_pm25_24").innerHTML = user_pm25_pro_24+"%";
				}
				else
				{
					user_data_pm25_24.setValue(0,1,0);
					document.getElementById("user_gau_chart_pro_pm25_24").innerHTML = "N/A";
				}
					
				if(user_is_pm10==1)
				{
					user_data_pm10_24.setValue(0,1,user_pm10_data_24);
					user_pm10_pro_24=Math.round((user_pm10_data_24/pm10_stan)*100);
					document.getElementById("user_gau_chart_pro_pm10_24").innerHTML = user_pm10_pro_24+"%";
				}
				else
				{
					user_data_pm10_24.setValue(0,1,0);
					document.getElementById("user_gau_chart_pro_pm10_24").innerHTML = "N/A";
				}
					
				if(user_is_wind==1)
				{
					user_data_wind_24.setValue(0,1,user_wind_data_24);
					document.getElementById("user_gau_chart_pro_wind_24").innerHTML = user_wind_data_24+" km/h";
				}
				else
				{
					user_data_wind_24.setValue(0,1,0);
					document.getElementById("user_gau_chart_pro_wind_24").innerHTML = "N/A";
				}
				 
				user_chart_ozone_24.draw(user_data_ozone_24, options_ozone);
				user_chart_no2_24.draw(user_data_no2_24, options_no2);
				user_chart_co2_24.draw(user_data_co2_24, options_co2);
				user_chart_pm25_24.draw(user_data_pm25_24, options_pm25);
				user_chart_pm10_24.draw(user_data_pm10_24, options_pm10);
				user_chart_wind_24.draw(user_data_wind_24, options_wind);
				
					
				if(user_is_temp==1)
				{
					document.getElementById("user_gau_chart_temp_24").innerHTML = "TEMPERATURA: "+user_temp_data_24+" &deg;C";
				}
				else
				{
					document.getElementById("user_gau_chart_temp_24").innerHTML = "TEMPERATURA: BRAK POMIARU";
				}
			}		
		},600);
}