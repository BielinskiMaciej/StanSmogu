google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

var data_temp_col=[];
var data_pm25_10_col=[];
var data_temp_db=[];
var data_pm25_10_db=[];

var download_db_col1=[];
var download_db_col2=[];
var download_db_col3=[];
var download_db_col_cho1=[];
var download_db_col_cho2=[];
var download_db_col_cho3=[];
var none=false;
var width_col;
var height_col;
	
if (window.innerWidth>1000)
{
	width_col=window.innerWidth*0.2;
}
else
{
	width_col=300;
}
height_col=width_col*0.6;

function download_db_col(ids)
{
	var xhttp3; 
	xhttp3 = new XMLHttpRequest();
	xhttp3.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{
			download_db_col1 = this.responseText;
			Empty=download_db_col_cho1[0]+download_db_col_cho1[1]+download_db_col_cho1[2]+download_db_col_cho1[3];
			if(Empty=="None")
			{
				none=true;
			}
			else
			{
				none=false;
				download_db_col2=download_db_col1.split("/");
							
				for (i=1;i<download_db_col2.length;i++)
				{
					download_db_col3[i] = download_db_col2[i].split("|");
						measure_datetime = download_db_col3[i][0];
							measure_datetime2 =measure_datetime.split(" ");
							measure_date = measure_datetime2[0];
							measure_time = measure_datetime2[1];
								measure_time2 = measure_time.split(":");
								measure_hour = measure_time2[0];
								measure_min = measure_time2[1];
								
								measure_show=measure_hour+":"+measure_min;
											
						pm2_5 			= eval(download_db_col3[i][7]);
						pm25_stan 		= eval(download_db_col3[i][8]);
						pm10 			= eval(download_db_col3[i][9]);
						pm10_stan 		= eval(download_db_col3[i][10]);
						temp 			= eval(download_db_col3[i][11]);
															
					data_pm25_10_db[i]=[measure_show,pm10,pm2_5,pm10_stan,pm25_stan];
					data_temp_db[i]=[measure_show,temp];
									
				}
			}
		}
	};			
	xhttp3.open("GET", "wykresy/download_wykr.php?ids="+ids, true);
	xhttp3.send();
};

function download_db_col_cho(ids,date)
{
	var xhttp4; 
	xhttp4 = new XMLHttpRequest();
	xhttp4.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{
			download_db_col_cho1 = this.responseText;
			Empty2=download_db_col_cho1[0]+download_db_col_cho1[1]+download_db_col_cho1[2]+download_db_col_cho1[3];
			if(Empty2=="None")
			{
				none=true;
			}
			else
			{
				none=false;
				download_db_col_cho2=download_db_col_cho1.split("/");
							
				for (i=1;i<download_db_col_cho2.length;i++)
				{
					download_db_col_cho3[i] = download_db_col_cho2[i].split("|");
						measure_datetime = download_db_col_cho3[i][0];
							measure_datetime2 =measure_datetime.split(" ");
							measure_date = measure_datetime2[0];
							measure_time = measure_datetime2[1];
								measure_time2 = measure_time.split(":");
								measure_hour = measure_time2[0];
								measure_min = measure_time2[1];
								
								measure_show=measure_hour+":"+measure_min;
											
						pm2_5 			= eval(download_db_col_cho3[i][7]);
						pm25_stan 		= eval(download_db_col_cho3[i][8]);
						pm10 			= eval(download_db_col_cho3[i][9]);
						pm10_stan 		= eval(download_db_col_cho3[i][10]);
						temp 			= eval(download_db_col_cho3[i][11]);
											
					data_pm25_10_db[i]=[measure_show,pm10,pm2_5,pm10_stan,pm25_stan];
					data_temp_db[i]=[measure_show,temp];
				}
			}
		}
	};
	xhttp4.open("GET", "wykresy/download_sel_wykr.php?ids="+ids+"&date="+date, true);
	xhttp4.send();
};

