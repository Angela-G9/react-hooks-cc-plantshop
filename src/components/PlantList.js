import React from 'react';
import PlantCard from './PlantCard';

function PlantList({ plants, ...props }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} {...props} />
      ))}
    </ul>
  );
}

export default PlantList;