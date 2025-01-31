import React from 'react';


const BookCard = ({image,name,genre,author})=>{
    return (
        <div className='book-card'>
            <img src = {image} alt = {name} className='image'/>
            <strong>{name}</strong>
            <h3>Genre: {genre}</h3>
            <h3>author: {author}</h3>

        </div>
    )
}
export default BookCard;
