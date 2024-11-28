import json
import boto3

timestream_query = boto3.client('timestream-query', region_name='us-east-1')

def lambda_handler(event, context):
    query_string = """
    SELECT time, measure_value::double AS temperature
    FROM "raspberrypiDB"."raspberrypiTable"
    WHERE measure_name = 'temperature'
    ORDER BY time DESC
    LIMIT 1
    """
    
    try:
        response = timestream_query.query(QueryString=query_string)
        result = response['Rows']
        
        if result:
            temperature_data = {
                'time': result[0]['Data'][0]['ScalarValue'],
                'temperature': result[0]['Data'][1]['ScalarValue']
            }
            return {
                'statusCode': 200,
                'body': json.dumps(temperature_data),
                'headers': {'Content-Type': 'application/json'}
            }
        else:
            return {
                'statusCode': 404,
                'body': json.dumps({'error': 'No data found'}),
                'headers': {'Content-Type': 'application/json'}
            }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)}),
            'headers': {'Content-Type': 'application/json'}
        }
