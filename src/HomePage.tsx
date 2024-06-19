// src/HomePage.tsx

import React from 'react';
import './HomePage.css'; // Import your CSS file for custom styles

const HomePage: React.FC = () => {
  const chatbotUrl = 'https://customer-service-66641f.zapier.app/'; // Replace with your actual chatbot AI link
  const facebookUrl = 'https://www.facebook.com/share/ESDErWgimpFAM8z2/?mibextid=LQQJ4d'; // Replace with your Facebook page link
  const instagramUrl = 'https://www.instagram.com/prowritingandediting?igsh=MThvazE5MWI4YnY1MQ%3D%3D&utm_-source=qr'; // Replace with your Instagram page link

  return (
    <div>
      <h1>Welcome to My Freelancing Portfolio and Services Website</h1>
      <p>Services offered:</p>
      <ul className="service-list">
        <li>Pro Writing & Editing</li>
        <li>Web Pages Design</li>
        <li>Data Entry & Analysis</li>
        <li>Social Media Marketing</li>
        <li>Virtual Assistant</li>
        <li>English Tutoring</li>
      </ul>
      <p>Contact me:</p>
      <ul className="contact-list">
        <li>Email: profreelancer@gmail.com</li>
        {/* Add Facebook icon */}
        <li>
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-square"></i> Facebook
          </a>
        </li>
        {/* Add Instagram icon */}
        <li>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </li>
      </ul>
      {/* Use an <a> tag for the button to handle navigation */}
      <a href={chatbotUrl} target="_blank" rel="noopener noreferrer">
        <button>Enquiry</button>
      </a>
    </div>
  );
};

export default HomePage;
