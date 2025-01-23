import React, { useState } from 'react';
import '../styles/IoT.css';


const IoT = () => {
    const [temperature, setTemperature] = useState('--');
    const [humidity, setHumidity] = useState('--');
    const [isLedOn, setIsLedOn] = useState(false);

    const fetchSensorData = async () => {
        try {
            const response = await fetch('https://08r17i1i51.execute-api.us-east-1.amazonaws.com/prod/temperature');
            if (!response.ok) throw new Error('Network response was not ok');
    
            const data = await response.json();
    
            setTemperature(data[0].temperature);
            setHumidity(data[0].humidity);
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
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: newLedState ? 'ON' : 'OFF' }),
            });
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            console.log(data.message);
        } catch (error) {
            console.error('Error sending LED control command:', error);
        }
    };

    return (
        <div className="iot">
            <h2>Smart Home Dashboard</h2>
            <div className="container">
                <div className="dashboard-item">
                    <h3>Monitor</h3>
                    <div className="sensor-data">
                        <div className="sensor-item">
                            <span className="sensor-label">Temperature: </span>
                            <span id="temperature-value" className="sensor-value temperature">
                                {temperature !== '--' ? `${temperature} °C` : '--'}
                            </span>
                        </div>
                        <div className="sensor-item">
                            <span className="sensor-label">Humidity: </span>
                            <span id="humidity-value" className="sensor-value humidity">
                                {humidity !== '--' ? `${humidity} %` : '--'}
                            </span>
                        </div>
                        <button className="fetch-data-button" onClick={fetchSensorData}>
                            Get Sensor Data
                        </button>
                    </div>
                </div>
                <div className="dashboard-item">
                    <h3>Control</h3>
                    <div className="led-container">
                        <p>LED status: <span className={`led-status ${isLedOn ? 'on' : 'off'}`}>{isLedOn ? 'ON' : 'OFF'}</span></p>
                        <div
                            className={`led-control ${isLedOn ? 'on' : 'off'}`}
                            onClick={toggleLed}
                            >
                            <div className={`led-indicator ${isLedOn ? 'led-on' : 'led-off'}`}></div>
                            <span>{isLedOn ? 'Turn OFF' : 'Turn ON'}</span>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default IoT;
