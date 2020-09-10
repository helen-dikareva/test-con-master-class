import { Selector } from 'testcafe';

fixture `auto waiting`
    .page `https://js.devexpress.com/Demos/WidgetsGallery/Demo/ProgressBar/Overview/jQuery/Light/`;

test('test', async t => {
    await t
        .switchToIframe('#demoFrame')
        .click(Selector('#progress-button span').withText('Start progress'))
        .expect(Selector('#progressBarStatus .dx-progressbar-status').textContent).eql("Loading: 50%", {
            timeout: 20000
        })
        .click(Selector('#progress-button span').withText('Restart progress'));
}); 