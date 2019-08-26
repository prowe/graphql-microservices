const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();

async function saveTeammate(teammate) {
    await documentClient.put({
        TableName: process.env.TABLE_NAME,
        Item: teammate
    }).promise();
}

module.exports.handler = async function putEntity(event, context) {
    const teammate = event.arguments.teammate;
    console.log('creating teammate: ', teammate);
    await saveTeammate(teammate);
    return teammate;
};