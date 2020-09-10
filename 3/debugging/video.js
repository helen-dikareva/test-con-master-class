import { Selector } from 'testcafe';

fixture`A set of examples that illustrate how to use TestCafe API`
    .page`http://devexpress.github.io/testcafe/example/`;

const developerName = Selector('#developer-name');

//testcafe chrome *.js --video videos
//testcafe chrome *.js --video videos --video-options failedOnly=true,singleFile=true

test('How to type text into an input (t.typeText user action)', async t => {
    await t
        .typeText(developerName, 'Peter')
        .typeText(developerName, 'Paker', { replace: true })
        .typeText(developerName, 'r', { caretPos: 2 })
        .expect(developerName.value).eql('Parker');
});

test('How to type text into an input, click at a specified position and backspace a symbol (t.typeText, t.click, t.pressKey user actions and eql() assertion)', async t => {
    await t
        .typeText(developerName, 'Peter Parker')
        .click(developerName, { caretPos: 5 })
        .pressKey('backspace')
        //a wrong assertion
        .expect(developerName.value).eql('Parker Peter');
});

test('How to click check boxes and then verify their states (t.click user action and ok() assertion)', async t => {
    await t
        .click(Selector('label').withText('Support for testing on remote devices'))
        .click(Selector('label').withText('Re-using existing JavaScript code for testing'))
        .expect(Selector('#remote-testing').checked).ok()
        .expect(Selector('#reusing-js-code').checked).ok();
});
