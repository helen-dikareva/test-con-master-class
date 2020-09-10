import { t } from 'testcafe';
import { pageHeader, loginPage, manageAccountPage, myDownloadsPage } from './utils/page_model';
import credentials from './utils/credentials';

fixture `Login functionality (test for logged user)`
    .page `https://www.devexpress.com/`;

//login process
async function login () {
    await t
        .click(pageHeader.loginButton)
        .typeText(loginPage.loginInput, credentials.user1.login, { paste: true })
        .pressKey('tab')
        .typeText(loginPage.passwordInput, credentials.user1.password, { paste: true })
        .click(loginPage.termOfUseCheckbox)
        .click(loginPage.loginButton);
}

// check that login performed successfully
async function checkLogin () {
    await t
        .expect(pageHeader.loginButton.exists).notOk()
        .expect(pageHeader.myAccountIcon.count).eql(1)
        .expect(pageHeader.myAccountIcon.getAttribute('title')).eql(credentials.user1.name);
}


test('Login is successful', async () => {
    await login();
    await checkLogin();
});

test('Logged user can get info about their licenses and buy a new one', async t => {
    await login();

    await t
        .click(pageHeader.myAccountIcon)
        .click(pageHeader.downloadsItem)

        .expect(myDownloadsPage.licenseList.visible).ok()
        .click(myDownloadsPage.newLicenseLink);
});

test('Logged user can manage their account', async t => {
    await login();

    await t
        .click(pageHeader.myAccountIcon)
        .click(pageHeader.manageProfileItem)

        .expect(manageAccountPage.accountInfo.visible).ok()
        .click(manageAccountPage.personalInfoUpdateLink);
});
