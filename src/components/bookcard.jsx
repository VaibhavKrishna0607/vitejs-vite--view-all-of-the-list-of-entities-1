import React from 'react';


const BookCard = ({ image, name, genre, author }) => {
  return (
    <div className="book-card">
      <img src={image} alt={name} className="book-image" />
      <h2>{name}</h2>
      <h3>Genre: {genre}</h3>
      <h3>Author: {author}</h3>
    </div>
  );
};

export default BookCard;
