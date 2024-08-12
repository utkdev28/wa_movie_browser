// src/Card.js
import React from 'react';
import '../css/card.css';

export default function Card ({ title, content, imageUrl }){
  return (
    <div className="card">
      {imageUrl && <img src={`https://image.tmdb.org/t/p/w500/`+imageUrl} alt={title} className="card-image" />}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-content">{content.legth > 240 ? content.split('.')[0] : content }</p>
      </div>
    </div>
  );
};

