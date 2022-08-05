var date_tech;
var is_ozone;
var ozone_temperature;
var ozone_humidity;
var ozone_err;
var is_no2;
var no2_temperature;
var no2_humidity;
var no2_err;
var vent;
var heater;
var user_data_tech2;
var user_data_tech;
		
function download_db_user_tech(ids)
{ 
	var xhttp15;
	xhttp15 = new XMLHttpRequest();
	xhttp15.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{
			user_data_tech = this.responseText;
			user_data_tech2=user_data_tech.split("|");
			date_tech			=user_data_tech2[0];
			is_ozone			=user_data_tech2[1];
			ozone_temperature	=user_data_tech2[2];
			ozone_humidity		=user_data_tech2[3];
			ozone_err			=user_data_tech2[4];
			is_no2				=user_data_tech2[5];
			no2_temperature		=user_data_tech2[6];
			no2_humidity		=user_data_tech2[7];
			no2_err				=user_data_tech2[8];
			vent				=user_data_tech2[9];
			heater				=user_data_tech2[10];
		}
	};			
	xhttp15.open("GET", "technicals_down.php?ids="+ids, true);
	xhttp15.send();				
};
			
function update_tech(ids)
{
	download_db_user_tech(ids);
				
	setTimeout(function()
		{
			document.getElementById("date_tech").innerHTML = date_tech;
					
			if(vent==0)
			{
				document.getElementById("vent").innerHTML = "ON";
			}
			else
			{
				document.getElementById("vent").innerHTML = "OFF";
			}
					
			if(heater==1)
			{
				document.getElementById("heater").innerHTML = "ON";
			}
			else
			{
				document.getElementById("heater").innerHTML = "OFF";
			}
			
			if (is_ozone==1)
			{
				document.getElementById("ozone_hum").innerHTML = ozone_humidity+" %";
				document.getElementById("ozone_temp").innerHTML = ozone_temperature+" &deg;C";
				
				if (ozone_err==1)
				{
					document.getElementById("ozone_err").innerHTML = "Błąd";
				}
				else
				{
					document.getElementById("ozone_err").innerHTML = "Działa";
				}
						
			}
			else
			{
				document.getElementById("ozone_hum").innerHTML = "N/A";
				document.getElementById("ozone_temp").innerHTML = "N/A";
				document.getElementById("ozone_err").innerHTML = "N/A";
			}
					
			if (is_ozone==1)
			{
				document.getElementById("no2_hum").innerHTML = no2_humidity+" %";
				document.getElementById("no2_temp").innerHTML = no2_temperature+" &deg;C";	
						
				if (no2_err==1)
				{
					document.getElementById("no2_err").innerHTML = "Błąd";
				}
				else
				{
					document.getElementById("no2_err").innerHTML = "Działa";
				}
			}
			else
			{
				document.getElementById("no2_hum").innerHTML = "N/A";
				document.getElementById("no2_temp").innerHTML = "N/A";
				document.getElementById("no2_err").innerHTML = "N/A";
			}	
		},250);
}		