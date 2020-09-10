import { Selector } from 'testcafe';

fixture `A set of examples that illustrate how to use TestCafe API`
    .page `http://devexpress.github.io/testcafe/example/`;

test('How to press a specified key (Press Key user action)', async t => {
    await t.typeText('#developer-name', 'Peter Parker');

    const initialValue = await Selector('#developer-name').value;

    await t
        .pressKey('home right . delete delete delete delete')
        .expect(Selector('#developer-name').value).notEql(initialValue)
        .expect(Selector('#developer-name').value).eql('P. Parker');
});