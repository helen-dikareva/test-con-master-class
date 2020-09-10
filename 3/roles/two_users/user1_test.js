import { pageHeader, manageAccountPage, myDownloadsPage } from '../utils/page_model';
import { user1Role } from '../utils/roles';
import { checkLogin } from '../utils/helpers';
import credentials from '../utils/credentials';

fixture `Login functionality (User1)`
    .page `https://www.devexpress.com/`
    .beforeEach(async t => {
        await t.useRole(user1Role);
    });

//user1
test('Login is successful', async () => {
    await checkLogin(credentials.user1.name);
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
