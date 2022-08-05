<?php
	header('Content-type:application/json');	
	require_once "connect.php";
	$ids=$_GET ['ids'];

	$sql_gd24_1 = mysqli_query ($connection, "SELECT ids,round(avg(ozone),0),round(avg(no2),0),round(avg(co2),0),round(avg(pm2_5),0),round(avg(pm10),0),round(avg(temperature),1),round(avg(wind_direction),0),round(avg(wind_speed),0),round(avg(wind_gust),0),round(avg(ozone_temperature),1),round(avg(ozone_humidity),0),round(avg(no2_temperature),1),round(avg(no2_humidity),0) FROM meteo_zam.measure_hour WHERE measure_date > DATE_SUB(NOW(),INTERVAL 24 hour) AND ids=$ids") 
				or die ("SQL query error: $db_name");
	
			
	while ($db_gd24_1 = mysqli_fetch_array ($sql_gd24_1)) 
	{
		$ids			= $db_gd24_1 [0];
		$ozone 			= $db_gd24_1 [1];
		$no2 			= $db_gd24_1 [2];
		$co2 			= $db_gd24_1 [3];
		$pm25 			= $db_gd24_1 [4];
		$pm10 			= $db_gd24_1 [5];
		$temp 			= $db_gd24_1 [6];
		$wind_d 		= $db_gd24_1 [7];
		$wind_s 		= $db_gd24_1 [8];
		$wind_g 		= $db_gd24_1 [9];
		$ozone_temp 	= $db_gd24_1 [10];
		$ozone_hum 		= $db_gd24_1 [11];
		$no2_temp 		= $db_gd24_1 [12];
		$no2_hum 		= $db_gd24_1 [13];
		
		$sql_gd24_2 = mysqli_query ($connection, "SELECT * FROM sensors WHERE ids=$ids" ) 
						or die ("SQL query error: $db_name");
			
		while ($db_gd24_2 = mysqli_fetch_array ($sql_gd24_2)) 
		{
			$ids		=$db_gd24_2 [0];
			$is_ozone	= $db_gd24_2 [2];
			$is_no2		= $db_gd24_2 [3];
			$is_co2		= $db_gd24_2 [4];
			$is_pm25	= $db_gd24_2 [5];
			$is_pm10	= $db_gd24_2 [6];
			$is_temp	= $db_gd24_2 [7];
			$is_wind	= $db_gd24_2 [8];
		}
	}
	
	$gau_data_24=$is_ozone."|".$ozone."|".$is_no2."|".$no2."|".$is_co2."|".$co2."|".$is_pm25."|".$pm25."|".$is_pm10."|".$pm10."|".$is_temp."|".$temp."|".$is_wind."|".$wind_d."|".$wind_s."|".$wind_g."|".$ozone_temp."|".$ozone_hum."|".$no2_temp."|".$no2_hum;
	
	echo ($gau_data_24);	
?>
	