import { Role } from 'testcafe';
import { pageHeader, loginPage, manageAccountPage, myDownloadsPage } from './utils/page_model';
import { checkLogin } from './utils/helpers';
import credentials from './utils/credentials';

export const userRole = Role('https://www.devexpress.com/MyAccount/LogIn/', async t => {
    await t
        .typeText(loginPage.loginInput, credentials.user1.login, { paste: true })
        .pressKey('tab')
        .typeText(loginPage.passwordInput, credentials.user1.password, { paste: true })
        .click(loginPage.termOfUseCheckbox)
        .click(loginPage.loginButton);

    //await login();
});

fixture `Login functionality (Login in a Role)`
    .page `https://www.devexpress.com/`
    .beforeEach(async t => {
        await t.useRole(userRole);
    });

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
