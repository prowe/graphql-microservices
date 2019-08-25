#!/bin/bash

export AWS_REGION=us-east-1

aws cloudformation package \
    --template-file=cloudformation.template.yml \
    --s3-bucket=prowe-deploy-bucket \
    --output-template-file=cloudformation.transformed.yml

aws cloudformation deploy \
    --stack-name=prowe-teammate-service \
    --template-file=cloudformation.transformed.yml \
    --capabilities=CAPABILITY_IAM