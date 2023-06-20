import './PetFinder.css';
import { useState, useEffect } from 'react';
import axios from '../axios';

const PetFinderComponent = () => {
  const [cats, setCats] = useState([]);
  const [location, setLocation] = useState('');

  const fetchCats = async () => {
    const petfinderToken = process.env.REACT_APP_PETFINDER_ACCESS_TOKEN;
    try {
      const response = await axios.get(`?type=cat&location=${location}&distance=10`, {
         headers: {
          Authorization: `Bearer ${petfinderToken}`
        }
      });
      setCats(response.data.animals);
    } catch (error) {
      console.error(error);
    }
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    if (location) {
      fetchCats();
    }
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
          <img src={cat.photos[0]?.medium} alt={cat.name} />
          <p>{cat.description}</p>
        </div>
      ))}
    </div>
  )

  
}

export default PetFinderComponent;
