mapboxgl.accessToken = 'pk.eyJ1Ijoic2F0eWEzNCIsImEiOiJjbDN0eGZzdDAwYzFlM2pwZnBvM21hbXNhIn0.oJj3cZT40bk6gKtNi0Kkqw'
let latitude = 22.7868542, longitude = 88.3643296

var map = new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude,latitude],
    zoom:20
})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true
        },
        trackUserLocation:true
    })
)
map.addControl(
    new MapboxDirections({
       accessToken: mapboxgl.accessToken
    }),

    'top-left'
)