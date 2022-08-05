var sensor=[];
var data2;
var sensor_data=[];
var range=[];
var ids=[];
var date=[];
var date_install=[];
var date2=[];
var is_ozone=[];
var is_no2=[];
var is_co2=[];
var is_pm25=[];
var is_pm10=[];
var is_temp=[];
var is_wind=[];
var idu=[];
var city=[];
var street=[];
var number=[];
var coordinates1=[];
var coordinates2=[];		
var name=[];
var company=[];
var db_data_state;
var db_data_state2 = [];
var db_data_state3 =[];
var ids_d 		=[];
var ozone_data	=[];
var no2_data	=[];
var co2_data	=[];
var pm25_data	=[];
var pm10_data	=[];
var ozone_data2	=[];
var no2_data2	=[];
var co2_data2	=[];
var pm25_data2	=[];
var pm10_data2	=[];
var temp_data	=[];
var wind_d		=[];
var wind_s		=[];
var wind_g		=[];
var color		=[];
var grade		=[];
var grade2		=[];
var icon =[];
var sensor_icon;
var marker =[];
var start =1;
var clicked=0;
var clicked_sens;
var download;
var ids_prev=0;
var state=[];
var count=0;
			
var color_bzl="#FF0000";
var color_zl="#FF4E00";
var color_do="#FFB91D";
var color_um="#FFFF14";
var color_db="#A0FF64";
var color_bdb="#31FF32";
var color_nd="#B8B8B8";
			
var icon_bzl="icon/sensor_bzl.png";
var icon_zl="icon/sensor_zl.png";
var icon_do="icon/sensor_do.png";
var icon_um="icon/sensor_um.png";
var icon_db="icon/sensor_db.png";
var icon_bdb="icon/sensor_bdb.png";
var icon_nd="icon/sensor_nd.png";

var prev_icon=[];
			
function download_db_state()
{ 
	var xhttp; 
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{
			db_data_state = this.responseText;
			db_data_state2=db_data_state.split("|");
			for (i=0;i<count;i++)
			{
				db_data_state3[i] = db_data_state2[i].split("/")
						
				ids_d[i]	=db_data_state3[i][0];
				state[i]	=db_data_state3[i][1];
				date[i]		=db_data_state3[i][2];
			}
		}
	};
						
	xhttp.open("GET", "map_state.php", true);	
	xhttp.send();
						
}

function change_color()
{
	for (i=1;i<=count;i++)
	{	
		
			switch (state[i-1])
			{
				case ("Bardzo zła"):
					color[i] = color_bzl;
					icon[i]= icon_bzl;
					break;
							
				case ("Zła"):
					color[i] = color_zl;
					icon[i]= icon_zl;
					break;
							
				case ("Dostateczna"):
					color[i] = color_do;
					icon[i]= icon_do;
					break;
								
				case ("Umiarkowana"):
					color[i] = color_um;
					icon[i]= icon_um;
					break;
								
				case ("Dobra"):
					color[i] = color_db;
					icon[i]= icon_db;
					break;
								
				case ("Bardzo dobra"):
					color[i] = color_bdb;
					icon[i]= icon_bdb;
					break;
								
				case ("Brak oceny"):
					color[i] = color_nd;
					icon[i]= icon_nd;
					break;
							
				default:
					color[i] = color_nd;
					icon[i]= icon_nd;
			}
			
			if (typeof range[i] !== 'undefined') 
			{
				if (prev_icon[i]!= icon[i])
				{
					marker[i] = L.marker
					([ 
						coordinates1[i-1], 
						coordinates2[i-1]
					],
					{
						myLibTitle: i,
					}).addTo(mymap);
								
					marker[i].on('click', function OnClick(e)
					{
						clicked_sens=e.sourceTarget.options.myLibTitle;
						showMeasure(clicked_sens);
					});
					sensor_icon = L.icon
					({
						iconUrl: icon[i],
						iconSize:     [30, 30],
						iconAnchor:   [15,15],
					});
							
					marker[i].setIcon(sensor_icon);
					range[i].setStyle({fillColor: color[i]});
				}
				
				
				
				
			}
			prev_icon[i] = icon[i];
	};
					
}

