import { Selector } from 'testcafe';

fixture `Screenshot functionality`
    .page `http://devexpress.github.io/testcafe/example`;

//demo
test('Take a screenshot on the page', async t => {
    await t.takeScreenshot();
});

test('Save a screenshot with a specific name', async t => {
    await t.takeScreenshot({
        path: 'my_screenshots/first.png'
    });
});

test('Save a screenshot with a specific name using user agent', async t => {
    await t.takeScreenshot({
        path: `my_screenshots/${t.browser.name}/first.png`
    });
});

//demo
test
    .page('https://www.devexpress.com/')
    ('Comparison of a regular and a fullPage screenshots', async t => {
        await t
            .takeScreenshot()
            .takeScreenshot({
                fullPage: true
            });
    });

//demo
test('Take element screenshot', async t => {
    await t
        .takeElementScreenshot(Selector('fieldset').withText('Which features are important to you'), {
            /*scrollTargetX,
             scrollTargetY,

             includeMargins,
             includeBorders,
             includePaddings,

             crop: { top, left, bottom, right }*/
        });
});

//demo
test('Take screenshot on fail', async t => {
    //testcafe chrome *.js -s takeOnFails=true
    await t.click(Selector('.not-exists', { timeout: 0 }));
});
