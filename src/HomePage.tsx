import React from 'react';
import image1 from './content creator.jpg';  // Adjust the path relative to src/
import image2 from './istockphoto-1373155288-612x612.jpg';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to My Freelancing Portfolio and Services Website</h1>

      <section className="services">
        <h2>Services Offered</h2>
        <ul>
          <li>Pro Writing & Editing</li>
          <li>Web Page Design</li>
          <li>Data Entry & Analysis</li>
          <li>Social Media Marketing</li>
          <li>Virtual Assistant</li>
          <li>English Tutoring</li>
        </ul>
      </section>

      <section className="about">
        <h2>About Me</h2>
        <p>Insert a brief description about yourself here.</p>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: profreelancer@gmail.com</p>
        <p>Connect on <a href="https://facebook.com">Facebook</a></p>
        <p>Follow on <a href="https://instagram.com">Instagram</a></p>
      </section>

      <section className="gallery">
        <h2>Portfolio Gallery</h2>
        <div className="image-container">
          <img src={image1} alt="Content Creation Image Background" />
          <img src={image2} alt="Virtual Assistant Backgroung Image" />
          {/* Add more images as needed */}
        </div>
      </section>

      <button className="enquiry-button">Enquire Now</button>
    </div>
  );
};

export default Home;
