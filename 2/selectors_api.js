import { Selector } from 'testcafe';

fixture `Selectors API`
    .page `http://devexpress.github.io/testcafe/example`;

test('Test', async t => {
    //css selector
    await t.click('.class-name');

    //Selector
    //assertion
    await t.expect(Selector('.my-element').textContent).eql('my text');

    const cssSelector = '.my-element';
    const myElement   = Selector(cssSelector);

    //Selector in action
    await t
        .click(Selector('.my-element'))
        .expect(myElement.exists).ok();

    //filter methods
    Selector('.my-class').nth(3);

    Selector('.my-class').filter('.child');

    Selector('.my-class').filterVisible();
    Selector('.my-class').filterHidden();

    Selector('.my-class').withExactText('expected element\'s text');
    Selector('.my-class').withText('expected');

    Selector('.my-class').withAttribute('attr-name');
    Selector('.my-class').withAttribute(/^attr\d+/);

    Selector('.my-class').withAttribute('attr-name', 'attr value');
    Selector('.my-class').withAttribute('id', /ctl\d+_ctl\d+_Content_Email_I/);

    Selector('.my-class').filter(domNode => {

    });

    //search methods
    Selector('.my-class').child();
    Selector('.my-class').child(1);
    Selector('.my-class').child('input');

    Selector('.my-class').parent();
    Selector('.my-class').parent(1);
    Selector('.my-class').parent('input');

    Selector('.my-class').sibling();
    Selector('.my-class').sibling(1);
    Selector('.my-class').sibling('input');

    Selector('.my-class').nextSibling();
    Selector('.my-class').nextSibling(1);
    Selector('.my-class').nextSibling('input');

    Selector('.my-class').prevSibling();
    Selector('.my-class').prevSibling(1);
    Selector('.my-class').prevSibling('input');

    Selector('.my-class').find('input');
    Selector('.my-class').find(element => {
    });

    //function in the constructor
    Selector(el => {

    });

    const getTableCell = Selector((row, column) => {
        return document.getElementById('my-table').rows[row].cells[column];
    });

    //DOM Node state
    Selector('.my-class').count;
    Selector('.my-class').exists;
    Selector('.my-class').visible;
    Selector('.my-class').getAttribute('attr-name');
    Selector('input').hasClass('.my-class');

    await t
        .expect(Selector('input[type="text"]').value).eql('username')
        .expect(Selector('input[type="checkbox"]').checked).ok();

});
