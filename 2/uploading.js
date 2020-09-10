import { Selector } from 'testcafe';

fixture('Upload')
    .page('https://demos.devexpress.com/ASPxFileManagerAndUploadDemos/UploadControl/UploadAndSubmit.aspx');

test('Should upload a new file', async t => {
    await t

        //Задаем описание загружаемого файла для демо
        .typeText('#DemoArea input[type="text"]', 'New File')

        //Загружаем файл new_file.txt
        .setFilesToUpload(Selector('input[type="file"]').nth(1), './files/new_file.txt')

        //Сабмитим форму
        .click(Selector('span').withText('SUBMIT'))

        //Проверяем что файл был загружен
        .expect(Selector('#DemoArea td').withText('new_file.txt').exists).ok();
});