if (start==1)
{
	color = [color_nd,color_nd,color_nd,color_nd];
	start=0;
}


download_db_state();
53.12338884949472, 18.007898940415195
	//centrum polski: lon: 19.480312,lat: 52.069320 zoom 7
	//centrum bdg:  lon: 18.007898940415195, lat: 53.12338884949472, zoom 13
var mymap = L.map('mapid',
			{zoomControl: false}).setView({
									lon: 18.007898940415195, 
									lat: 53.12338884949472}, 
									13);

L.tileLayer('https://api.mapbox.com/styles/v1/X', 
			{
				maxZoom: 18,
				attribution: 'Maciej Bieliński &copy; Map by <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			}).addTo(mymap);

			
new L.Control.Zoom({ position: 'bottomright' }).addTo(mymap);

setTimeout(function draw_sensors()
			{
				for (i=1;i<=count;i++)
				{
					range[i] = L.circle(
					[ 
						coordinates1[i-1], 
						coordinates2[i-1]
					],  
					{
						myLibTitle: i,
						radius: 300,
						fillColor: color[i],
						fillOpacity: 0.5,
						stroke: false,
					}).addTo(mymap);
					
					var svg = mymap.getPanes().overlayPane.firstChild,
							svgFilter = document.createElementNS('http://www.w3.org/2000/svg', 'filter'),
							svgBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
					svgFilter.setAttribute('id', 'blur');
					svgFilter.setAttribute('x', '-100%');
					svgFilter.setAttribute('y', '-100%');
					svgFilter.setAttribute('width', '500%');
					svgFilter.setAttribute('height', '500%');
					svgBlur.setAttribute('stdDeviation', 3); 
					svgFilter.appendChild(svgBlur);
					svg.appendChild(svgFilter);
					range[i]._path.setAttribute('filter', 'url(#blur)');
					range[i].on('click', function OnClick(e)
					{
						clicked_sens=e.sourceTarget.options.myLibTitle;
						showMeasure(clicked_sens);
					});		
				}
				drawChart();
				drawVisualization();
				change_color();
			},1100);

var download_db_state2 = setInterval(() => {download_db_state()}, 60000);
var change_color2 = setInterval(() => {change_color()}, 60000);

		
function showMeasure(ids)		
{	
	document.getElementsByName("setDate")[0].setAttribute('min', date_install[ids-1]);
	document.getElementsByName("ids_sel")[0].setAttribute('value', ids);
				
	if (clicked==1 & ids_prev==ids) 
	{
					
		close_descr();
		clearInterval(download);
		clearInterval(download2);
		clearInterval(descr);
		clicked=0;
	} 
	else if (clicked==0 | ids_prev!=ids)
	{
		open_descr();
		set_data_chart(ids);
		set_data_col(ids);
		set_descr(ids);
					
		if (ids!=ids_prev & ids_prev!=0)
		{	 
			clearInterval(download);
			clearInterval(download2);
			clearInterval(descr);
		}
						
		download = setInterval(() => {set_data_chart(ids)}, 60000);
		download2 = setInterval(() => { update_col(ids)},60000);
		descr = setInterval(() =>  {set_descr(ids)}, 60000);
						
		ids_prev=ids;
		clicked=1;
							
	}
};
			
function set_descr(ids)
{
	document.getElementById("city").innerHTML = city[ids-1];
	document.getElementById("street").innerHTML = "ul. "+street[ids-1];
	document.getElementById("company").innerHTML = "Właściciel czujnika: "+company[ids-1];
	document.getElementById("date").innerHTML = "Ostatni pomiar: "+date[ids-1];
	document.getElementById("state").innerHTML = "Jakość powietrza: "+state[ids-1];
}
			

				