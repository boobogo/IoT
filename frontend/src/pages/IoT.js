// IoT.js
import '../styles/IoT.css';
// import profileImage from '../images/profile.jpg';
import React, { useState } from 'react';

const IoT = () => {
    const [temperature, setTemperature] = useState('--');
    const [isLedOn, setIsLedOn] = useState(false);

    const fetchSensorData = async () => {
        try {
            const response = await fetch('https://08r17i1i51.execute-api.us-east-1.amazonaws.com/prod/temperature');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setTemperature(data.temperature);
        } catch (error) {
            console.error('Error fetching sensor data:', error);
        }
    };

    const toggleLed = async () => {
        const newLedState = !isLedOn;
        setIsLedOn(newLedState);
        try {
            const response = await fetch('https://08r17i1i51.execute-api.us-east-1.amazonaws.com/prod/control-led', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ action: newLedState ? 'ON' : 'OFF' }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data.message);
        } catch (error) {
            console.error('Error sending LED control command:', error);
        }
    };

    return (
      <div className="iot">
        <h2>Smart home Dashboard</h2>
        <div className='container'>
            <div className="dashboard-item">
                <h3>Monitor</h3>
                <div className="sensor-data">
                    <span>Temperature: </span>
                    <span id="temperature-value">{temperature}</span>
                    <br />
                    <button onClick={fetchSensorData}>Get Sensor Data</button>
                </div>
            </div>
            <div className="dashboard-item">
                <h3>Control</h3>
                <button className="switch" onClick={toggleLed}>
                    {isLedOn ? 'Turn OFF' : 'Turn ON'}
                </button>
                <p>LED is {isLedOn ? 'ON' : 'OFF'}</p>
            </div>
        </div>
      </div>
    );
};

export default IoT;