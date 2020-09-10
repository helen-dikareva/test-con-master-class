import { Selector } from 'testcafe';

fixture `A set of examples that illustrate how to use TestCafe API`
    .page `https://devexpress.github.io/testcafe/documentation/getting-started/`;

//emulation
//testcafe "chrome:emulation:device=iphone X" test.js

test('How to press a specified key (Press Key user action)', async t => {
    await t
        .click('div.close-icon')
        .hover(Selector('a').withText('Assertions'))
        .click(Selector('a').withText('Assertions'));
});