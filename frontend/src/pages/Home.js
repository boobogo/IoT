// Home.js
import React from 'react';
import '../styles/Home.css';
import profileImage from '../images/profile.jpeg'; // Import the image

function Home() {
  return (
    <div className="home">
      <h2>Welcome to My Portfolio Page!</h2>
      <div className='container'>
        <img src={profileImage} alt="home" />
        <p>
          I’m an IT graduate with a strong interest in data science and software development. I analyze data and build predictive models using machine learning. 
          I also have experience developing web applications, working on both front-end and back-end systems. Additionally, 
          I have foundational knowledge in cloud computing, DevOps, and IoT. I’m particularly passionate about algorithmic trading and
          focus on automating and optimizing trading strategies through data-driven approaches.
        </p>
      </div>
    </div>
  );
}

export default Home;
