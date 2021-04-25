console.log('Hello from the other side!');

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibHVjYXNjYXNhcyIsImEiOiJja25jMWoyY2QxM2VtMnZtbDg2MnR6ZWg1In0.ODxPGR7gY4IvPM00F8n1-Q';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/lucascasas/cknc20lmd1nq517p9qp28dtgg',
    scrollZoom: false,
    // center: [-118.113491, 34.111745],
    // zoom: 10,
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
