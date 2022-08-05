<!DOCTYPE HTML>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<script src="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.js"></script>
	 <script src="leaflet-heat.js"></script>
    
	
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.css" />
    <style>
      html, body {
        height: 100%;
        padding: 0;
        margin: 0;
      }
      #map {
        /* configure the size of the map */
        width: 100%;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>
      // initialize Leaflet
      //var map = L.map('map').setView({lon: 0, lat: 0}, 2);
	  
	   // initialize Leaflet
      var map = L.map('map').setView({lon: 18.0080, lat: 53.1231}, 13);
	  
	
	  var heat = L.heatLayer([
	[ 53.13398, 17.93031, 1], // lat, lng, intensity
	[53.12817, 17.93478, 1]], {radius: 25},{gradient: {1: 'red'}}).addTo(map);
	




   

      // add the OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
      }).addTo(map);

	  
	  
    </script>
  </body>
</html>