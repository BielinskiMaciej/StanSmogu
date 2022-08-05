<!DOCTYPE html>
<html>
<head>
	
	<title>Quick Start - Leaflet</title>

	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<link rel="shortcut icon" type="image/x-icon" href="docs/images/favicon.ico" />

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="X" crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="X" crossorigin=""></script>
<script data-require="leaflet@0.7.3" 
    data-semver="0.7.3" src="//cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.js"></script>
 <style>
      html, body {
        height: 100%;
        padding: 0;
        margin: 0;
      }
      #mapid {
        /* configure the size of the map */
        width: 100%;
        height: 100%;
      }
    </style>
	
</head>
<body>



<div id="mapid" ></div>
<script>
	
	var mymap = L.map('mapid').setView({lon: 18.0080, lat: 53.1231}, 13);
	//var mymap = L.map('mapid').setView([lon:18.0080, lat: 53.1231], 13);


	
	
	
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=X', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11'
	}).addTo(mymap);
	
	

	/*
	jezynowa
	
	53.12815
	17.934845
	
	kosciuszki
	53.13509
	18.00885
	
	glogowska
	53.133979
	17.930298
	
	*/
	
	
	
	var circle = L.circle([53.13398, 17.93031], 500, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5,
		stroke: false
	}).addTo(mymap).bindPopup("I am a circle.");
	
	var svg = mymap.getPanes().overlayPane.firstChild,
		svgFilter = document.createElementNS('http://www.w3.org/2000/svg', 'filter'),
		svgBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');

	svgFilter.setAttribute('id', 'blur');
	svgFilter.setAttribute('x', '-100%');
	svgFilter.setAttribute('y', '-100%');
	svgFilter.setAttribute('width', '500%');
	svgFilter.setAttribute('height', '500%');
	svgBlur.setAttribute('stdDeviation', 5);

	svgFilter.appendChild(svgBlur);
	svg.appendChild(svgFilter);

	circle._container.setAttribute('filter', 'url(#blur)');
	
	/*
	L.circle([53.13398, 17.93031], 1000, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.2,
		stroke: false
	}).addTo(mymap).bindPopup("I am a circle.");
	
	

	L.marker([51.5, -0.09]).addTo(mymap)
		.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

	L.circle([51.508, -0.11], 500, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup("I am a circle.");

	L.polygon([
		[51.509, -0.08],
		[51.503, -0.06],
		[51.51, -0.047]
	]).addTo(mymap).bindPopup("I am a polygon.");


	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}

	mymap.on('click', onMapClick);
*/
</script>



</body>
</html>

