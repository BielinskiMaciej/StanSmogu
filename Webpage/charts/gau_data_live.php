<?php
	 
	header('Content-type:application/json');	
	require_once "connect.php";
	$ids=$_GET ['ids'];


	$result_1 = mysqli_query ($connection, "SELECT ids,ozone,no2,co2,pm2_5,pm10,temperature,wind_direction,wind_speed,wind_gust,ozone_temperature,ozone_humidity,no2_temperature,no2_humidity FROM meteo_zam.measure_live WHERE ids=$ids ORDER by measure_date DESC LIMIT 1") 
				or die ("SQL query error: $db_name");
	
			
	while ($db_raw = mysqli_fetch_array ($result_1)) 
	{
		$ids			= $db_raw [0];
		$ozone 			= $db_raw [1];
		$no2 			= $db_raw [2];
		$co2 			= $db_raw [3];
		$pm25 			= $db_raw [4];
		$pm10 			= $db_raw [5];
		$temp 			= $db_raw [6];
		$wind_d 		= $db_raw [7];
		$wind_s 		= $db_raw [8];
		$wind_g 		= $db_raw [9];
		$ozone_temp 	= $db_raw [10];
		$ozone_hum 		= $db_raw [11];
		$no2_temp 		= $db_raw [12];
		$no2_hum 		= $db_raw [13];
		
		
		
		$result_13 = mysqli_query ($connection, "SELECT * FROM sensors WHERE ids=$ids" ) 
						or die ("SQL query error: $db_name");
			
				while ($db_raw23 = mysqli_fetch_array ($result_13)) 
				{
					$ids				= $db_raw23 [0];
					$is_ozone			= $db_raw23 [2];
					$is_no2				= $db_raw23 [3];
					$is_co2				= $db_raw23 [4];
					$is_pm25			= $db_raw23 [5];
					$is_pm10			= $db_raw23 [6];
					$is_temp			= $db_raw23 [7];
					$is_wind			= $db_raw23 [8];
				}
		
		
	
	}
	
	
	$data=$is_ozone."|".$ozone."|".$is_no2."|".$no2."|".$is_co2."|".$co2."|".$is_pm25."|".$pm25."|".$is_pm10."|".$pm10."|".$is_temp."|".$temp."|".$is_wind."|".$wind_d."|".$wind_s."|".$wind_g."|".$ozone_temp."|".$ozone_hum."|".$no2_temp."|".$no2_hum;
	
	 echo ($data);
	
	  
	  ?>
	