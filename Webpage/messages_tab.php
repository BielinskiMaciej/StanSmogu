<?php
	require_once "connect.php";
	
	$idu = 	 $_GET['idu'];
	$messages_tab= "<table>";
	$messages_tab.= "<tr><th>Data wiadomości</th><th>Kategoria</th><th>Wiadomość</th><th>Odpowiedź</th></tr>\n";
			
	mysqli_query($connection, "SET CHARSET utf8");
    mysqli_query($connection, "SET NAMES 'utf8' COLLATE 'utf8_polish_ci'");
	$sql_mt1	= mysqli_query ($connection, "SELECT  * FROM messages WHERE idu='$idu' ORDER BY message_date DESC") 
								or die ("3SQL query error: $db_name");
	while ($db_mt1 = mysqli_fetch_array ($sql_mt1)) 
	{
		$idm 			= $db_mt1[0];
		$idu			= $db_mt1[1];
		$message_date	= $db_mt1[2];
		$category		= $db_mt1[3];
		$message		= $db_mt1[4];
		$answer 		= $db_mt1[5];
					
		switch ($category)
		{
			case "sensor_error": $category2="Awaria czujnika";
				break;	
			case "info": $category2="Prośba o wyjaśnienie";
				break;
			case "page_error": $category2="Błąd na stronie";
				break;
			case "repair": $category2="Sugesta poprawki";
				break;
			case "other": $category2="Inne";
				break;
		}
					
		$messages_tab.=  "<TR><TD>$message_date</TD><TD>$category2</TD><TD>$message</TD><TD>$answer</TD></TR>\n";		
	}
				
	$messages_tab.= "</table>";
	echo $messages_tab;	
?>