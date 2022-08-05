<?php
	require_once "connect.php";

	if (isset($_REQUEST['add_sensor']))
	{
		$install_date = $_POST ['install_date'];
		$ozone = $_POST ['ozone'];
		$no2 = $_POST ['no2'];
		$co2 = $_POST ['co2'];
		$pm10 = $_POST ['pm10'];
		$pm25 = $_POST ['pm25'];
		$temperature = $_POST ['temperature'];
		$wind = $_POST ['wind'];		
		$idu = $_POST ['idu']; 
		$city = $_POST ['city']; 
		$street = $_POST ['street']; 
		$number = $_POST ['number'];
		$coor_11 = $_POST ['coor_11'];
		$coor_12 = $_POST ['coor_12'];
		$coor_13 = $_POST ['coor_13'];
		$coor_1 = $_POST ['coor_1'];
		$coor_21 = $_POST ['coor_21'];
		$coor_22 = $_POST ['coor_22'];
		$coor_23 = $_POST ['coor_23'];
		$coor_2 = $_POST ['coor_2'];		
		
		$coordinates1=round($coor_11+($coor_12/60)+($coor_13/3600),5);
		$coordinates2=round($coor_21+($coor_22/60)+($coor_23/3600),5);
		
		if($coor_1=="S")
		{
			$coordinates1=$coordinates1*-1;
		}
		
		if($coor_2=="W")
		{
			$coordinates2=$coordinates2*-1;
		}
		
		if ($ozone=="1")
		{
			$is_ozone="1";
		}
		else
		{
			$is_ozone="0";
		}
		
		if ($no2=="1")
		{
			$is_no2="1";
		}
		else
		{
			$is_no2="0";
		}
		
		if ($co2=="1")
		{
			$is_co2="1";
		}
		else
		{
			$is_co2="0";
		}
		
		if ($pm10=="1")
		{
			$is_pm10="1";
		}
		else
		{
			$is_pm10="0";
		}
		
		if ($pm25=="1")
		{
			$is_pm25="1";
		}
		else
		{
			$is_pm25="0";
		}
		
		if ($temperature=="1")
		{
			$is_temp="1";
		}
		else
		{
			$is_temp="0";
		}
		
		if ($wind=="1")
		{
			$is_wind="1";
		}
		else
		{
			$is_wind="0";
		}
			
			mysqli_query($connection, "SET CHARSET utf8");
			mysqli_query($connection, "SET NAMES 'utf8' COLLATE 'utf8_polish_ci'");

			$sql_sens = "INSERT into sensors( date,ozone,no2,co2,pm25,pm10,temp,wind,idu,city,street,number,coordinates1,coordinates2) VALUES ('$install_date','$is_ozone','$is_no2','$is_co2','$is_pm25','$is_pm10','$is_temp','$is_wind','$idu','$city','$street','$number','$coordinates1','$coordinates2')";
       
	   
			if (mysqli_query($connection, $sql_sens)) 
			{
				echo "<script>window.location.href='admin.php';</script>";
			} 
			else 
			{
				echo "Error: " . $sql_s . "<br>" . mysqli_error($connection);
			}
			
	}
	
?>