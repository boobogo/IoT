// Home.js
import React from 'react';
import '../styles/Home.css';
import profileImage from '../images/profile.jpg'; // Import the image

function Home() {
  return (
    <div className="home">
      <h2>Welcome to My Portfolio!</h2>
      <div className='container'>
        <div className="picture">
          <img src={profileImage} alt="home" />
        </div>
        <p>
          I am a passionate developer with expertise in IoT, cloud computing (AWS), 
          full-stack development, and machine learning. My journey as a developer has been 
          driven by a deep curiosity for building innovative solutions, from smart home 
          automation systems to scalable web applications and intelligent algorithms. 
          Here, you can explore some of my projects, showcasing my work across these diverse domains, 
          and get in touch with me to discuss potential collaborations or shared interests. 
          Let's build something amazing together!
        </p>
      </div>
    </div>
  );
}

export default Home;
