import { Selector } from 'testcafe';

fixture('2.Page Model functionality')
    .page('https://devexpress.github.io/testcafe/example/');

const developerNameInput = Selector('#developer-name');

test('Text typing basics', async t => {
    await t
        .typeText(developerNameInput, 'Peter')
        .typeText(developerNameInput, 'Paker', { replace: true })
        .typeText(developerNameInput, 'r', { caretPos: 2 })
        .expect(developerNameInput.value).eql('Parker');
});
