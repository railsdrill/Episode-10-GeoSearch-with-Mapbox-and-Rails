import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    if (document.getElementById('place_latitude').value.length === 0) {
      var center = [ -0.228408, 51.58959 ] 
     }
     else {
       var center =[document.getElementById('place_longitude').value, document.getElementById('place_latitude').value]
  
     }
    mapboxgl.accessToken = 'addyourkey';
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 13
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
  });

  document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
  geocoder.on('result', function(e) {
    document.getElementById('place_name').value = e.result.place_name
    document.getElementById('place_longitude').value = e.result.center[0]
    document.getElementById('place_latitude').value = e.result.center[1]
  
    console.log(e.result)
    
    })
    
  }
}
