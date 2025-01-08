import React from 'react';

const EbikeCard = ({ bike, onAddToCart }) => {
  return (
    <div className="ebike-card" style={cardStyle}>
      <h3>{bike.title || 'Unknown Bike'}</h3>
      {bike.large_img && <img src={bike.large_img} alt={bike.title} style={imageStyle} />}
      <p>Price: ₹{bike.price}</p>
      <button onClick={() => onAddToCart(bike)}>Add to Cart</button>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ddd',
  padding: '15px',
  borderRadius: '8px',
  width: '250px',
  textAlign: 'center',
  backgroundColor: '#f9f9f9',
};

const imageStyle = {
  width: '200px',
  height: '150px',
  objectFit: 'cover',
  marginBottom: '10px',
};

export default EbikeCard;
