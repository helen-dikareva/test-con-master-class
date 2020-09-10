import { t } from 'testcafe';
import { pageHeader, loginPage } from './page_model';
import credentials from './credentials';

//login process
export async function login () {
    await t
        .click(pageHeader.loginButton)
        .typeText(loginPage.loginInput, credentials.user1.login, { paste: true })
        .pressKey('tab')
        .typeText(loginPage.passwordInput, credentials.user1.password, { paste: true })
        .click(loginPage.termOfUseCheckbox)
        .click(loginPage.loginButton);
}


// check that login performed successfully
export async function checkLogin (userName = credentials.user1.name) {
    await t
        .expect(pageHeader.loginButton.exists).notOk()
        .expect(pageHeader.myAccountIcon.count).eql(1)
        .expect(pageHeader.myAccountIcon.getAttribute('title')).eql(userName);
}
