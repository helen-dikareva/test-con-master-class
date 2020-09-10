import { Role, Selector, t } from 'testcafe';
import { pageHeader, loginPage } from './page_model';
import credentials from './credentials';

const LOGIN_URL = 'https://www.devexpress.com/MyAccount/LogIn/';

async function roleFn (login, password) {
    // Role's actions to execute login process
    await t
        .typeText(loginPage.loginInput, login, { paste: true })
        .pressKey('tab')
        .typeText(loginPage.passwordInput, password, { paste: true })
        .click(loginPage.termOfUseCheckbox)
        .click(loginPage.loginButton);
}

// NOTE: two roles for two user's login
export const user1Role = Role(LOGIN_URL, async () => roleFn(credentials.user1.login, credentials.user1.password));
export const user2Role = Role(LOGIN_URL, async () => roleFn(credentials.user2.login, credentials.user2.password));
