# Smart Home IoT System  

## Overview  
This project demonstrates a smart home IoT system that enables remote control and monitoring of home devices through a React-based web application. It integrates IoT devices, AWS cloud services, and DevOps practices to showcase an end-to-end system design.  

## Features  
- **Web Dashboard**: Monitor sensor data and control devices in real time.  
- **IoT Integration**: Raspberry Pi with DHT11 sensor and LED control using AWS IoT Core and MQTT.  
- **Cloud Functionality**: Backend operations handled by AWS Lambda, API Gateway, and TimeStream Database.  
- **Email Notifications**: Triggered by device control commands.  
- **DevOps & Hosting**:  
  - Dockerized frontend hosted on AWS EC2 with CI/CD pipeline using GitHub Actions.  
  - Kubernetes deployment on a local Minikube cluster with external access via Nginx and custom domains.  

## System Architecture  
### 1. Web App  
- **Frontend**: React  
- **Backend**: AWS Lambda (Node.js) via API Gateway  
- **Deployment**: Docker (AWS EC2) and Kubernetes (Minikube)

### 2. IoT Devices  
- **Raspberry Pi**: DHT11 sensor for temperature/humidity and LED for device control.  
- **Communication**: MQTT via AWS IoT Core  

### 3. Cloud Services  
- **Data Storage**: AWS TimeStream  
- **Notifications**: AWS SNS  
- **Compute**: AWS Lambda  

## Getting Started  

### Prerequisites  
Before running this project, ensure you have the following:
- **AWS account**: For setting up cloud services (IoT Core, Lambda, API Gateway, TimeStream, SNS).
- **Raspberry Pi**: With DHT11 sensor and LED for device control.
- **No-IP account**: For domain management.

### Deployment  

#### 1. Set Up AWS Services  
You need to configure the following AWS services:

- **AWS IoT Core**: Set up a topic for sensor data (`home/sensor-data`) and device control (`home/led`).
- **AWS Lambda**: Create Lambda functions to handle backend operations.
- **AWS API Gateway**: Set up API Gateway to connect the frontend with Lambda.
- **AWS TimeStream**: Set up a time-series database for storing sensor data.
- **AWS SNS**: Configure email notifications for control commands.

#### 2. Configure Raspberry Pi  
- Set up the Raspberry Pi to collect data from the DHT11 sensor and publish it to the `home/sensor-data` MQTT topic via AWS IoT Core.
- Set up the Raspberry Pi to listen for device control commands on the `home/led` MQTT topic and control the LED accordingly.

#### 3. Deploy Frontend  
You can deploy the frontend in two ways:

##### Option 1: Dockerized Frontend on AWS EC2  
- Build the Docker image for the frontend and push it to DockerHub.
- Set up an EC2 instance and pull the Docker image from DockerHub.
- Use Nginx to proxy requests to the Docker container serving the frontend.

##### Option 2: Kubernetes Deployment on Minikube  
- Deploy the frontend React app in a Kubernetes pod on your local Minikube cluster.
- Expose the frontend using a NodePort service.
- Use Nginx as a reverse proxy to route external traffic to the Kubernetes service.

### Port Forwarding and Domain Setup  
- For **Option 1 (EC2)**, use **No-IP** for domain management (e.g., `pi.servebeer.com`).
- For **Option 2 (Minikube)**, use **No-IP** for domain management (e.g., `bold.servebeer.com`), and configure port forwarding on your router to access the service externally.

## Tech Stack  
- **Frontend**: React, Nginx  
- **Backend**: AWS Lambda, API Gateway  
- **IoT**: Raspberry Pi, DHT11 sensor, MQTT, AWS IoT Core  
- **Cloud Services**: AWS (EC2, IoT Core, TimeStream, SNS, IAM)
- **DevOps**: Docker, GitHub Actions, Kubernetes (Minikube)

## Contact
For any queries or suggestions, feel free to contact me at bolderdenebayaraa97@gmail.com