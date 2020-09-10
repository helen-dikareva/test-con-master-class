fixture('Check a11y')
    .page('https://example.com')
    .clientScripts([
        './node_modules/axe-core/axe.min.js',
        './assets/a11y.js'
    ]);

test("Shouldn't have any a11y issues" , async t => {
});
