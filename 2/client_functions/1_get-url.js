import { ClientFunction } from 'testcafe';

const getUrl = ClientFunction(() => window.location.href);

fixture `Client function demo`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Get url', async t => {
    const url = await getUrl();

    console.log('Site URL:' + url);

    await t.expect(getUrl()).eql('https://devexpress.github.io/testcafe/example/')
});
