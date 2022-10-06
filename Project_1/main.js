mapboxgl.accessToken = 'pk.eyJ1IjoiYWN0dXJudXAiLCJhIjoiY2w4dXNrZDNtMDZ5cjN2bzRpbjU4b2d3bCJ9.PUt-fBuRNwIbI1bT40APaQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center:[-105.2670,40.0040], //longitude, lattitude
  zoom: 14
});