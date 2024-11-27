import boto3
from flask import Flask, jsonify, request
import json
from flask_cors import CORS
import os

# Initialize Flask app
app = Flask(__name__)

# Enable CORS
CORS(app)

# Use environment variables for AWS credentials
aws_access_key_id = os.getenv('AWS_ACCESS_KEY_ID')
aws_secret_access_key = os.getenv('AWS_SECRET_ACCESS_KEY')
aws_region = os.getenv('AWS_DEFAULT_REGION')

# Initialize Timestream client
timestream_query = boto3.client('timestream-query', 
                                region_name=aws_region, 
                                aws_access_key_id=aws_access_key_id, 
                                aws_secret_access_key=aws_secret_access_key)

# Initialize IoT client
iot_client = boto3.client('iot-data', 
                          region_name=aws_region, 
                          aws_access_key_id=aws_access_key_id, 
                          aws_secret_access_key=aws_secret_access_key)

# Function to query Timestream for temperature data
def query_temperature():
    query_string = """
    SELECT time, measure_value::double AS temperature
    FROM "raspberrypiDB"."raspberrypiTable"
    WHERE measure_name = 'temperature'
    ORDER BY time DESC
    LIMIT 1
    """
    response = timestream_query.query(QueryString=query_string)
    return response['Rows']

# Route to expose temperature data
@app.route('/temperature', methods=['GET'])
def get_temperature():
    try:
        result = query_temperature()
        if result:
            temperature_data = {
                'time': result[0]['Data'][0]['ScalarValue'],
                'temperature': result[0]['Data'][1]['ScalarValue']
            }
            return jsonify(temperature_data)
        else:
            return jsonify({'error': 'No data found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

#Route to listen on front end and publish to IoT
@app.route('/control-led', methods=['POST'])
def control_led():
    try:
        data = request.json
        action = data.get('action')
        if action not in ['ON', 'OFF']:
            return jsonify({'error': 'Invalid action'}), 400

        response = iot_client.publish(
            topic='home/led',
            qos=1,
            payload=json.dumps({'action': action})
        )
        return jsonify({'message': 'Command sent'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Run the Flask app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)