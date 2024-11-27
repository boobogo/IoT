#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status

echo "Setting up Raspberry Pi..."

# Update system packages
echo "Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install necessary system packages
echo "Installing necessary system packages..."
sudo apt install -y python3-pip python3-venv python3-dev build-essential

# Create Python virtual environment
echo "Creating Python virtual environment..."
python3 -m venv venv
source venv/bin/activate

# Install Python dependencies
echo "Installing Python dependencies..."
pip install -r requirements.txt

# Deactivate virtual environment
deactivate

echo "Setup complete!"
