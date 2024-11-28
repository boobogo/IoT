import json
import boto3

iot_client = boto3.client('iot-data', region_name='us-east-1')

def lambda_handler(event, context):
    try:
        body = json.loads(event['body'])
        action = body.get('action')
        
        if action not in ['ON', 'OFF']:
            return {
                'statusCode': 400,
                'body': json.dumps({'error': 'Invalid action'}),
                'headers': {'Content-Type': 'application/json'}
            }
        
        # Publish the action to the IoT topic
        response = iot_client.publish(
            topic='home/led',
            qos=1,
            payload=json.dumps({'action': action})
        )
        
        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'Command sent'}),
            'headers': {'Content-Type': 'application/json'}
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)}),
            'headers': {'Content-Type': 'application/json'}
        }
