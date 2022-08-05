<?php
	require_once "session_check.php"; 
	require_once "connect.php";
		  
//	$category = $_GET['cat'];
	//$message = $_GET['mes'];	
//	$idu = $_SESSION['idu'];

	mysqli_query($connection, "SET CHARSET utf8");
    mysqli_query($connection, "SET NAMES 'utf8' COLLATE 'utf8_polish_ci'");
	$sql_sm1 = "INSERT into messages(idu,category,message) VALUES (2,'repair','TST2')";
	//$sql_sm1 = "INSERT into messages(idu,category,message) VALUES (2,'$category','$message')";
       
	if (mysqli_query($connection, $sql_sm1)) 
	{
			echo "wysłano";
	} 
	else 
	{
		echo "Error: " . $sql_sm1 . "<br>" . mysqli_error($connection);
	}   
?>