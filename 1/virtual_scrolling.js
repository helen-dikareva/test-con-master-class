import { Selector } from "testcafe";

fixture `Virtual scrolling testing`
    .page('https://bvaughn.github.io/react-virtualized/#/components/List');

test('Hover on the last item to scroll the list', async t => {
    const rowCount = 300;

    //Settings
    const dynamicRowCheckbox = Selector('label').withText('Use dynamic row heights?');
    const numRowInput        = Selector('input[name="rowCount"]');

    await t
        .click(dynamicRowCheckbox)
        .typeText(numRowInput, rowCount.toString(), { replace: true });

    const listItem      = Selector('._113CIjCFcgg_BK6pEtLzCZ');
    const lastItemIndex = rowCount - 1;
    let lastItemText    = '';

    //scrolling
    while (lastItemText.indexOf(lastItemIndex.toString()) < 0) {
        const bottomItemIndex = await listItem.count - 1;
        const bottomItemText  = await listItem.nth(bottomItemIndex).textContent;
        const bottomItem      = await listItem.withExactText(bottomItemText);

        await t.hover(bottomItem);

        lastItemText = await bottomItem.parent().textContent;
    }

    await t.debug();
});
