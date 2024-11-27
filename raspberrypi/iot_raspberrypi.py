import RPi.GPIO as GPIO
from awscrt import mqtt
from awsiot import mqtt_connection_builder
import threading
import json
import random
from datetime import datetime
import os
from dotenv import load_dotenv

import adafruit_dht
import board
import time

# Load environment variables from .env file
load_dotenv()

# Set the sensor type and the GPIO pin
dht_device = adafruit_dht.DHT11(board.D17)  # GPIO17

# Set up GPIO for Raspberry Pi
LED_PIN = 16  # GPIO pin where the LED is connected
GPIO.setmode(GPIO.BCM)
GPIO.setup(LED_PIN, GPIO.OUT)
GPIO.output(LED_PIN, GPIO.LOW)

# AWS IoT configuration
ENDPOINT = os.getenv("AWS_IOT_ENDPOINT") 
CLIENT_ID = os.getenv("AWS_IOT_CLIENT_ID")
PATH_TO_CERT = os.getenv("AWS_IOT_CERT_PATH")
PATH_TO_KEY = os.getenv("AWS_IOT_KEY_PATH")
PATH_TO_ROOT = os.getenv("AWS_IOT_ROOT_PATH")
TOPIC_LED = "home/led"
TOPIC_SENSOR = "home/sensor-data"


# MQTT connection setup
mqtt_connection = mqtt_connection_builder.mtls_from_path(
    endpoint=ENDPOINT,
    cert_filepath=PATH_TO_CERT,
    pri_key_filepath=PATH_TO_KEY,
    ca_filepath=PATH_TO_ROOT,
    client_id=CLIENT_ID,
    clean_session=False,
    keep_alive_secs=30
)

# Callback for when a message is received
def on_message_received(topic, payload, **kwargs):
    message = payload.decode('utf-8')
    print(f"Received message on topic {topic}: {message}")
    if topic == TOPIC_LED:
        try:
            message_json = json.loads(message)
            action = message_json.get('action', '').strip().upper()
            if action == "ON":
                GPIO.output(LED_PIN, GPIO.HIGH)
                print("LED turned ON")
            elif action == "OFF":
                GPIO.output(LED_PIN, GPIO.LOW)
                print("LED turned OFF")
        except json.JSONDecodeError:
            print("Failed to decode JSON message")

# Connect to AWS IoT
print(f"Connecting to {ENDPOINT} with client ID '{CLIENT_ID}'...")
connect_future = mqtt_connection.connect()
connect_future.result()
print("Connected!")

# Subscribe to the LED control topic
print(f"Subscribing to topic: {TOPIC_LED}")
subscribe_future, packet_id = mqtt_connection.subscribe(
    topic=TOPIC_LED,
    qos=mqtt.QoS.AT_LEAST_ONCE,
    callback=on_message_received
)
subscribe_future.result()
print(f"Subscribed to {TOPIC_LED}")

try:
    while True:
        try:
            temperature = float(dht_device.temperature)
            humidity = float(dht_device.humidity)
            current_time = datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')
            sensor_data = {
                "deviceID": "raspberrypi",
                "temperature": temperature,
                "humidity": humidity,
                "time": current_time
            }
            # Publish sensor data
            message_json = json.dumps(sensor_data)
            mqtt_connection.publish(topic=TOPIC_SENSOR, payload=message_json, qos=mqtt.QoS.AT_LEAST_ONCE)
            print(f"Published to {TOPIC_SENSOR}: {message_json}")

        except RuntimeError as error:
            # Handle sensor read errors
            print(f"Sensor read error: {error.args[0]}")

        # Wait for 5 seconds before publishing next data
        time.sleep(5)

except KeyboardInterrupt:
    print("Disconnecting and cleaning up...")
    mqtt_connection.disconnect().result()
    GPIO.cleanup()
    print("Disconnected!")