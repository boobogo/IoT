// Home.js
import React from 'react';
import profileImage from '../images/profile.jpeg'; // Import the image
import SwiperCarousel from "../components/SwiperCarousel";
import InfoWidget from "../components/InfoWidget";
import JokeWidget from '../components/JokeWidget';
import WelcomeBanner from '../components/WelcomeBanner';

function Home() {
  return (
    <div className="flex flex-col items-center">
      <InfoWidget />
      <WelcomeBanner />
      <div className="flex flex-col md:flex-row items-center gap-5 md:gap-12 my-10 p-5">
        <img src={profileImage} alt="home" className="max-w-[300px] h-auto rounded-md" />
        <div className="max-w-md text-justify px-4">
          <p className="text-xl font-bold mb-2">About Me</p>
          <p className="leading-relaxed text-lg">
            I’m an IT graduate with a strong interest in software development and data science. I analyze data and build predictive models using machine learning. 
            I also have experience developing web applications, working on both front-end and back-end systems. Additionally, 
            I have foundational knowledge in cloud computing, DevOps, and IoT. I’m particularly passionate about algorithmic trading and
            focus on automating and optimizing trading strategies through data-driven approaches.
          </p>
        </div>
      </div>
      <SwiperCarousel />
      <JokeWidget/>
    </div>
  );
}

export default Home;