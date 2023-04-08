
import './PetFinder.css'

import React, { useState, useEffect } from 'react';

const PetFinderComponent = () => {
  const [cats, setCats] = useState([]);
  const [location, setLocation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const apiKey = 'Bnx1ilk4ZdauBe1VoMrtxaNPeD6T8p4JhlTWd2xKJ3A6IJBJwN';
    const apiEndpoint = `https://api.petfinder.com/v2/animals?type=cat&location=${location}&distance=10`;

    fetch(apiEndpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setCats(data.animals))
      .catch((error) => console.error(error));
  };

  return (
    <div className='pet-finder'>
      <form onSubmit={handleSubmit}>
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <button type="submit">Search</button>
      </form>
      {cats.map((cat) => (
        <div key={cat.id}>
          <h2>{cat.name}</h2>
          <img src={cat.photos[0].medium} alt={cat.name} />
          <p>{cat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PetFinderComponent;
