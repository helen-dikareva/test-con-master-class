fixture `JS error handling`
    .page `./raise_error.html`;

test('Click on the button', async t => {
    await t.click('#button');
});
