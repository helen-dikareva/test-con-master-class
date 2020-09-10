import { Selector, ClientFunction } from 'testcafe';

fixture `Client code debugging functionality`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Selector function', async t => {
    const checkboxes = Selector('fieldset')
        .withText('Which features')
        .find(el => {
            if (el.tagName && el.tagName.toLowerCase() === 'label'){
                debugger;
                return el.querySelector('input');
            }

            return false;
        });

    await t
        .expect(checkboxes.count).eql(5);
});

test('Client function', async t => {
    const getCheckboxesText = ClientFunction(() => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const texts      = [];

        debugger;
        for (let i = 0; i < checkboxes.length; i++) {
            const checkbox = checkboxes[i];
            const id       = checkbox.getAttribute('id');

            const label = document.querySelector(`label[for=${id}]`);

            if (label)
                texts.push(label.textContent);
        }

        return texts;
    });

    await t
        .expect(getCheckboxesText())
        .eql([
            'Support for testing on remote devices',
            'Re-using existing JavaScript code for testing',
            'Running tests in background and/or in parallel in multiple browsers',
            'Easy embedding into a Continuous integration system',
            'Advanced traffic and markup analysis',
            'I have tried TestCafe'
        ]);
});