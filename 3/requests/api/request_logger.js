import { RequestLogger } from 'testcafe';

//constructor
const logger = RequestLogger();

//filter
//String, array of string
RequestLogger('https://example.com');
RequestLogger(['https://example.com', 'http://localhost:8080']);

//RegExp
RequestLogger(/\/site\/collection\/(\d+)\/images/);

//Object (by parameters)
RequestLogger({
    url:    'https://testcafe/example/',
    method: 'post',
    isAjax: true
});

//Function (by predicate)
RequestLogger(request => {
    return request.userAgent === 'Chrome 77.0.3865.120 / macOS 10.15.1' &&
           request.url === 'http://example.com' &&
           request.method === 'post' &&
           request.isAjax &&
           request.headers['content-type'] === 'application/json' &&
           request.body.toString() === 'foo=bar';
});

//options
RequestLogger('https://testcafe/example/', {
    logRequestHeaders:    true,
    logRequestBody:       true,
    stringifyRequestBody: true,

    logResponseHeaders:    true,
    logResponseBody:       true,
    stringifyResponseBody: true
});

//attaching hook
//fixture
fixture `requestHooks object`
    .requestHooks(logger);

fixture `requestHooks array`
    .requestHooks([logger]);

//test
test
    .requestHooks(logger)
    ('requestHooks object', async () => {
    });

test
    .requestHooks([logger])
    ('requestHooks array', async () => {
    });

//test controller
test('test controller', async t => {
    await t
        .addRequestHooks(logger)
        .removeRequestHooks(logger)

        .addRequestHooks([logger])
        .removeRequestHooks([logger]);
});

//logger API
logger.requests //-> Array

logger.contains(request => {
  /*  {
        userAgent: String,
            request: {
        url: String,
            method: String,
            headers: Object,
            body: Buffer | String,
            timestamp: Number
    },
        response: {
            statusCode: Number,
                headers: Object,
                body: Buffer | String,
                timestamp: Number
        }
    }*/
}); //->Promise(boolean)

logger.count(request => {
  /*  {
        userAgent: String,
            request: {
        url: String,
            method: String,
            headers: Object,
            body: Buffer | String,
            timestamp: Number
    },
        response: {
            statusCode: Number,
                headers: Object,
                body: Buffer | String,
                timestamp: Number
        }
    }*/
}); //->Promise(Numeric)

logger.clear(); //void 0
