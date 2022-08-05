<?php
	session_start();
	if ((isset($_SESSION['loggedin'])) && ($_SESSION['loggedin']==true))
	{
		if ((isset($_SESSION['admin'])) && ($_SESSION['admin']==true))
		{
			echo "<script>window.location.href='admin.php';</script>";
		}
		else
		{
			echo "<script>window.location.href='user.php';</script>";
		}
		exit();
	} 
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Stan smogu</title>
		<meta charset="utf-8" />
		<meta name="description" content="Rejestracja i wizualizacja stanu smogu oraz wybranych parametrów powietrza na żywo przedstawione na interaktywnej mapie z zaznaczonymi czujnikami oraz obszarami ich pomiarów za pomocą odpowiednich kolorów">
		<meta name="keywords" content="smog,stan powietrza,powietrze,pm10,pm2.5,no2,co2,o3,temperatura,bydgoszcz,3D,live,wiatr,indeks jakosci powietrza, stan smogu, zanieczyszczenia, ozon">
		<meta name="author" content="Maciej Bieliński">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		
		<link rel="shortcut icon" href="favicon.ico" />
		<link rel="stylesheet" type="text/css" href="style.css">
		<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin=""/>
		
		<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
		<script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==" crossorigin=""></script>
		
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="X"></script>
		<script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', 'X');
		</script>
		<script data-ad-client="X" async src="X"></script>
		<script type="text/javascript" src="charts/chart.js"></script>
		<script type="text/javascript" src="wykresy/wykres.js"></script>
	</head>
	<body>
		<div id="mapid" ></div>
		<script type="text/javascript" src="map.js"></script>
		<?php
			include"osmogu.php";
			include"czujnik.php";
			include"ocena.php";
			include"kontakt.php";
			include "download_sensors.php";
			
			if (isset($_REQUEST['logowanie']))
			{
				if ((isset($_POST ['email'])) && (isset($_POST ['haslo'])))
				{
					session_start();
					$mail = $_POST ['email']; 
					$haslo = $_POST ['haslo']; 
					require_once "connect.php";
				
					$sql1 = mysqli_query($connection, "SELECT * FROM users WHERE mail='$mail'")
								or die ("SQL query error1: $db_name");
					$db_raw = mysqli_fetch_array($sql1); 
				
					if(!$db_raw) 														
					{
						//bledny mail lub brak danego uzytkownika
						$message = "Błędne dane logowania!";
							echo "<script type='text/javascript'>alert('$message');</script>";
					}
					else
					{ 
						if($db_raw['role']=='admin') 
						{
							//admin
							if($db_raw['password']==$haslo)
							{
								$_SESSION ['loggedin'] = true;
								$_SESSION ['admin'] = true;
								$_SESSION ['idu']  = $db_raw ['idu'];
								unset ($_SESSION ['error']);
								echo "<script>window.location.href='admin.php';</script>";
							}
							else
							{
								//bledne haslo admina
								$message = "Błędne dane logowania!";
								echo "<script type='text/javascript'>alert('$message');</script>";
							}
						}
						else if ($db_raw['role']=='user')
						{
							if($db_raw['password']==$haslo)
							{
								$_SESSION ['loggedin'] = true;
								$_SESSION ['idu']  = $db_raw ['idu'];
								unset ($_SESSION ['error']);
								echo "<script>window.location.href='user.php';</script>";
							}
							else
							{
								//bledne haslo uzytkownika
								$message = "Błędne dane logowania!";
								echo "<script type='text/javascript'>alert('$message');</script>";
							}
						}
					}
				}
			}
		?>
		<script>
			var data2 = <?php echo json_encode($sensors_meta); ?>;
					
			count_data=data2.split("&");
			count=count_data[0];
			data3=count_data[1];
						
			sensor=data3.split("|");
								
			for (i=0;i<count;i++)
			{
				sensor_data[i] = sensor[i].split("/");
							
				ids[i]				= sensor_data[i][0];
				date2[i]			= sensor_data[i][1];
				is_ozone[i]			= sensor_data[i][2];
				is_no2[i]			= sensor_data[i][3];
				is_co2[i]			= sensor_data[i][4];
				is_pm25[i]			= sensor_data[i][5];
				is_pm10[i]			= sensor_data[i][6];
				is_temp[i]			= sensor_data[i][7];
				is_wind[i]			= sensor_data[i][8];
				idu[i]				= sensor_data[i][9];
				city[i]				= sensor_data[i][10];
				street[i]			= sensor_data[i][11];
				number[i]			= sensor_data[i][12];
				coordinates1[i]		= sensor_data[i][13];
				coordinates2[i]		= sensor_data[i][14];
				name[i]				= sensor_data[i][15];
				company[i]			= sensor_data[i][16];
				date_install[i]				= sensor_data[i][17];
			}
				
			function openNav() 
			{
				document.getElementById("menu").style.display="none";
				if (window.innerWidth<1000)
				{
					document.getElementById("clsbtn2").style.display="none";
				}
				document.getElementById("mySidenav").style.width = "250px";
				document.getElementById("mySidenav_all").style.width = "250px";
			}

			function closeNav() 
			{
				document.getElementById("menu").style.display="block";
				document.getElementById("mySidenav_all").style.width = "0";
				document.getElementById("mySidenav").style.width = "0";
				document.getElementById("mySidenav_next").style.width = "0";
				opened=0;
				if (window.innerWidth<1000)
				{
					document.getElementById("clsbtn2").style.display="none";
				}
			}
			
			function open_log() 
			{
			  document.getElementById("log").style.display="block";
			  document.getElementById("log_main").style.display="none";
			}

			function close_log() 
			{
			  document.getElementById("log").style.display="none";
			  document.getElementById("log_main").style.display="block";
			}
			
			var opened=0;
			var osmogu=<?php echo json_encode($osmogu); ?>;
			var czujniki=<?php echo json_encode($czujnik); ?>;
			var ocena = <?php echo json_encode($ocena); ?>;
			var kontakt=<?php echo json_encode($kontakt); ?>;
			
			
			function next(number) 
			{
				if (window.innerWidth<1000)
				{
					document.getElementById("mySidenav").style.width = "0";
					document.getElementById("mySidenav_all").style.width = "100%";
					document.getElementById("mySidenav_next").style.width = "100%";
					document.getElementById("mySidenav_next").style.left = "0";
					
					document.getElementById("clsbtn2").style.display="block";
					
					osmogu+="<a href='javascript:void(0)' id='clsbtn2' class='closebtn' onclick='closeNav()'>&times;</a>";
					czujniki+="<a href='javascript:void(0)' id='clsbtn2' class='closebtn' onclick='closeNav()'>&times;</a>";
					ocena+="<a href='javascript:void(0)' id='clsbtn2' class='closebtn' onclick='closeNav()'>&times;</a>";
					kontakt+="<a href='javascript:void(0)' id='clsbtn2' class='closebtn' onclick='closeNav()'>&times;</a>";
					
				}
				else
				{
				
					if (opened==1 && prev_num==number)
					{
						document.getElementById("mySidenav_next").style.width = "0";
						document.getElementById("mySidenav_all").style.width = "250px";
						opened=0;
					}
					else if (opened==0)
					{
						document.getElementById("mySidenav_next").style.width = "500px";
						document.getElementById("mySidenav_all").style.width = "750px";
						opened=1;
					}
				
				}
				
				switch (number)
				{
					case 1:
						document.getElementById("mySidenav_next").innerHTML = osmogu;
						break;
					case 2:
						document.getElementById("mySidenav_next").innerHTML = czujniki;
						break;
					case 3:
						document.getElementById("mySidenav_next").innerHTML = ocena;
						break;
					case 4:
						document.getElementById("mySidenav_next").innerHTML = kontakt;
						break;
				}

				prev_num=number;
			}
			
			function open_descr() 
			{
				if(window.innerWidth<1000)
				{
					 document.getElementById("sensor_description").style.width = "100%";
				}
				else
				{
					 document.getElementById("sensor_description").style.width = "25%";
				}
			}
			
			function close_descr() 
			{
				document.getElementById("sensor_description").style.width = "0";
				clearInterval(download);
				clearInterval(download2);
				clearInterval(descr);
				clicked=0;
			}
		</script>
		
		

		<div class="alert2">
			<a class="closebtn2">&times;</a>  
			<h2>Kliknij w wybrany kolorowy obszar aby dowiedzieć się więcej!</h2>
		</div>
		
		<div id="mySidenav_all" class="sidenav_all">
			<div id="mySidenav" class="sidenav">
				<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
				<a href="javascript:void(0)" class="open_page" onclick="next(1)">O smogu</a>
				<a href="javascript:void(0)" class="open_page" onclick="next(2)">Czujniki</a>
				<a href="javascript:void(0)" class="open_page" onclick="next(3)">Ocena pomiaru</a>
				<a href="javascript:void(0)" class="open_page" onclick="next(4)">Kontakt</a>
				<a href="javascript:void(0)" class="open_log" id="log_main" onclick="open_log()">Logowanie</a>
				
				<form method="post" id="log" class="logging">
					<a href="javascript:void(0)" class="close_log" onclick="close_log()">Logowanie</a>
					<h2>Email:</h2> <input type="text" name="email" maxlength="30" size="20" /> 
					<h2>Hasło:</h2> <input type="password" name="haslo" maxlength="30" size="20" /> </br>
					<input type="submit" value="Zaloguj" name="logowanie"/>
				</form>
			</div>
			
			<div id="mySidenav_next" class="sidenav_next">
				<a href='javascript:void(0)' id='clsbtn2' class='closebtn' onclick='closeNav()'>&times;</a>
			</div>
		</div>
		
		<span class="spanstyle" id="menu" onclick="openNav()">&#9776; Menu</span>
		
		<div class="sensor_descr" id="sensor_description">
			<a href="javascript:void(0)" class="closebtn" onclick="close_descr()">&times;</a>
			<div class="name">
				<h2 id="city"></br></h2>
				<h2 id="street"></br></h2>
				<h2 id="state"></br></h2>
				<h2 id="date"></br></h2>
				<h2 id="company"></h2>
			</div>
			
			<div class="gau_charts">
				<div class="gau_chart_temp" id="gau_chart_temp"></div>
				<div class="gau_chart_pack">
					<div class="gau_chart_title">PM2.5</div>
					<div class="gau_chart_pro" id="gau_chart_pro_pm25"></div>
					<div class="gau_chart" id="gau_chart_pm25"></div>
				</div>
				<div class="gau_chart_pack">
					<div class="gau_chart_title">OZON</div>
					<div class="gau_chart_pro" id="gau_chart_pro_ozone"></div>
					<div class="gau_chart" id="gau_chart_ozone"></div>
				</div>
				<div class="gau_chart_pack">
					<div class="gau_chart_title">PM10</div>
					<div class="gau_chart_pro" id="gau_chart_pro_pm10"></div>
					<div class="gau_chart" id="gau_chart_pm10"></div>
				</div>
				<div class="gau_chart_pack">
					<div class="gau_chart_title">NO2</div>
					<div class="gau_chart_pro" id="gau_chart_pro_no2"></div>
					<div class="gau_chart" id="gau_chart_no2"></div>
				</div>
				<div class="gau_chart_pack">
					<div class="gau_chart_title">Wiatr</div>
					<div class="gau_chart_pro" id="gau_chart_pro_wind"></div>
					<div class="gau_chart" id="gau_chart_wind"></div>
				</div>
				<div class="gau_chart_pack">
					<div class="gau_chart_title">CO2</div>
					<div class="gau_chart_pro" id="gau_chart_pro_co2"></div>
					<div class="gau_chart" id="gau_chart_co2"></div>
				</div>
			</div>
			 
			<div class="cols">
				<div id="chart_pm25_10_col" class="col"></div>
				<div id="chart_temp_col" class="col"></div>
				<p id="none_col">Dane z ostatnich 24 godzin</p>
				<div class="col_form">
					<form>
						<label for="datemax">Wybierz inny dzień:</label></br></br>
						<input name="setDate" type="date" id="datemax"></br></br>
						<input type="hidden" name="ids_sel">
						<input type="button" value="Zatwierdź" onClick="selected(this.form)"></br></br>
						<input type="button" value="Pokaż ostatnie 24h" onClick="last(this.form)"></br></br>
					</form>
				</div>
			</div>
		</div>

		<script>
			var today = new Date().toISOString().split('T')[0];
			document.getElementsByName("setDate")[0].setAttribute('max', today);
			
			var close = document.getElementsByClassName("closebtn2");
			var i;
			for (i = 0; i < close.length; i++) 
			{
				close[i].onclick = function()
				{
					var div = this.parentElement;
					div.style.opacity = "0";
					setTimeout(function()
					{ 
						div.style.display = "none"; 
							
					}, 600);
				}
			}
				
				
				
			function selected (form) 
			{
				var date_selected =form.setDate.value;
				var ids_selected =form.ids_sel.value;
				selected_set_data_col(ids_selected,date_selected);
			}
		
			function last (form) 
			{
				var date_selected =form.setDate.value;
				var ids_selected =form.ids_sel.value;
				set_data_col(ids_selected);
			}
				
		</script>
	</body>
</html>