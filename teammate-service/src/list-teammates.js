const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();

module.exports.handler = async function listTeammates(event, context) {
    const results = await documentClient.scan({
        TableName: process.env.TABLE_NAME,
    }).promise();

    return {
        teammates: results.Items
    };
};