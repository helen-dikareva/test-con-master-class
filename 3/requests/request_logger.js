import { Selector, RequestLogger } from 'testcafe';

const logger = RequestLogger();

fixture `Request Logger`
    .requestHooks(logger)
    .page `http://devexpress.github.io/testcafe/example`;

test('test requests logging', async t => {
    await t
        .typeText('input', 'Alice')
        .click(Selector('button').withText('Submit'));

    console.log(logger.requests);
    console.log('Request count:' + logger.requests.length);

    await t
        .expect(logger.count(({ request }) => {
            return !/jquery/.test(request.url);
        })).eql(8)

        .expect(logger.contains(({ request, response }) => {
            return request.url.indexOf('favicon.ico') > 0 &&
                   request.method === 'get' &&
                   response.statusCode === 200;
        })).ok();

    logger.clear();

    await t.expect(logger.requests.length).eql(0);
});

