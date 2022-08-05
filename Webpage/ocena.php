<?php
	require_once "connect.php";
	$ocena="";
	$ocena.='<h2>Ocena powietrza</h2></br>
			<p>Jakość powietrza jest oceniana na podstawie sześciostopniowej skali Indeksu jakości powietrza udostępnionej przez <a href="https://www.powietrze.gios.gov.pl/pjp/current" target="_blank"> Główny Inspektorat Ochrony Środowiska</a> 
			Oceniany jest każdy z parametrów osobno, jednak do ogólnej oceny całkowitej powietrza przyjmuje się najgorszy z mierzonych wyników. Zbiory każdego z poziomów są prawostronnie domknięte, co znaczy, że na przykład wartość 20 μg/m3 dla parametru PM10 oznacza poziom bardzo dobry.</p>
			</br></br>';
	$ocena.= "<TABLE><TR><TD>Indeks jakości powietrza</TD>	<TD>PM10 [μg/m3] </TD>		<TD>PM2.5 [μg/m3]</TD>		<TD>Ozon [μg/m3]</TD>		<TD>NO2 [μg/m3]</TD>	<TD>CO2 [ppm] </TD></TR>\n";
		
	$sql_o1 = mysqli_query ($connection, "SELECT * FROM standards WHERE idst=1") 
						or die ("3SQL query error: $db_name");						
			
	while ($db_o1 = mysqli_fetch_array ($sql_o1)) 
	{	
		$bdb_db_ozone	= $db_o1[20];
		$db_um_ozone	= $db_o1[21];
		$um_do_ozone	= $db_o1[22];
		$do_zl_ozone	= $db_o1[23];
		$zl_bzl_ozone	= $db_o1[24];
		$bdb_db_no2		= $db_o1[25];
		$db_um_no2		= $db_o1[26];
		$um_do_no2		= $db_o1[27];
		$do_zl_no2		= $db_o1[28];
		$zl_bzl_no2		= $db_o1[29];
		$bdb_db_co2		= $db_o1[30];
		$db_um_co2		= $db_o1[31];
		$um_do_co2		= $db_o1[32];
		$do_zl_co2		= $db_o1[33];
		$zl_bzl_co2		= $db_o1[34];
		$bdb_db_pm25	= $db_o1[35];
		$db_um_pm25		= $db_o1[36];
		$um_do_pm25		= $db_o1[37];
		$do_zl_pm25		= $db_o1[38];
		$zl_bzl_pm25	= $db_o1[39];
		$bdb_db_pm10	= $db_o1[40];
		$db_um_pm10		= $db_o1[41];
		$um_do_pm10		= $db_o1[42];
		$do_zl_pm10		= $db_o1[43];
		$zl_bzl_pm10	= $db_o1[44];
	}
			
	$ocena.="<TR><TD style='color:#31FF32'>Bardzo dobry</TD>	<TD>0-".$bdb_db_pm10."</TD>					<TD>0-".$bdb_db_pm25."</TD>					<TD>0-".$bdb_db_ozone."</TD>		
			<TD>0-".$bdb_db_no2."</TD>	<TD>0-".$bdb_db_co2."</TD></TR>\n";
	$ocena.="<TR><TD style='color:#A0FF64'>Dobry</TD>			<TD>".$bdb_db_pm10."-".$db_um_pm10."</TD>	<TD>".$bdb_db_pm25."-".$db_um_pm25."</TD>	<TD>".$bdb_db_ozone."-".$db_um_ozone."</TD>	
			<TD>".$bdb_db_no2."-".$db_um_no2."</TD>	<TD>".$bdb_db_co2."-".$db_um_co2."</TD></TR>\n";
	$ocena.="<TR><TD style='color:#FFFF14'>Umiarkowany</TD>		<TD>".$db_um_pm10."-".$um_do_pm10."</TD>	<TD>".$db_um_pm25."-".$um_do_pm25."</TD>	<TD>".$db_um_ozone."-".$um_do_ozone."</TD>	
			<TD>".$db_um_no2."-".$um_do_no2."</TD>	<TD>".$db_um_co2."-".$um_do_co2."</TD></TR>\n";
	$ocena.="<TR><TD style='color:#FFB91D'>Dostateczny</TD>		<TD>".$um_do_pm10."-".$do_zl_pm10."</TD>	<TD>".$um_do_pm25."-".$do_zl_pm25."</TD>	<TD>".$um_do_ozone."-".$do_zl_ozone."</TD>	
			<TD>".$um_do_no2."-".$do_zl_no2."</TD>	<TD>".$um_do_co2."-".$do_zl_co2."</TD></TR>\n";
	$ocena.="<TR><TD style='color:#FF4E00'>Zły</TD>				<TD>".$do_zl_pm10."-".$zl_bzl_pm10."</TD>	<TD>".$do_zl_pm25."-".$zl_bzl_pm25."</TD>	<TD>".$do_zl_ozone."-".$zl_bzl_ozone."</TD>	
			<TD>".$do_zl_no2."-".$zl_bzl_no2."</TD>	<TD>".$do_zl_co2."-".$zl_bzl_co2."</TD></TR>\n";
	$ocena.="<TR><TD style='color:#FF0000'>Bardzo zły</TD>		<TD>>".$zl_bzl_pm10."</TD>					<TD>>".$zl_bzl_pm25."</TD>					<TD>>".$zl_bzl_ozone."</TD>		
			<TD>>".$zl_bzl_no2."</TD>	<TD>>".$zl_bzl_co2."</TD></TR>\n";
	$ocena.="<TR><TD style='color:#B8B8B8'>Brak indeksu</TD>		<TD colspan ='5'>Brak wyniku pomiaru</TD>></TR>\n";
	$ocena.="</table>";
?>