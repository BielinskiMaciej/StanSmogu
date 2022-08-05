<?php
header('Content-type:application/json');	
	require_once "connect.php";	
	
	
	$result_2 = mysqli_query ($connection, "SELECT * FROM standards WHERE idst=1" ) 
				or die ("SQL query error: $db_name");
	
	
	
	while ($db_raw2 = mysqli_fetch_array ($result_2)) 
	{
		$idst				= $db_raw2 [0];
		$ozone_stan 		= $db_raw2 [1];
		$ozone_info			= $db_raw2 [2];
		$ozone_alarm		= $db_raw2 [3];
		$no2_stan 			= $db_raw2 [4];
		$co2_stan			= $db_raw2 [5];
		$pm25_stan 			= $db_raw2 [6];
		$pm10_stan 			= $db_raw2 [7];
		$pm10_info 			= $db_raw2 [8];
		$pm10_alarm 		= $db_raw2 [9];
		
		$gau_green_yellow_ozone = $db_raw2 [10];
		$gau_yellow_red_ozone 	= $db_raw2 [11];
		$gau_green_yellow_no2	= $db_raw2 [12];
		$gau_yellow_red_no2  	= $db_raw2 [13];
		$gau_green_yellow_co2 	= $db_raw2 [14];
		$gau_yellow_red_co2 	= $db_raw2 [15];
		$gau_green_yellow_pm25 	= $db_raw2 [16];
		$gau_yellow_red_pm25 	= $db_raw2 [17];
		$gau_green_yellow_pm10	= $db_raw2 [18];
		$gau_yellow_red_pm10  	= $db_raw2 [19];
		
	}
	
	
	
	$data2=$ozone_stan.".".$ozone_info.".".$ozone_alarm.".".$no2_stan.".".$co2_stan.".".$pm25_stan.".".$pm10_stan.".".$pm10_info.".".$pm10_alarm."."
		.$gau_green_yellow_ozone.".".$gau_yellow_red_ozone."."
		.$gau_green_yellow_no2.".".$gau_yellow_red_no2."."
		.$gau_green_yellow_co2.".".$gau_yellow_red_co2."."
		.$gau_green_yellow_pm25.".".$gau_yellow_red_pm25."."
		.$gau_green_yellow_pm10.".".$gau_yellow_red_pm10;
	
	 echo ($data2);

	  
	  ?>
	