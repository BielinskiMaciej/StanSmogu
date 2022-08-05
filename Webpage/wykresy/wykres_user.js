google.charts.setOnLoadCallback(user_drawVisualization);

var download_db_user_col1;
var download_db_user_col2=[];
var download_db_user_col3=[];
var download_db_user_col_cho1;
var download_db_user_col_cho2=[];
var download_db_user_col_cho3=[];
var user_data_temp_col=[];
var user_data_pm25_10_col=[];
var user_data_ozone_col=[];
var user_data_no2_col=[];
var user_data_co2_col=[];
var user_data_wind_col=[];
var user_data_temp_db=[];
var user_data_pm25_10_db=[];
var user_data_ozone_db=[];
var user_data_no2_db=[];
var user_data_co2_db=[];
var user_data_wind_db=[];
var user_measure_datetime2=[];
var none_user_col=false;	
var user_width_col;
var user_height_col;
	
if (window.innerWidth>1000)
{
	user_width_col=window.innerWidth*0.2;
}
else
{
	user_width_col=300;
}
user_height_col=user_width_col*0.6;
		
function download_db_user_col_cho(ids,date)
{
	var xhttp13; 
	xhttp13 = new XMLHttpRequest();
	xhttp13.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{
			download_db_user_col_cho1 = this.responseText;
			Empty_user_col=download_db_user_col_cho1[0]+download_db_user_col_cho1[1]+download_db_user_col_cho1[2]+download_db_user_col_cho1[3];
			if(Empty_user_col=="None")
			{
				none_user_col=true;
			}
			else
			{
				none_user_col=false;
				download_db_user_col_cho2=download_db_user_col_cho1.split("/");
				
				for (i=1;i<download_db_user_col_cho2.length;i++)
				{
					download_db_user_col_cho3[i] = download_db_user_col_cho2[i].split("|");
						user_measure_datetime = download_db_user_col_cho3[i][0];
						user_measure_datetime2 =user_measure_datetime.split(" ");
							user_measure_date = user_measure_datetime2[0];
							user_measure_time = user_measure_datetime2[1];								
							user_measure_time2 = user_measure_time.split(":");
								user_measure_hour = user_measure_time2[0];
								user_measure_min = user_measure_time2[1];				
									user_measure_show=user_measure_hour+":"+user_measure_min;
											
					user_ozone 			= eval(download_db_user_col_cho3[i][1]);
					user_ozone_stan 	= eval(download_db_user_col_cho3[i][2]);
					user_no2 			= eval(download_db_user_col_cho3[i][3]);
					user_no2_stan 		= eval(download_db_user_col_cho3[i][4]);
					user_co2 			= eval(download_db_user_col_cho3[i][5]);
					user_co2_stan 		= eval(download_db_user_col_cho3[i][6]);
					user_pm2_5 			= eval(download_db_user_col_cho3[i][7]);
					user_pm25_stan 		= eval(download_db_user_col_cho3[i][8]);
					user_pm10 			= eval(download_db_user_col_cho3[i][9]);
					user_pm10_stan 		= eval(download_db_user_col_cho3[i][10]);
					user_temp 			= eval(download_db_user_col_cho3[i][11]);
					user_wind_d 		= eval(download_db_user_col_cho3[i][12]);
					user_wind_s 		= eval(download_db_user_col_cho3[i][13]);
					user_wind_g 		= eval(download_db_user_col_cho3[i][14]);
					user_ozone_temp 	= eval(download_db_user_col_cho3[i][15]);
					user_ozone_hum 		= eval(download_db_user_col_cho3[i][16]);
					user_no2_temp 		= eval(download_db_user_col_cho3[i][17]);
					user_no2_hum 		= eval(download_db_user_col_cho3[i][18]);
					user_is_ozone 		= eval(download_db_user_col_cho3[i][19]);
					user_is_no2 		= eval(download_db_user_col_cho3[i][20]);
					user_is_co2 		= eval(download_db_user_col_cho3[i][21]);
					user_is_pm25 		= eval(download_db_user_col_cho3[i][22]);
					user_is_pm10 		= eval(download_db_user_col_cho3[i][23]);
					user_is_temp 		= eval(download_db_user_col_cho3[i][24]);
					user_is_wind 		= eval(download_db_user_col_cho3[i][25]);
						
					user_data_pm25_10_db[i]=[user_measure_show,user_pm10,user_pm2_5,user_pm10_stan,user_pm25_stan];
					user_data_ozone_db[i]=[user_measure_show,user_ozone,user_ozone_stan];
					user_data_no2_db[i]=[user_measure_show,user_no2,user_no2_stan];
					user_data_co2_db[i]=[user_measure_show,user_co2,user_co2_stan];
					user_data_temp_db[i]=[user_measure_show,user_temp];
					user_data_wind_db[i]=[user_measure_show,user_wind_s,user_wind_g];
				}
			}
		}
	};		
	xhttp13.open("GET", "wykresy/download_sel_wykr.php?ids="+ids+"&date="+date, true);
	xhttp13.send();
}
	
