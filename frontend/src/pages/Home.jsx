// Home.js
import React from 'react';
import '../styles/Home.css';
import profileImage from '../images/profile.jpeg'; // Import the image
import SwiperCarousel from "../components/SwiperCarousel";
import InfoWidget from "../components/InfoWidget";
import JokeWidget from '../components/JokeWidget';


function Home() {
  return (
    <div className="home">
      <InfoWidget />
      <SwiperCarousel />
      <div className='container'>
        <img src={profileImage} alt="home" />
        <div className='about-me'>
          <h2>About Me</h2>
          <p>
            I’m an IT graduate with a strong interest in software development and data science. I analyze data and build predictive models using machine learning. 
            I also have experience developing web applications, working on both front-end and back-end systems. Additionally, 
            I have foundational knowledge in cloud computing, DevOps, and IoT. I’m particularly passionate about algorithmic trading and
            focus on automating and optimizing trading strategies through data-driven approaches.
          </p>
        </div>
      </div>
      <JokeWidget />
    </div>
  );
}

export default Home;
