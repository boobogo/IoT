# IoT Smart Home Project

This project integrates IoT, cloud, and web technologies for home automation.

## Features
- Monitor temperature and humidity using AWS IoT Core and Raspberry Pi.
- Control an LED remotely through a web app.

## Project Structure
- `frontend/`: React app for the dashboard.
- `backend/`: Flask API for Timestream queries and IoT commands.
- `raspberry-pi/`: Python script to handle sensor data and LED control.
- `infrastructure/`: Deployment scripts and configurations.

## Prerequisites
- AWS account with IoT Core and Timestream set up.
- Raspberry Pi with DHT11 sensor and LED connected.
- Raspberry Pi with Raspbian OS
- AWS IoT account and necessary certificates
- Node.js and Python installed locally.

## Setup
1. Clone the repository.
2. Install dependencies for each component:
   - React app: `cd frontend && npm install`
   - Flask app: `cd backend && pip install -r requirements.txt`
3. Add a `.env` file with your configuration.
