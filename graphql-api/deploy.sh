#!/bin/bash

export AWS_REGION=us-east-1

cat schemas/*.graphql > merged-schema.graphql

aws cloudformation package \
    --template-file=cloudformation.template.yml \
    --s3-bucket=prowe-deploy-bucket \
    --output-template-file=cloudformation.transformed.yml

aws cloudformation deploy \
    --stack-name=prowe-graphql-api \
    --template-file=cloudformation.transformed.yml \
    --capabilities=CAPABILITY_IAM