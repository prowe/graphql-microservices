
const { buildSchema, printSchema } = require('graphql');
const { readFile } = require('fs');
const util = require('util');
const readFileAsync = util.promisify(readFile);

async function go() {
    const paths = [
        'schema.graphql',
        '../teammate-service/schema.graphql'
    ];

    const schemaParts = await Promise.all(paths.map(path => readFileAsync(path)));

    const mergedSchema = schemaParts.join('\n');

    console.log('merged schema\n\n', mergedSchema);

    const schema = buildSchema(mergedSchema);

    console.log('printed schema\n\n', printSchema(schema));
}

go().catch(e => console.error(e));