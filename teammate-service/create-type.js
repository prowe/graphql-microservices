process.env.AWS_REGION='us-east-1';

const AWS = require('aws-sdk');
const appsync = new AWS.AppSync();

const schema = `
type TeammateMutations {
    createTeammate(teammate: Teammate!): Teammate
}
type AnotherType {
    value: String
}
`;

async function go() {
    const result = await appsync.createType({
        apiId: 'pxeqtlms5fgp7n72dpn7j4d4hy',
        definition: schema,
        format: 'SDL'
    }).promise();

    console.log('done', result);
}

go()
    .catch(e => console.error(e));