import { pageHeader, manageAccountPage, myDownloadsPage } from '../utils/page_model';
import { user2Role } from '../utils/roles';
import { checkLogin } from '../utils/helpers';
import credentials from '../utils/credentials';

fixture `Login functionality (User2)`
    .page `https://www.devexpress.com/`
    .beforeEach(async t => {
        await t.useRole(user2Role);
    });

//user2
test('Login is successful', async () => {
    await checkLogin(credentials.user2.name);
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
