import React from 'react';
import './App.css';
import image1 from './content creator.jpg';
import image2 from './istockphoto-1373155288-612x612.jpg';

function HomePage() {
  return (
    <div className="home">
      <h1>Welcome to My Website</h1>
      <div className="image-container">
        <img src={image1} alt="Content Creation Background" />
        <img src={image2} alt="Virtual Assistant Background" />
      </div>
      <p>This is a brief introduction to your website.</p>
    </div>
  );
}

export default HomePage;
