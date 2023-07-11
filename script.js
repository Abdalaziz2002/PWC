mapboxgl.accessToken = 'pk.eyJ1IjoiYWJkMjAwMiIsImEiOiJjbGp4MjVraHowd3A1M2huMTVkbWp3YWl4In0.EksJLYFVYob4cwLdChrNXg';//token 
mapboxgl.setRTLTextPlugin(
    'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
    null,
    true); //RTL for language
navigator.geolocation.getCurrentPosition(succ,errorf,{enableHighAccuracy:true})
function succ(position){
    console.log(position)
    setUpMap([position.coords.longitude,position.coords.latitude]) //for the center 
}
function errorf(){
setUpMap([35.923009,31.950715 ])//default location 1st circle
}
function setUpMap(center){
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
   center:center,//starting position [lng, lat]
    zoom: 15, // starting zoom
})

/*
map.addControl(
    new MapboxDirections({
    accessToken: mapboxgl.accessToken
   }),
    'top-left'
);*/
const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    marker: {
    color: 'blue'
    },
    mapboxgl: mapboxgl
    });
     
    map.addControl(geocoder); //for search
    map.addControl(new mapboxgl.NavigationControl()); //zoom in & out
    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(
        new MapboxDirections({
        accessToken: mapboxgl.accessToken
       }),
        'top-left'
    );
  
}

