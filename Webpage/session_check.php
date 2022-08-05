<?php
	session_start();
	
	if ((isset($_SESSION['loggedin'])) && ($_SESSION['loggedin']==true))
	{
		if ((isset($_SESSION['admin'])) && ($_SESSION['admin']==true))
		{
			header('Location: admin.php');
			exit();
		}
		else
		{
			header('Location: user.php');
			exit();
		}
		exit();
	}
	else
	{
		header('Location: index.php');
		exit();
	}
?>