function download_db_user_col(ids)
{
	var xhttp14; 
	xhttp14 = new XMLHttpRequest();
	xhttp14.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{
			download_db_user_col1 = this.responseText;
			
			download_db_user_col2=download_db_user_col1.split("/");
			
			for (i=1;i<download_db_user_col2.length;i++)
			{
				download_db_user_col3[i] = download_db_user_col2[i].split("|");
					user_measure_datetime = download_db_user_col3[i][0];
					user_measure_datetime2 =user_measure_datetime.split(" ");
						user_measure_date = user_measure_datetime2[0];
						user_measure_time = user_measure_datetime2[1];
						user_measure_time2 = user_measure_time.split(":");
							user_measure_hour = user_measure_time2[0];
							user_measure_min = user_measure_time2[1];
								user_measure_show=user_measure_hour+":"+user_measure_min;
				
				user_ozone 		= eval(download_db_user_col3[i][1]);
				user_ozone_stan = eval(download_db_user_col3[i][2]);
				user_no2 		= eval(download_db_user_col3[i][3]);
				user_no2_stan 	= eval(download_db_user_col3[i][4]);
				user_co2 		= eval(download_db_user_col3[i][5]);
				user_co2_stan 	= eval(download_db_user_col3[i][6]);
				user_pm2_5 		= eval(download_db_user_col3[i][7]);
				user_pm25_stan 	= eval(download_db_user_col3[i][8]);
				user_pm10 		= eval(download_db_user_col3[i][9]);
				user_pm10_stan 	= eval(download_db_user_col3[i][10]);
				user_temp 		= eval(download_db_user_col3[i][11]);
				user_wind_d 	= eval(download_db_user_col3[i][12]);
				user_wind_s 	= eval(download_db_user_col3[i][13]);
				user_wind_g 	= eval(download_db_user_col3[i][14]);
				user_ozone_temp = eval(download_db_user_col3[i][15]);
				user_ozone_hum 	= eval(download_db_user_col3[i][16]);
				user_no2_temp 	= eval(download_db_user_col3[i][17]);
				user_no2_hum 	= eval(download_db_user_col3[i][18]);
				user_is_ozone 	= eval(download_db_user_col3[i][19]);
				user_is_no2 	= eval(download_db_user_col3[i][20]);
				user_is_co2 	= eval(download_db_user_col3[i][21]);
				user_is_pm25 	= eval(download_db_user_col3[i][22]);
				user_is_pm10 	= eval(download_db_user_col3[i][23]);
				user_is_temp 	= eval(download_db_user_col3[i][24]);
				user_is_wind 	= eval(download_db_user_col3[i][25]);	
										
				user_data_pm25_10_db[i]=[user_measure_show,user_pm10,user_pm2_5,user_pm10_stan,user_pm25_stan];
				user_data_ozone_db[i]=[user_measure_show,user_ozone,user_ozone_stan];
				user_data_no2_db[i]=[user_measure_show,user_no2,user_no2_stan];
				user_data_co2_db[i]=[user_measure_show,user_co2,user_co2_stan];
				user_data_temp_db[i]=[user_measure_show,user_temp];
				user_data_wind_db[i]=[user_measure_show,user_wind_s,user_wind_g];					
			}
		}
	};			
	xhttp14.open("GET", "wykresy/download_wykr.php?ids="+ids, true);
	xhttp14.send();		
};

