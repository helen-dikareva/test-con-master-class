import { pageHeader, manageAccountPage, myDownloadsPage } from './utils/page_model';
import { login, checkLogin } from './utils/helpers';

fixture `Login functionality (Login in a hook)`
    .page `https://www.devexpress.com/`
    .beforeEach(async () => login());

test('Login is successful', async () => {
    await checkLogin();
});

test('Logged user can get info about their licenses and buy a new one', async t => {
    await t
        .click(pageHeader.myAccountIcon)
        .click(pageHeader.downloadsItem)

        .expect(myDownloadsPage.licenseList.visible).ok()
        .click(myDownloadsPage.newLicenseLink);
});

test('Logged user can manage their account', async t => {
    await t
        .click(pageHeader.myAccountIcon)
        .click(pageHeader.manageProfileItem)

        .expect(manageAccountPage.accountInfo.visible).ok()
        .click(manageAccountPage.personalInfoUpdateLink);
});
