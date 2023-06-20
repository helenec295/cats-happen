import './PetFinder.css';
import React, { useState, useEffect } from 'react';

const PetFinderComponent = () => {
  const [cats, setCats] = useState([]);
  const [zipCode, setZipCode] = useState('');

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch(`https://api.petfinder.com/v2/animals?type=cat&location=${zipCode}&distance=50`, {
          headers: {
            Authorization: 'Bearer YOUR_ACCESS_TOKEN'
          }
        });
        const data = await response.json();
        setCats(data.animals);
      } catch (error) {
        console.error(error);
      }
    };

    if (zipCode) {
      fetchCats();
    }
  }, [zipCode]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (zipCode) {
      fetchCats();
    }
  };

  return (
    <div className='pet-finder'>
      <form onSubmit={handleSubmit}>
        <label>
          Zip code:
          <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
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
