import ibm_boto3
from ibm_botocore.client import Config, ClientError
from django.conf import settings

COS_BUCKET_NAME = 'shipment-initial-photos'
COS_ENDPOINT = 'https://s3.us.cloud-object-storage.appdomain.cloud'
COS_API_KEY_ID = 'yoc93lQzrJXAYT-TC1IfyzeRjVcon549dH5AncqM98xb'
COS_AUTH_ENDPOINT = 'https://iam.cloud.ibm.com/identity/token'
COS_RESOURCE_CRN = 'crn:v1:bluemix:public:cloud-object-storage:global:a/4d36c4a750b3493e81c071790d54424a:78ae1019-6dd0-42cf-851a-92a9019da4aa:bucket:shipment-initial-photos'

bucket = ibm_boto3.resource('s3',
    ibm_api_key_id=COS_API_KEY_ID,
    ibm_service_instance_id=COS_RESOURCE_CRN,
    ibm_auth_endpoint=COS_AUTH_ENDPOINT,
    config=Config(signature_version="oauth"),
    endpoint_url=COS_ENDPOINT
).Bucket(COS_BUCKET_NAME)

def delete_file(filename):
    bucket.delete_objects(
        Delete={
            'Objects': [
                {
                    'Key': filename
                }
            ]
        }
    )

def upload_file(fileobj, filename):
    print(fileobj, filename)
    bucket.upload_fileobj(fileobj, filename)
    return f'{COS_ENDPOINT}/{COS_BUCKET_NAME}/{filename}'

def get_file_stream(filename):
    return bucket.Object(filename).get().get('Body')
