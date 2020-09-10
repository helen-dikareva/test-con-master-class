import { Selector } from 'testcafe';

fixture('Handling native dialog')
    .page('https://demos.devexpress.com/ASPxFileManagerAndUploadDemos/UploadControl/CustomProgressPanel.aspx');

test('Should handle native dialogs', async t => {
    await t
        .setFilesToUpload(Selector('input[type="file"]').nth(1), './files/new_file.txt')
        .setNativeDialogHandler((type, text, url) => {
            console.log('Dialog type:', type);
            console.log('Dialog text:', text);
            console.log('Dialog url:', url);
        })

        .expect(Selector('.dxpbVC').withText('100%').exists).ok()

        .debug();
});

test('Check dialogs', async t => {
    await t
        .setFilesToUpload(Selector('input[type="file"]').nth(1), './files/new_file.txt')
        .setNativeDialogHandler(t => {
            return true;
        })

        .expect(Selector('.dxpbVC').withText('100%').exists).ok();

    const history = await t.getNativeDialogHistory();

    await t
        .expect(history[0].type).eql('alert')
        .expect(history[0].text).eql('File uploading has been successfully completed.');
});


