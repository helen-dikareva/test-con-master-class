import { ClientFunction } from 'testcafe';

const checkAnimationDone = ClientFunction(() => {
    //...
});

fixture `Client function demo`
.skip
    .page `http://www.example.com/`;

test('Wait for animation', async t => {
    await t.expect(checkAnimationDone()).ok({ timeout: 50000 });
});