function drawVisualization() 
{
		data_pm25_10_db[0]=['Godzina','PM10', 'PM2.5','Norma PM10','Norma PM2.5'];
		data_temp_db[0]=['Godzina',  'Temperatura  [st. C]'];
		data_pm25_10_db[1]=[0,0,0,0,0];
		data_temp_db[1]=[0,0];
		data_pm25_10_col = google.visualization.arrayToDataTable(data_pm25_10_db);
		data_temp_col = google.visualization.arrayToDataTable(data_temp_db);
				
		options_pm25_10_col = 
		{
			title : 'Wartość PM2.5 i PM10 [ug/m3]',
			hAxis: {showTextEvery:6 },
			colors: ['blue','green','red','red'],
			legend: {position: 'none'},
			series: {2: {type: 'line'},3: {type: 'line'}},
			width: width_col,
			height: height_col,
		};
		  
		options_temp_col = 
		{
			title : 'Temperatura',
			hAxis: { showTextEvery:6 },
			legend: {position: 'none'},
			seriesType: 'line',
			width: width_col,
			height: height_col,
		};
		
		chart_pm25_10_col = new google.visualization.AreaChart(document.getElementById('chart_pm25_10_col'));
        chart_temp_col = new google.visualization.ComboChart(document.getElementById('chart_temp_col'));
		chart_pm25_10_col.draw(data_pm25_10_col, options_pm25_10_col);
		chart_temp_col.draw(data_temp_col, options_temp_col);
}
	
function set_data_col(ids)
{
	download_db_col(ids);
	data_pm25_10_db=[];
	data_temp_db=[];
	data_pm25_10_db[0]=['Godzina','PM10', 'PM2.5','Norma PM10','Norma PM2.5'];
	data_temp_db[0]=['Godzina',  'Temperatura  [st. C]'];
	data_pm25_10_db[1]=[0,0,0,0,0];
	data_temp_db[1]=[0,0];
	
	setTimeout(function()
		{
			if(none==true)
			{
				document.getElementById("none_col").innerHTML = "Brak danych";
			}
			else
			{
				document.getElementById("none_col").innerHTML = "Dane z ostatnich 24 godzin";
			}

			data_pm25_10_col = google.visualization.arrayToDataTable(data_pm25_10_db);
			data_temp_col = google.visualization.arrayToDataTable(data_temp_db);
			chart_pm25_10_col.draw(data_pm25_10_col, options_pm25_10_col);
			chart_temp_col.draw(data_temp_col, options_temp_col);
		},500);
};
	  
function update_col(ids)
{
	if(new Date().getMinutes() === 1) 
	{
		download_db_col(ids);
	}
	
	if(new Date().getMinutes() === 2) 
	{
		data_pm25_10_db=[];
		data_temp_db=[];
		data_pm25_10_db[0]=['Godzina','PM10', 'PM2.5','Norma PM10','Norma PM2.5'];
		data_temp_db[0]=['Godzina',  'Temperatura  [st. C]'];
		data_pm25_10_db[1]=[0,0,0,0,0];
		data_temp_db[1]=[0,0];
		data_pm25_10_col = google.visualization.arrayToDataTable(data_pm25_10_db);
		data_temp_col = google.visualization.arrayToDataTable(data_temp_db);
		chart_pm25_10_col.draw(data_pm25_10_col, options_pm25_10_col);
		chart_temp_col.draw(data_temp_col, options_temp_col);
	}
}
	  
function selected_set_data_col(ids,date)
{
	download_db_col_cho(ids,date);
	data_pm25_10_db=[];
	data_temp_db=[];
	data_pm25_10_db[0]=['Godzina','PM10', 'PM2.5','Norma PM10','Norma PM2.5'];
	data_temp_db[0]=['Godzina',  'Temperatura  [st. C]'];
	data_pm25_10_db[1]=[0,0,0,0,0];
	data_temp_db[1]=[0,0];
	
	setTimeout(function()
		{
			if(none==true)
			{
				document.getElementById("none_col").innerHTML = "Brak danych z tego dnia";
			}
			else
			{
				document.getElementById("none_col").innerHTML = "Dane z dnia: "+date;
			}
			
			data_pm25_10_col = google.visualization.arrayToDataTable(data_pm25_10_db);
			data_temp_col = google.visualization.arrayToDataTable(data_temp_db);
			chart_pm25_10_col.draw(data_pm25_10_col, options_pm25_10_col);
			chart_temp_col.draw(data_temp_col, options_temp_col);
		},500);
};
	  
	  