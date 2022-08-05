<?php
	header('Content-type:application/json');	
	require_once "connect.php";
	$ids=$_GET ['ids'];
	$ozone_stan=0;
	$no2_stan= 0;
	$co2_stan= 0;
	$pm25_stan= 0;
	$pm10_stan= 0;
	$i=0;
	
	$sql_dw1 = mysqli_query ($connection, "SELECT * FROM standards WHERE idst=1" ) 
				or die ("SQL query error: $db_name");
	
	while ($db_dw1 = mysqli_fetch_array ($sql_dw1)) 
	{
		$ozone_stan = $db_dw1 [1];
		$no2_stan 	= $db_dw1 [4];
		$co2_stan	= $db_dw1 [5];
		$pm25_stan 	= $db_dw1 [6];
		$pm10_stan 	= $db_dw1 [7];
	}
	
	$sql_dw2 = mysqli_query ($connection, "SELECT * FROM meteo_zam.measure_hour WHERE ids=".$ids." AND measure_date > DATE_SUB(NOW(),INTERVAL 24 hour) ORDER by measure_date ASC;") 
				or die ("SQL query error: $db_name");
	
	if (mysqli_fetch_array ($sql_dw2)!=null)
	{
		while ($db_dw2 = mysqli_fetch_array ($sql_dw2)) 
		{
			$ids			= $db_dw2 [1];
			$measure_date 	= $db_dw2 [2];
			$ozone 			= $db_dw2 [3];
			$no2 			= $db_dw2 [4];
			$co2 			= $db_dw2 [5];
			$pm2_5 			= $db_dw2 [6];
			$pm10 			= $db_dw2 [7];
			$temp 			= $db_dw2 [8];
			$wind_d 		= $db_dw2 [9];
			$wind_s 		= $db_dw2 [10];
			$wind_g 		= $db_dw2 [11];
			$ozone_temp 	= $db_dw2 [12];
			$ozone_hum 		= $db_dw2 [13];
			$no2_temp 		= $db_dw2 [14];
			$no2_hum 		= $db_dw2 [15];
			
			$sql_dw3 = mysqli_query ($connection, "SELECT * FROM sensors WHERE ids=$ids" ) 
						or die ("SQL query error: $db_name");
				
				while ($db_dw3 = mysqli_fetch_array ($sql_dw3)) 
				{
					$ids		= $db_dw3 [0];
					$is_ozone	= $db_dw3 [2];
					$is_no2		= $db_dw3 [3];
					$is_co2		= $db_dw3 [4];
					$is_pm25	= $db_dw3 [5];
					$is_pm10	= $db_dw3 [6];
					$is_temp	= $db_dw3 [7];
					$is_wind	= $db_dw3 [8];
				}
			
				$down_wykr=$down_wykr."/".$measure_date."|".$ozone."|".$ozone_stan."|".$no2."|".$no2_stan."|".$co2."|".$co2_stan."|".$pm2_5."|".$pm25_stan."|".$pm10."|".$pm10_stan."|".$temp."|".$wind_d."|".$wind_s."|".$wind_g."|".$ozone_temp."|".$ozone_hum."|".$no2_temp."|".$no2_hum."|".$is_ozone."|".$is_no2."|".$is_co2."|".$is_pm25."|".$is_pm10."|".$is_temp."|".$is_wind;
		}
	}
	else
	{
		
	$down_wykr="None";
	}
	
	
	echo ($down_wykr);
?>
	
	