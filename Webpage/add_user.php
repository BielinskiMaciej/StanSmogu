<?php

require_once "connect.php";

	if (isset($_REQUEST['add_user']))
	{
		$name = $_POST ['name'];
		$surname = $_POST ['surname']; 
		$login = $_POST ['login']; 
		$mail = $_POST ['mail']; 
		$pass1 = $_POST ['pass1']; 
		$pass2 = $_POST ['pass2'];
		$company = $_POST ['company']; 
		$role = $_POST ['role']; 
		
		if($pass1==$pass2)
		{
			
			mysqli_query($connection, "SET CHARSET utf8");
			mysqli_query($connection, "SET NAMES 'utf8' COLLATE 'utf8_polish_ci'");

			$sql_in = "INSERT into users( name,surname,login,mail,password,company,role) VALUES ('$name','$surname','$login','$mail','$pass1','$company','$role')";
       
	   
			if (mysqli_query($connection, $sql_in)) 
			{
				echo "<script>window.location.href='admin.php';</script>";
			} 
			else 
			{
				echo "Error: " . $sql_s . "<br>" . mysqli_error($connection);
			}
		}
		else
		{
			echo("Hasła są różne!");
		}	
	}
	
?>