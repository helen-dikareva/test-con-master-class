import { Selector } from 'testcafe';

fixture('Iframe\'s content')
    .page('https://js.devexpress.com/Demos/WidgetsGallery/Demo/Common/EditorsOverview/React/Light/');

test('Should apply caption changes', async t => {
    await t
        .switchToIframe('#demoFrame')
        .typeText('.dx-texteditor-input', 'Test Superhero', { replace: true })

        .expect(Selector('.picture-container .text').textContent).eql('Test Superhero')
        
        .switchToMainWindow();
});
