import json
import boto3
from collections import defaultdict

timestream_query = boto3.client('timestream-query', region_name='us-east-1')

def lambda_handler(event, context):
    query_string = """
    SELECT time, 
           CASE WHEN measure_name = 'temperature' THEN measure_value::double END AS temperature,
           CASE WHEN measure_name = 'humidity' THEN measure_value::double END AS humidity
    FROM "raspberrypiDB"."raspberrypiTable"
    WHERE measure_name IN ('temperature', 'humidity')
    ORDER BY time DESC
    LIMIT 2
    """
    
    try:
        response = timestream_query.query(QueryString=query_string)
        rows = response['Rows']
        merged_data = defaultdict(dict)

        # Merge temperature and humidity rows by timestamp
        for row in rows:
            time_value = row['Data'][0]['ScalarValue']
            temperature_value = row['Data'][1].get('ScalarValue')
            humidity_value = row['Data'][2].get('ScalarValue')
            
            if temperature_value:
                merged_data[time_value]['temperature'] = temperature_value
            if humidity_value:
                merged_data[time_value]['humidity'] = humidity_value

        # Format the merged data into a list
        result = [{'time': time, **values} for time, values in merged_data.items()]
        
        # Sort the data by time (descending order)
        result.sort(key=lambda x: x['time'], reverse=True)
        
        return {
            'statusCode': 200,
            'body': json.dumps(result),
            'headers': {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "GET"
            }
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)}),
            'headers': {'Content-Type': 'application/json'}
        }