function user_drawVisualization() 
{
	user_data_pm25_10_db[0]=['Godzina','PM10', 'PM2.5','Norma PM10','Norma PM2.5'];
	user_data_ozone_db[0]=['Godzina','Ozon','Norma'];
	user_data_no2_db[0]=['Godzina','CO2','Norma'];
	user_data_co2_db[0]=['Godzina','NO2','Norma'];
	user_data_temp_db[0]=['Godzina','Temperatura [st. C]'];
	user_data_wind_db[0]=['Godzina','Wiatr [km/h]','Porywy [km/h]'];
	
	user_data_pm25_10_db[1]=[0,0,0,0,0];
	user_data_ozone_db[1]=[0,0,0];
	user_data_no2_db[1]=[0,0,0];
	user_data_co2_db[1]=[0,0,0];
	user_data_temp_db[1]=[0,0];
	user_data_wind_db[1]=[0,0,0];

	user_data_pm25_10_col = google.visualization.arrayToDataTable(user_data_pm25_10_db);
	user_data_ozone_col = google.visualization.arrayToDataTable(user_data_ozone_db);
	user_data_no2_col = google.visualization.arrayToDataTable(user_data_no2_db);
	user_data_co2_col = google.visualization.arrayToDataTable(user_data_co2_db);
	user_data_temp_col = google.visualization.arrayToDataTable(user_data_temp_db);
	user_data_wind_col = google.visualization.arrayToDataTable(user_data_wind_db);
		
	user_options_pm25_10_col = 
	{
		title : 'Wartość PM2.5 i PM10 [ug/m3]',
		hAxis: {showTextEvery:6 },
		colors: ['blue','green','red','red'],
		legend: {position: 'none'},
		series: {2: {type: 'line'},3: {type: 'line'}},
		width: user_width_col,
		height: user_height_col,
	};
	  
	user_options_ozone_col = 
	{
		title : 'Zawartość ozonu [ug/m3]',
		hAxis: {showTextEvery:6 },
		colors: ['blue','red'],
		legend: {position: 'none'},
		series: {1: {type: 'line'}},
		width: user_width_col,
		height: user_height_col,
	};
	
	user_options_no2_col = 
	{
		title : 'Zawartość NO2 [ug/m3]',
		hAxis: {showTextEvery:6 },
		colors: ['blue','red'],
		legend: {position: 'none'},
		series: {1: {type: 'line'}},
		width: user_width_col,
		height: user_height_col,
	};
	
	user_options_co2_col = 
	{
		title : 'Zawartość CO2 [ug/m3]',
		hAxis: {showTextEvery:6 },
		colors: ['blue','red'],
		legend: {position: 'none'},
		series: {1: {type: 'line'}},
		width: user_width_col,
		height: user_height_col,
	};
	
	user_options_temp_col = 
	{
		title : 'Temperatura',
		hAxis: { showTextEvery:6 },
		legend: {position: 'none'},
		seriesType: 'line',
		width: user_width_col,
		height: user_height_col,
	};
	
	user_options_wind_col = 
	{
		title : 'Wiatr',
		hAxis: { showTextEvery:6 },
		legend: {position: 'none'},
		seriesType: 'line',
		width: user_width_col,
		height: user_height_col,
	};
	
	user_chart_pm25_10_col = new google.visualization.AreaChart(document.getElementById('user_chart_pm25_10_col'));
	user_chart_ozone_col = new google.visualization.ComboChart(document.getElementById('user_chart_ozone_col'));
	user_chart_no2_col = new google.visualization.ComboChart(document.getElementById('user_chart_no2_col'));
	user_chart_co2_col = new google.visualization.ComboChart(document.getElementById('user_chart_co2_col'));
    user_chart_temp_col = new google.visualization.ComboChart(document.getElementById('user_chart_temp_col'));
	user_chart_wind_col = new google.visualization.ComboChart(document.getElementById('user_chart_wind_col'));		
}
	
