mapboxgl.accessToken = 'pk.eyJ1IjoiYTFleC1kIiwiYSI6ImNrdmFwMXpiZDBoOXIycHBnMGNxcGl5a2gifQ.VM4ZiVKWztyEI7gWb10sZQ';
     
    const geojson = {
    'type': 'FeatureCollection',
    'features': [
    {
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [-118.1916048, 33.7690164]
    },
    'properties': {
    'title': 'Tattoo Salone',
    'description': 'Washington, D.C.'
    }
    }
    
    ]
    };
     
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-118.1916048, 33.7690164],
    zoom: 9
    });
     
    // add markers to map
    for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';
     
    // make a marker for each feature and add it to the map
    new mapboxgl.Marker(el)
    .setLngLat(feature.geometry.coordinates)
    .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML(
    `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
    )
    )
    .addTo(map);
    }