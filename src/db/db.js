import ydb from "ydb-sdk";

const { Driver, getCredentialsFromEnv, getLogger } = ydb;

const logger = getLogger({ level: 'debug '});
const endpoint = 'grpcs://ydb.serverless.yandexcloud.net:2135';
const database = '/ru-central1/b1girmlchtbfutfj9vue/etnecnpm916j74huqv3b';
const authService = getCredentialsFromEnv();
console.log(authService);

const driver = new Driver({endpoint, database, authService});

const run = async () => {
    try {
        if (!await driver.ready(10000)) {
            logger.fatal('Driver has not become ready in 10 seconds!');
            process.exit(1);
        }

        await driver.tableClient.withSession(async (session) => {
            console.log(session);
        });
    } catch (e) {
        console.log(e);
    }
};

run();