function user_set_data_col(ids)
{
	user_is_ozone=0;
	user_is_no2=0;
	user_is_co2=0;
	user_is_pm25=0;
	user_is_pm10=0;
	user_is_temp=0;
	user_is_wind=0;
						
	user_chart_pm25_10_col.clearChart();
	user_chart_ozone_col.clearChart();
	user_chart_no2_col.clearChart();
	user_chart_co2_col.clearChart();
	user_chart_temp_col.clearChart();
	user_chart_wind_col.clearChart();
	
	download_db_user_col(ids);
			
	user_data_pm25_10_db=[];
	user_data_ozone_db=[];
	user_data_no2_db=[];
	user_data_co2_db=[];
	user_data_temp_db=[];
	user_data_wind_db=[];
		
	user_data_pm25_10_db[0]=['Godzina','PM10', 'PM2.5','Norma PM10','Norma PM2.5'];
	user_data_ozone_db[0]=['Godzina','Ozon','Norma'];
	user_data_no2_db[0]=['Godzina','NO2','Norma'];
	user_data_co2_db[0]=['Godzina','CO2','Norma'];
	user_data_temp_db[0]=['Godzina','Temperatura [st. C]'];
	user_data_wind_db[0]=['Godzina','Wiatr [km/h]','Porywy [km/h]'];
			
	user_data_pm25_10_db[1]=[0,0,0,0,0];
	user_data_ozone_db[1]=[0,0,0];
	user_data_no2_db[1]=[0,0,0];
	user_data_co2_db[1]=[0,0,0];
	user_data_temp_db[1]=[0,0];
	user_data_wind_db[1]=[0,0,0];
			
	setTimeout(function()
		{		
			document.getElementById("user_none_col").innerHTML = "Dane z ostatnich 24 godzin";
					
			user_data_pm25_10_col = google.visualization.arrayToDataTable(user_data_pm25_10_db);
			user_data_ozone_col = google.visualization.arrayToDataTable(user_data_ozone_db);
			user_data_no2_col = google.visualization.arrayToDataTable(user_data_no2_db);
			user_data_co2_col = google.visualization.arrayToDataTable(user_data_co2_db);
			user_data_temp_col = google.visualization.arrayToDataTable(user_data_temp_db);
			user_data_wind_col = google.visualization.arrayToDataTable(user_data_wind_db);
					
			if (user_is_pm25==1 & user_is_pm10==1)
			{		
				user_chart_pm25_10_col.draw(user_data_pm25_10_col, user_options_pm25_10_col);
			}
			if (user_is_ozone==1)
			{
				user_chart_ozone_col.draw(user_data_ozone_col, user_options_ozone_col);
			}
			if (user_is_no2==1)
			{
				user_chart_no2_col.draw(user_data_no2_col, user_options_no2_col);
			}
			if (user_is_co2==1)
			{
				user_chart_co2_col.draw(user_data_co2_col, user_options_co2_col);
			}
			if (user_is_temp==1)
			{
				user_chart_temp_col.draw(user_data_temp_col, user_options_temp_col);
			}	
			if (user_is_wind==1)
			{
				user_chart_wind_col.draw(user_data_wind_col, user_options_wind_col);
			}	
		},600);
};
	  
function user_update_col(ids)
{
	if(new Date().getMinutes() === 1) 
	{
		user_set_data_col(ids);
	}
			  
	if(new Date().getMinutes() === 2) 
	{
		user_data_pm25_10_col = google.visualization.arrayToDataTable(user_data_pm25_10_db);
		user_data_ozone_col = google.visualization.arrayToDataTable(user_data_ozone_db);
		user_data_no2_col = google.visualization.arrayToDataTable(user_data_no2_db);
		user_data_co2_col = google.visualization.arrayToDataTable(user_data_co2_db);
		user_data_temp_col = google.visualization.arrayToDataTable(user_data_temp_db);
		user_data_wind_col = google.visualization.arrayToDataTable(user_data_wind_db);
					
		if (user_is_pm25==1 & user_is_pm10==1)
		{		
			user_chart_pm25_10_col.draw(user_data_pm25_10_col, user_options_pm25_10_col);
		}
		if (user_is_ozone==1)
		{
			user_chart_ozone_col.draw(user_data_ozone_col, user_options_ozone_col);
		}
		if (user_is_no2==1)
		{
			user_chart_no2_col.draw(user_data_no2_col, user_options_no2_col);
		}
		if (user_is_co2==1)
		{
			user_chart_co2_col.draw(user_data_co2_col, user_options_co2_col);
		}
		if (user_is_temp==1)
		{
			user_chart_temp_col.draw(user_data_temp_col, user_options_temp_col);
		}
		if (user_is_wind==1)
		{
			user_chart_wind_col.draw(user_data_wind_col, user_options_wind_col);
		}	
				
	}
}
	
