<?php
	require_once "connect.php";
	
	$idmes = $_GET['idm'];
	$answer = $_GET['ans'];
		
	mysqli_query($connection, "SET CHARSET utf8");
    mysqli_query($connection, "SET NAMES 'utf8' COLLATE 'utf8_polish_ci'");

	$sql_sa1 = "UPDATE `messages` SET `answer`='$answer' WHERE (`idm`='$idmes')";
       
	if (mysqli_query($connection, $sql_sa1)) 
	{
		//echo "wysłano";
	} 
	else 
	{
		echo "Error: " . $sql_sa1 . "<br>" . mysqli_error($connection);
	}   
?>