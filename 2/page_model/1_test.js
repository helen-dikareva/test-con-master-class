import { Selector } from 'testcafe';

fixture('1.Page Model functionality')
    .page('https://devexpress.github.io/testcafe/example/');

test('Text typing basics', async t => {
    await t
        .typeText('#developer-name', 'Peter')
        .typeText('#developer-name', 'Paker', { replace: true })
        .typeText('#developer-name', 'r', { caretPos: 2 })
        .expect(Selector('#developer-name').value).eql('Parker');
});
