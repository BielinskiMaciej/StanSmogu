<?php
	header('Content-type:application/json');	
	require_once "connect.php";
	$ids=$_GET ['ids'];
	$date=$_GET ['date'];
	$date1=$date." 00:00:00";
	$date2=$date." 23:59:59";
	$ozone_stan=0;
	$no2_stan=0;
	$co2_stan=0;
	$pm25_stan=0;
	$pm10_stan=0;
	$sql_dsw1 = mysqli_query ($connection, "SELECT * FROM standards WHERE idst=1" ) 
				or die ("SQL query error: $db_name");
	
	while ($db_dsw1 = mysqli_fetch_array ($sql_dsw1)) 
	{
		$ozone_stan = $db_dsw1 [1];
		$no2_stan 	= $db_dsw1 [4];
		$co2_stan	= $db_dsw1 [5];
		$pm25_stan 	= $db_dsw1 [6];
		$pm10_stan 	= $db_dsw1 [7];
	}
	
	$sql_dsw2 = mysqli_query ($connection, "SELECT * FROM meteo_zam.measure_hour WHERE ids=".$ids." AND measure_date > '".$date1."' AND measure_date < '".$date2."' ORDER by measure_date ASC;") 
				or die ("SQL query error: $db_name");
	
	if(mysqli_fetch_array ($sql_dsw2)!=null)
	{
		while ($db_dsw2 = mysqli_fetch_array ($sql_dsw2)) 
		{
			$ids			= $db_dsw2 [1];
			$measure_date 	= $db_dsw2 [2];
			$ozone 			= $db_dsw2 [3];
			$no2 			= $db_dsw2 [4];
			$co2 			= $db_dsw2 [5];
			$pm2_5 			= $db_dsw2 [6];
			$pm10 			= $db_dsw2 [7];
			$temp 			= $db_dsw2 [8];
			$wind_d 		= $db_dsw2 [9];
			$wind_s 		= $db_dsw2 [10];
			$wind_g 		= $db_dsw2 [11];
			$ozone_temp 	= $db_dsw2 [12];
			$ozone_hum 		= $db_dsw2 [13];
			$no2_temp 		= $db_dsw2 [14];
			$no2_hum 		= $db_dsw2 [15];
			
			$sql_dsw3 = mysqli_query ($connection, "SELECT * FROM sensors WHERE ids=$ids" ) 
						or die ("SQL query error: $db_name");
			
			while ($db_dsw3 = mysqli_fetch_array ($sql_dsw3)) 
			{
				$ids		= $db_dsw3 [0];
				$is_ozone	= $db_dsw3 [2];
				$is_no2		= $db_dsw3 [3];
				$is_co2		= $db_dsw3 [4];
				$is_pm25	= $db_dsw3 [5];
				$is_pm10	= $db_dsw3 [6];
				$is_temp	= $db_dsw3 [7];
				$is_wind	= $db_dsw3 [8];
			}
			
			$down_sel_wykr=$down_sel_wykr."/".$measure_date."|".$ozone."|".$ozone_stan."|".$no2."|".$no2_stan."|".$co2."|".$co2_stan."|".$pm2_5."|".$pm25_stan."|".$pm10."|".$pm10_stan."|".$temp."|".$wind_d."|".$wind_s."|".$wind_g."|".$ozone_temp."|".$ozone_hum."|".$no2_temp."|".$no2_hum."|".$is_ozone."|".$is_no2."|".$is_co2."|".$is_pm25."|".$is_pm10."|".$is_temp."|".$is_wind;
		}
	}
	else
	{
		$down_sel_wykr="None"; 
	}
	echo ($down_sel_wykr);
?>
	
	