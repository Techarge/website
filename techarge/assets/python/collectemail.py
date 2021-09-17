import json
import boto3
import botocore
import uuid
s3 = boto3.client('s3')
def lambda_handler(event, context):
    print (boto3.__version__)
    #check for params
    if 'queryStringParameters' in event:
        print (json.dumps(event['queryStringParameters'], indent=4))
        s3_put_model(
            str(uuid.uuid4()),
            'collect/email.techarge.co.uk',
            event['queryStringParameters'],
            'techarge.collectemail')
    body = { "message":"SUCCEED" }
    response = {
            'statusCode': 200,
            'headers': {
                "Access-Control-Allow-Origin" : "https://website.techarge.co.uk"
            },
            'body': json.dumps(body, indent=4)
        }
    return response
def s3_put_model(fid, prefix, model, bucketName):
    """
    send model to bucket
    """
    try:
        bodydata = json.dumps(model, indent=4)
        bodydata += " test "
        s3.put_object(Bucket='techarge-collectemail',
              Key='{0}/{1}.json'.format(prefix,fid),
              Body=f"{bodydata}")
    except Exception as e:
        print(e)
        raise e

