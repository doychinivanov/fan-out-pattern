# using CloudFormation
aws cloudformation package --s3-bucket fan-out-sam-template --template-file template.yaml --output-template-file gen/template-generated.yaml

aws cloudformation deploy --template-file gen/template-generated.yaml --stack-name some-name --capabilities CAPABILITY_IAM

# using SAM
sam package --profile doychin_admin_personal --region us-east-1  --template-file template.yaml --s3-bucket fan-out-sam-template --output-template-file cf-template.yaml

sam deploy --profile doychin_admin_personal --region us-east-1 --template-file cf-template.yaml --stack-name fan-out-test --capabilities CAPABILITY_IAM