function user_select_data_col(ids,date_sel)
{
	user_is_ozone=0;
	user_is_no2=0;
	user_is_co2=0;
	user_is_pm25=0;
	user_is_pm10=0;
	user_is_temp=0;
	user_is_wind=0;
					
	user_chart_pm25_10_col.clearChart();
	user_chart_ozone_col.clearChart();
	user_chart_no2_col.clearChart();
	user_chart_co2_col.clearChart();
	user_chart_temp_col.clearChart();
	user_chart_wind_col.clearChart();
			
	download_db_user_col_cho(ids,date_sel);
		
	user_data_pm25_10_db=[];
	user_data_ozone_db=[];
	user_data_no2_db=[];
	user_data_co2_db=[];
	user_data_temp_db=[];
	user_data_wind_db=[];
			
	user_data_pm25_10_db[0]=['Godzina','PM10', 'PM2.5','Norma PM10','Norma PM2.5'];
	user_data_ozone_db[0]=['Godzina','Ozon','Norma'];
	user_data_no2_db[0]=['Godzina','NO2','Norma'];
	user_data_co2_db[0]=['Godzina','CO2','Norma'];
	user_data_temp_db[0]=['Godzina','Temperatura [st. C]'];
	user_data_wind_db[0]=['Godzina','Wiatr [km/h]','Porywy [km/h]'];
			
	user_data_pm25_10_db[1]=[0,0,0,0,0];
	user_data_ozone_db[1]=[0,0,0];
	user_data_no2_db[1]=[0,0,0];
	user_data_co2_db[1]=[0,0,0];
	user_data_temp_db[1]=[0,0];
	user_data_wind_db[1]=[0,0,0];
	
	setTimeout(function()
		{
			if(none_user_col==true)
			{
				document.getElementById("user_none_col").innerHTML = "Brak danych z tego dnia";
			}
			else
			{
				user_data_pm25_10_col = google.visualization.arrayToDataTable(user_data_pm25_10_db);
				user_data_ozone_col = google.visualization.arrayToDataTable(user_data_ozone_db);
				user_data_no2_col = google.visualization.arrayToDataTable(user_data_no2_db);
				user_data_co2_col = google.visualization.arrayToDataTable(user_data_co2_db);
				user_data_temp_col = google.visualization.arrayToDataTable(user_data_temp_db);
				user_data_wind_col = google.visualization.arrayToDataTable(user_data_wind_db);
				
				if (user_is_pm25==1 & user_is_pm10==1)
				{		
					user_chart_pm25_10_col.draw(user_data_pm25_10_col, user_options_pm25_10_col);
				}
				if (user_is_ozone==1)
				{
					user_chart_ozone_col.draw(user_data_ozone_col, user_options_ozone_col);
				}
				if (user_is_no2==1)
				{
					user_chart_no2_col.draw(user_data_no2_col, user_options_no2_col);
				}
				if (user_is_co2==1)
				{
					user_chart_co2_col.draw(user_data_co2_col, user_options_co2_col);
				}
				if (user_is_temp==1)
				{
					user_chart_temp_col.draw(user_data_temp_col, user_options_temp_col);
				}
				if (user_is_wind==1)
				{
					user_chart_wind_col.draw(user_data_wind_col, user_options_wind_col);
				}	
			}
		},600);
};