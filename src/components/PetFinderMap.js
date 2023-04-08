import React, { useState, useEffect } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

const PetFinderComponent = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const apiKey = 'YOUR_API_KEY_HERE';
    const apiEndpoint = `https://api.petfinder.com/v2/animals?type=cat&location=YOUR_LOCATION_HERE&distance=10`;

    fetch(apiEndpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setCats(data.animals))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Add the tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add markers for each cat
    cats.forEach((cat) => {
      const { latitude, longitude } = cat;

      if (latitude && longitude) {
        L.marker([latitude, longitude])
          .addTo(map)
          .bindPopup(`<h2>${cat.name}</h2><img src="${cat.photos[0].medium}" alt="${cat.name}"/>`);
      }
    });
  }, [cats]);

  return (
    <div>
      <div id="map" style={{ height: '500px' }} />
      <div>
        {cats.map((cat) => (
          <div key={cat.id}>
            <h2>{cat.name}</h2>
            <img src={cat.photos[0].medium} alt={cat.name} />
            <p>{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetFinderComponent;
