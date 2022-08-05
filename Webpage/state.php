<?php
	header('Content-type:application/json');
	require_once "connect.php";	
	
	$ozone_data=0;
	$ozone_nd=0;
	$ozone_bdb=0;
	$ozone_db=0;
	$ozone_um=0;
	$ozone_do=0;
	$ozone_zl=0;
	$ozone_bzl=0;
	$no2_data=0;
	$no2_nd=0;
	$no2_bdb=0;
	$no2_db=0;
	$no2_um=0;
	$no2_do=0;
	$no2_zl=0;
	$no2_bzl=0;
	$co2_data=0;
	$co2_nd=0;
	$co2_bdb=0;
	$co2_db=0;
	$co2_um=0;
	$co2_do=0;
	$co2_zl=0;
	$co2_bzl=0;
	$pm25_data=0;
	$pm25_nd=0;
	$pm25_bdb=0;
	$pm25_db=0;
	$pm25_um=0;
	$pm25_do=0;
	$pm25_zl=0;
	$pm25_bzl=0;
	$pm10_data=0;
	$pm10_nd=0;
	$pm10_bdb=0;
	$pm10_db=0;
	$pm10_um=0;
	$pm10_do=0;
	$pm10_zl=0;
	$pm10_bzl=0;
	$bdb_db_ozone=0;
	$db_um_ozone=0;
	$um_do_ozone=0;
	$do_zl_ozone=0;
	$zl_bzl_ozone=0;
	$bdb_db_no2=0;
	$db_um_no2=0;
	$um_do_no2=0;
	$do_zl_no2=0;
	$zl_bzl_no2=0;
	$bdb_db_co2=0;
	$db_um_co2=0;
	$um_do_co2=0;
	$do_zl_co2=0;
	$zl_bzl_co2=0;
	$bdb_db_pm25=0;
	$db_um_pm25=0;
	$um_do_pm25=0;
	$do_zl_pm25=0;
	$zl_bzl_pm25=0;
	$bdb_db_pm10=0;
	$db_um_pm10=0;
	$um_do_pm10=0;
	$do_zl_pm10=0;
	$zl_bzl_pm10=0;
	$state="";
	$count=0;
	
	$sql_s1 = mysqli_query ($connection, "SELECT COUNT(ids) FROM sensors" ) 
				or die ("SQL query error: $db_name");
	
	while ($db_s1 = mysqli_fetch_array ($sql_s1)) 
	{
		$count				= $db_s1 [0];
	}
	
	$sql_s2 = mysqli_query ($connection,'SELECT * FROM meteo_zam.standards') 
				or die ("SQL query error: $db_name");
	
	while ($db_s2 = mysqli_fetch_array ($sql_s2)) 
	{
		$ozone_stan 	= $db_s2 [1];
		$ozone_info		= $db_s2 [2];
		$ozone_alarm	= $db_s2 [3];
		$no2_stan 		= $db_s2 [4];
		$co2_stan		= $db_s2 [5];
		$pm25_stan 		= $db_s2 [6];
		$pm10_stan 		= $db_s2 [7];
		$pm10_info 		= $db_s2 [8];
		$pm10_alarm 	= $db_s2 [9];
		$bdb_db_ozone	= $db_s2 [20];
		$db_um_ozone	= $db_s2 [21];
		$um_do_ozone	= $db_s2 [22];
		$do_zl_ozone	= $db_s2 [23];
		$zl_bzl_ozone	= $db_s2 [24];
		$bdb_db_no2		= $db_s2 [25];
		$db_um_no2		= $db_s2 [26];
		$um_do_no2		= $db_s2 [27];
		$do_zl_no2		= $db_s2 [28];
		$zl_bzl_no2		= $db_s2 [29];
		$bdb_db_co2		= $db_s2 [30];
		$db_um_co2		= $db_s2 [31];
		$um_do_co2		= $db_s2 [32];
		$do_zl_co2		= $db_s2 [33];
		$zl_bzl_co2		= $db_s2 [34];
		$bdb_db_pm25	= $db_s2 [35];
		$db_um_pm25		= $db_s2 [36];
		$um_do_pm25		= $db_s2 [37];
		$do_zl_pm25		= $db_s2 [38];
		$zl_bzl_pm25	= $db_s2 [39];
		$bdb_db_pm10	= $db_s2 [40];
		$db_um_pm10		= $db_s2 [41];
		$um_do_pm10		= $db_s2 [42];
		$do_zl_pm10		= $db_s2 [43];
		$zl_bzl_pm10	= $db_s2 [44];
	}
	
	for ($i=1;$i<=$count;$i++)
	{
		$sql_s3 = mysqli_query ($connection, "SELECT ids,round(avg(ozone),0),round(avg(no2),0),round(avg(co2),0),round(avg(pm2_5),0),round(avg(pm10),0),round(avg(temperature),1),round(avg(wind_direction),0),round(avg(wind_speed),0),round(avg(wind_gust),0),measure_date FROM meteo_zam.measure_live WHERE measure_date > DATE_SUB(NOW(),INTERVAL 1 hour) AND ids=".$i ) 
					or die ("SQL query error: $db_name");
		
		
		while ($db_s3 = mysqli_fetch_array ($sql_s3)) 
		{
			$ids			= $db_s3 [0];
			$ozone 			= $db_s3 [1];
			$no2			= $db_s3 [2];
			$co2			= $db_s3 [3];
			$pm25 			= $db_s3 [4];
			$pm10			= $db_s3 [5];
			$temperature 	= $db_s3 [6];
			$wind_direction = $db_s3 [7];
			$wind_speed 	= $db_s3 [8];
			$wind_gust 		= $db_s3 [9];
			
			if($ids!=null)
			{
				$sql_s4 = mysqli_query ($connection, "SELECT measure_date FROM meteo_zam.measure_live WHERE ids=$ids ORDER by measure_date DESC LIMIT 1" ) 
								or die ("SQL query error: $db_name");
				while ($db_s4 = mysqli_fetch_array ($sql_s4)) 
				{
					$date	= $db_s4 [0];
				}
			
				$sql_s5 = mysqli_query ($connection, "SELECT * FROM sensors WHERE ids=$ids" ) 
						or die ("SQL query error: $db_name");
			
				while ($db_s5 = mysqli_fetch_array ($sql_s5)) 
				{
					$ids		= $db_s5 [0];
					$is_ozone	= $db_s5 [2];
					$is_no2		= $db_s5 [3];
					$is_co2		= $db_s5 [4];
					$is_pm25	= $db_s5 [5];
					$is_pm10	= $db_s5 [6];
					$is_temp	= $db_s5 [7];
					$is_wind	= $db_s5 [8];
				
					if($is_ozone==1)
					{
						$ozone_data = $ozone;
					}
					else
					{
						$ozone_data=-1;
					}
					
					if($is_no2==1)
					{
						$no2_data = $no2;
					}
					else
					{
						$no2_data=-1;
					}
					
					if($is_co2==1)
					{
						$co2_data = $co2;
					}
					else
					{
						$co2_data=-1;
					}
					
					if($is_pm25==1)
					{
						$pm25_data = $pm25;
					}
					else
					{
						$pm25_data=-1;
					}
					
					if($is_pm10==1)
					{
						$pm10_data = $pm10;
					}
					else
					{
						$pm10_data=-1;
					}
				}
				
				if ($ozone_data==-1)
				{
					$ozone_nd=true;
					$ozone_bdb=false;
					$ozone_db=false;
					$ozone_um=false;
					$ozone_do=false;
					$ozone_zl=false;
					$ozone_bzl=false;
				}
				else if ($ozone_data>0 && $ozone_data<=$bdb_db_ozone)
				{
					$ozone_nd=false;
					$ozone_bdb=true;
					$ozone_db=false;
					$ozone_um=false;
					$ozone_do=false;
					$ozone_zl=false;
					$ozone_bzl=false;
				}
				else if ($ozone_data>$bdb_db_ozone && $ozone_data<=$db_um_ozone)
				{
					$ozone_nd=false;
					$ozone_bdb=false;
					$ozone_db=true;
					$ozone_um=false;
					$ozone_do=false;
					$ozone_zl=false;
					$ozone_bzl=false;
				}
				else if($ozone_data>$db_um_ozone && $ozone_data<=$um_do_ozone)
				{
					$ozone_nd=false;
					$ozone_bdb=false;
					$ozone_db=false;
					$ozone_um=true;
					$ozone_do=false;
					$ozone_zl=false;
					$ozone_bzl=false;
				}
				else if($ozone_data>$um_do_ozone && $ozone_data<=$do_zl_ozone)
				{
					$ozone_nd=false;
					$ozone_bdb=false;
					$ozone_db=false;
					$ozone_um=false;
					$ozone_do=true;
					$ozone_zl=false;
					$ozone_bzl=false;
				}
				else if($ozone_data>$do_zl_ozone && $ozone_data<=$zl_bzl_ozone)
				{
					$ozone_nd=false;
					$ozone_bdb=false;
					$ozone_db=false;
					$ozone_um=false;
					$ozone_do=false;
					$ozone_zl=true;
					$ozone_bzl=false;
				}
				else if($ozone_data>$zl_bzl_ozone)
				{
					$ozone_nd=false;
					$ozone_bdb=false;
					$ozone_db=false;
					$ozone_um=false;
					$ozone_do=false;
					$ozone_zl=false;
					$ozone_bzl=true;
				}
				
				//no2 sprawdzanie
				
				if ($no2_data==-1)
				{
					$no2_nd=true;
					$no2_bdb=false;
					$no2_db=false;
					$no2_um=false;
					$no2_do=false;
					$no2_zl=false;
					$no2_bzl=false;
				}
				else if ($no2_data>0 && $no2_data<=$bdb_db_no2)
				{
					$no2_nd=false;
					$no2_bdb=true;
					$no2_db=false;
					$no2_um=false;
					$no2_do=false;
					$no2_zl=false;
					$no2_bzl=false;
				}
				else if ($no2_data>$bdb_db_no2 && $no2_data<=$db_um_no2)
				{
					$no2_nd=false;
					$no2_bdb=false;
					$no2_db=true;
					$no2_um=false;
					$no2_do=false;
					$no2_zl=false;
					$no2_bzl=false;
				}
				else if($no2_data>$db_um_no2 && $no2_data<=$um_do_no2)
				{
					$no2_nd=false;
					$no2_bdb=false;
					$no2_db=false;
					$no2_um=true;
					$no2_do=false;
					$no2_zl=false;
					$no2_bzl=false;
				}
				else if($no2_data>$um_do_no2 && $no2_data<=$do_zl_no2)
				{
					$no2_nd=false;
					$no2_bdb=false;
					$no2_db=false;
					$no2_um=false;
					$no2_do=true;
					$no2_zl=false;
					$no2_bzl=false;
				}
				else if($no2_data>$do_zl_no2 && $no2_data<=$zl_bzl_no2)
				{
					$no2_nd=false;
					$no2_bdb=false;
					$no2_db=false;
					$no2_um=false;
					$no2_do=false;
					$no2_zl=true;
					$no2_bzl=false;
				}
				else if($no2_data>$zl_bzl_no2)
				{
					$no2_nd=false;
					$no2_bdb=false;
					$no2_db=false;
					$no2_um=false;
					$no2_do=false;
					$no2_zl=false;
					$no2_bzl=true;
				}
				
				//co2 sprawdzanie
				
				if ($co2_data==-1)
				{
					$co2_nd=true;
					$co2_bdb=false;
					$co2_db=false;
					$co2_um=false;
					$co2_do=false;
					$co2_zl=false;
					$co2_bzl=false;
				}
				else if ($co2_data>0 && $co2_data<=$bdb_db_co2)
				{
					$co2_nd=false;
					$co2_bdb=true;
					$co2_db=false;
					$co2_um=false;
					$co2_do=false;
					$co2_zl=false;
					$co2_bzl=false;
				}
				else if ($co2_data>$bdb_db_co2 && $co2_data<=$db_um_co2)
				{
					$co2_nd=false;
					$co2_bdb=false;
					$co2_db=true;
					$co2_um=false;
					$co2_do=false;
					$co2_zl=false;
					$co2_bzl=false;
				}
				else if($co2_data>$db_um_co2 && $co2_data<=$um_do_co2)
				{
					$co2_nd=false;
					$co2_bdb=false;
					$co2_db=false;
					$co2_um=true;
					$co2_do=false;
					$co2_zl=false;
					$co2_bzl=false;
				}
				else if($co2_data>$um_do_co2 && $co2_data<=$do_zl_co2)
				{
					$co2_nd=false;
					$co2_bdb=false;
					$co2_db=false;
					$co2_um=false;
					$co2_do=true;
					$co2_zl=false;
					$co2_bzl=false;
				}
				else if($co2_data>$do_zl_co2 && $co2_data<=$zl_bzl_co2)
				{
					$co2_nd=false;
					$co2_bdb=false;
					$co2_db=false;
					$co2_um=false;
					$co2_do=false;
					$co2_zl=true;
					$co2_bzl=false;
				}
				else if($co2_data>$zl_bzl_co2)
				{
					$co2_nd=false;
					$co2_bdb=false;
					$co2_db=false;
					$co2_um=false;
					$co2_do=false;
					$co2_zl=false;
					$co2_bzl=true;
				}
				
				//pm25 sprawdzanie
				
				if ($pm25_data==-1)
				{
					$pm25_nd=true;
					$pm25_bdb=false;
					$pm25_db=false;
					$pm25_um=false;
					$pm25_do=false;
					$pm25_zl=false;
					$pm25_bzl=false;
				}
				else if ($pm25_data>0 && $pm25_data<=$bdb_db_pm25)
				{
					$pm25_nd=false;
					$pm25_bdb=true;
					$pm25_db=false;
					$pm25_um=false;
					$pm25_do=false;
					$pm25_zl=false;
					$pm25_bzl=false;
				}
				else if ($pm25_data>$bdb_db_pm25 && $pm25_data<=$db_um_pm25)
				{
					$pm25_nd=false;
					$pm25_bdb=false;
					$pm25_db=true;
					$pm25_um=false;
					$pm25_do=false;
					$pm25_zl=false;
					$pm25_bzl=false;
				}
				else if($pm25_data>$db_um_pm25 && $pm25_data<=$um_do_pm25)
				{
					$pm25_nd=false;
					$pm25_bdb=false;
					$pm25_db=false;
					$pm25_um=true;
					$pm25_do=false;
					$pm25_zl=false;
					$pm25_bzl=false;
				}
				else if($pm25_data>$um_do_pm25 && $pm25_data<=$do_zl_pm25)
				{
					$pm25_nd=false;
					$pm25_bdb=false;
					$pm25_db=false;
					$pm25_um=false;
					$pm25_do=true;
					$pm25_zl=false;
					$pm25_bzl=false;
				}
				else if($pm25_data>$do_zl_pm25 && $pm25_data<=$zl_bzl_pm25)
				{
					$pm25_nd=false;
					$pm25_bdb=false;
					$pm25_db=false;
					$pm25_um=false;
					$pm25_do=false;
					$pm25_zl=true;
					$pm25_bzl=false;
				}
				else if($pm25_data>$zl_bzl_pm25)
				{
					$pm25_nd=false;
					$pm25_bdb=false;
					$pm25_db=false;
					$pm25_um=false;
					$pm25_do=false;
					$pm25_zl=false;
					$pm25_bzl=true;
				}
				
				//pm10 sprawdzanie
				
				if ($pm10_data==-1)
				{
					$pm10_nd=true;
					$pm10_bdb=false;
					$pm10_db=false;
					$pm10_um=false;
					$pm10_do=false;
					$pm10_zl=false;
					$pm10_bzl=false;
				}
				else if ($pm10_data>0 && $pm10_data<=$bdb_db_pm10)
				{
					$pm10_nd=false;
					$pm10_bdb=true;
					$pm10_db=false;
					$pm10_um=false;
					$pm10_do=false;
					$pm10_zl=false;
					$pm10_bzl=false;
				}
				else if ($pm10_data>$bdb_db_pm10 && $pm10_data<=$db_um_pm10)
				{
					$pm10_nd=false;
					$pm10_bdb=false;
					$pm10_db=true;
					$pm10_um=false;
					$pm10_do=false;
					$pm10_zl=false;
					$pm10_bzl=false;
				}
				else if($pm10_data>$db_um_pm10 && $pm10_data<=$um_do_pm10)
				{
					$pm10_nd=false;
					$pm10_bdb=false;
					$pm10_db=false;
					$pm10_um=true;
					$pm10_do=false;
					$pm10_zl=false;
					$pm10_bzl=false;
				}
				else if($pm10_data>$um_do_pm10 && $pm10_data<=$do_zl_pm10)
				{
					$pm10_nd=false;
					$pm10_bdb=false;
					$pm10_db=false;
					$pm10_um=false;
					$pm10_do=true;
					$pm10_zl=false;
					$pm10_bzl=false;
				}
				else if($pm10_data>$do_zl_pm10 && $pm10_data<=$zl_bzl_pm10)
				{
					$pm10_nd=false;
					$pm10_bdb=false;
					$pm10_db=false;
					$pm10_um=false;
					$pm10_do=false;
					$pm10_zl=true;
					$pm10_bzl=false;
				}
				else if($pm10_data>$zl_bzl_pm10)
				{
					$pm10_nd=false;
					$pm10_bdb=false;
					$pm10_db=false;
					$pm10_um=false;
					$pm10_do=false;
					$pm10_zl=false;
					$pm10_bzl=true;
				}
				
				if ($pm10_bzl || $pm25_bzl || $co2_bzl || $no2_bzl || $ozone_bzl)
				{
					$state="Bardzo zła";
				}
				else if ($pm10_zl || $pm25_zl || $co2_zl || $no2_zl || $ozone_zl)
				{
					$state="Zła";
				}
				else if ($pm10_do || $pm25_do || $co2_do || $no2_do || $ozone_do)
				{
					$state="Dostateczna";
				}
				else if ($pm10_um || $pm25_um || $co2_um || $no2_um || $ozone_um)
				{
					$state="Umiarkowana";
				}
				else if ($pm10_db || $pm25_db || $co2_db || $no2_db || $ozone_db)
				{
					$state="Dobra";
				}
				else if ($pm10_bdb || $pm25_bdb || $co2_bdb || $no2_bdb || $ozone_bdb)
				{
					$state="Bardzo dobra";
				}
				else if ($pm10_nd && $pm25_nd && $co2_nd && $no2_nd && $ozone_nd)
				{
					$state="Brak oceny";
				}
				else
				{
					$state="blad";
				}
			}
			else
			{
				$ids=$i;
				$state="Brak oceny";
				$date="Czujnik wyłączony";
			}
			
			if($i==1)
			{
				$sensors_data=$ids."/".$state."|";
			}
			else
			{
				$sensors_data=$sensors_data.$ids."/".$state."|";
			}
		}
	}
?>