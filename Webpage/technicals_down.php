<?php
	header('Content-type:application/json');	
	require_once "connect.php";
	
	$ids=$_GET ['ids'];
	$sql_td1 = mysqli_query ($connection, "SELECT * FROM meteo_zam.errors WHERE ids=$ids") 
				or die ("SQL query error: $db_name");
	
			
	while ($db_td1 = mysqli_fetch_array ($sql_td1)) 
	{
		$ide		= $db_td1 [0];
		$ids 		= $db_td1 [1];
		$vent 		= $db_td1 [2];
		$ozone_err	= $db_td1 [3];
		$no2_err 	= $db_td1 [4];
		$heater 	= $db_td1 [5];
		
		$sql_td2 = mysqli_query ($connection, "SELECT * FROM meteo_zam.measure_live WHERE ids=$ids" ) 
						or die ("SQL query error: $db_name");
			
				while ($db_td2 = mysqli_fetch_array ($sql_td2)) 
				{
					$date_tech			= $db_td2 [2];
					$ozone_temperature	= $db_td2 [12];
					$ozone_humidity		= $db_td2 [13];
					$no2_temperature	= $db_td2 [14];
					$no2_humidity		= $db_td2 [15];
				}
		
		$sql_td3 = mysqli_query ($connection, "SELECT * FROM sensors WHERE ids=$ids" ) 
						or die ("SQL query error: $db_name");
			
				while ($db_td3 = mysqli_fetch_array ($sql_td3)) 
				{
					$ids		= $db_td3 [0];
					$is_ozone	= $db_td3 [2];
					$is_no2		= $db_td3 [3];
					$is_co2		= $db_td3 [4];
					$is_pm25	= $db_td3 [5];
					$is_pm10	= $db_td3 [6];
					$is_temp	= $db_td3 [7];
					$is_wind	= $db_td3 [8];
				}
	}
	
	$technicals_down=$date_tech."|".$is_ozone."|".$ozone_temperature."|".$ozone_humidity."|".$ozone_err."|".$is_no2."|".$no2_temperature."|".$no2_humidity."|".$no2_err."|".$vent."|".$heater;
	echo ($technicals_down);
?>
	