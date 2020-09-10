import { Selector } from 'testcafe';

import page from './page-model';

fixture `Debugging functionality`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Basic test', async t => {
    await t
        .typeText(page.nameInput, 'Peter')
        .typeText(page.nameInput, 'Paker', { replace: true })
        .typeText(page.nameInput, 'r', { caretPos: 2 })
        .expect(page.nameInput.value).eql('Parker');

    await t.debug();
    await page.submit();

    await t
        .expect(Selector('#article-header').innerText).eql('Thank you, Peter!', {timeout: 0});
});