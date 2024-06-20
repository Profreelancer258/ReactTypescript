import React from 'react';

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

      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: profreelancer@gmail.com</p>
        <p>Connect on <a href="https://facebook.com">Facebook</a></p>
        <p>Follow on <a href="https://instagram.com">Instagram</a></p>
      </section>

      <button className="enquiry-button">Enquire Now</button>
    </div>
  );
};

export default Home;
