# Raspberry Pi IoT Project

This project uses a Raspberry Pi to read temperature and humidity data from a DHT11 sensor and control an LED via AWS IoT. The data is published to AWS IoT and can be controlled remotely.

## Prerequisites

- Raspberry Pi with Raspbian OS
- DHT11 sensor
- LED
- AWS IoT account and necessary certificates

## Setup

### Hardware Setup

1. Connect the DHT11 sensor to GPIO17 (pin 11) on the Raspberry Pi.
2. Connect the LED to GPIO16 (pin 36) on the Raspberry Pi.
