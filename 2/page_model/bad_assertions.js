import { Selector } from 'testcafe';

fixture('Page Model functionality');

test('Check the new post', async t => {
    await t
        .expect(page.author).eql('Elon Musk')
        .expect(page.subject).eql('Long Live Robots')
        .expect(page.isPublished).ok();
});

test('Check the new post', async t => {
    await page.checkNewPost('Elon Musk', 'Long Live Robots', true);
});

