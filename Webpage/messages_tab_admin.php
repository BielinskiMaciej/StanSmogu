<?php
	require_once "connect.php";
	$messages_tab_admin= "<table>";
	$messages_tab_admin.= "<tr><th>Data wiadomości</th><th>Kategoria</th><th>Użytkownik</th><th>Wiadomość</th><th>Odpowiedź</th></tr>\n";
			
	mysqli_query($connection, "SET CHARSET utf8");
    mysqli_query($connection, "SET NAMES 'utf8' COLLATE 'utf8_polish_ci'");
	$sql_mta1	= mysqli_query ($connection, "SELECT  * FROM messages ORDER BY message_date DESC") 
				or die ("3SQL query error: $db_name");
	while ($db_mta1 = mysqli_fetch_array ($sql_mta1)) 
	{
		$idm 			= $db_mta1[0];
		$idu			= $db_mta1[1];
		$message_date	= $db_mta1[2];
		$category		= $db_mta1[3];
		$message		= $db_mta1[4];
		$answer 		= $db_mta1[5];
					
		if ($answer=="Brak odpowiedzi")
		{
			$answer2="<form><div id='idm".$idm."'><div class='message_box' >
					<input type='hidden' id='idmes' value=".$idm.">
					<textarea id='anwser_write' rows='5' cols='50'   ></textarea>
					</div>
					<div id='btn'>
					<input type='button' value='Wyślij' name='kontakt' onClick='answer()'>
					</div></form></div>";
		}
		else
		{
			$answer2=$answer;
		}
						
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
					
		$sql_mta2	= mysqli_query ($connection, "SELECT  name,surname FROM users WHERE idu=$idu") 
								or die ("3SQL query error: $db_name");
		while ($db_mta2 = mysqli_fetch_array ($sql_mta2)) 
		{
			$name 			= $db_mta2[0];
			$surname		= $db_mta2[1];
			$namesurname=$name." ".$surname;
		}
					
		$messages_tab_admin.=  "<TR><TD>$message_date</TD><TD>$category2</TD><TD>$namesurname</TD><TD>$message</TD><TD>$answer2</TD></TR>\n";			
	}
	
	$messages_tab_admin.= "</table>";
	echo $messages_tab_admin;	
?>