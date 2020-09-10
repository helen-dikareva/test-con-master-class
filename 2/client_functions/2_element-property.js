import { Selector, ClientFunction } from 'testcafe';

fixture('Client Function demo')
    .page('https://www.w3schools.com/html/html_tables.asp');

test('Get table cell', async t => {
    const customers = Selector('#customers');

    const getFnText = ClientFunction((row, col) => {
            return getTable().rows[row].cells[col].innerText;
        },

        {
            dependencies: { getTable: customers }
        }
    );

    await t.expect(getFnText(1, 1)).eql('Maria Anders');
});
