<?php
	header('Content-type:application/json');	
	require_once "connect.php";	
	
	$sql_gs1 = mysqli_query ($connection, "SELECT * FROM standards WHERE idst=1" ) 
				or die ("SQL query error: $db_name");
	
	while ($db_gs1 = mysqli_fetch_array ($sql_gs1)) 
	{
		$idst				= $db_gs1[0];
		$ozone_stan 		= $db_gs1[1];
		$ozone_info			= $db_gs1[2];
		$ozone_alarm		= $db_gs1[3];
		$no2_stan 			= $db_gs1[4];
		$co2_stan			= $db_gs1[5];
		$pm25_stan 			= $db_gs1[6];
		$pm10_stan 			= $db_gs1[7];
		$pm10_info 			= $db_gs1[8];
		$pm10_alarm 		= $db_gs1[9];
		$gau_green_yellow_ozone = $db_gs1[10];
		$gau_yellow_red_ozone 	= $db_gs1[11];
		$gau_green_yellow_no2	= $db_gs1[12];
		$gau_yellow_red_no2  	= $db_gs1[13];
		$gau_green_yellow_co2 	= $db_gs1[14];
		$gau_yellow_red_co2 	= $db_gs1[15];
		$gau_green_yellow_pm25 	= $db_gs1[16];
		$gau_yellow_red_pm25 	= $db_gs1[17];
		$gau_green_yellow_pm10	= $db_gs1[18];
		$gau_yellow_red_pm10  	= $db_gs1[19];
	}
	
	$db_standards=$ozone_stan.".".$ozone_info.".".$ozone_alarm."."
		.$no2_stan.".".$co2_stan.".".$pm25_stan."."
		.$pm10_stan.".".$pm10_info.".".$pm10_alarm."."
		.$gau_green_yellow_ozone."."	.$gau_yellow_red_ozone."."
		.$gau_green_yellow_no2."."		.$gau_yellow_red_no2."."
		.$gau_green_yellow_co2."."		.$gau_yellow_red_co2."."
		.$gau_green_yellow_pm25."."		.$gau_yellow_red_pm25."."
		.$gau_green_yellow_pm10."."		.$gau_yellow_red_pm10;
	
	 echo ($db_standards);
?>
	