import { pageHeader, loginPage } from './utils/page_model';
import credentials from './utils/credentials';

fixture `Login functionality (simple login)`
    .page `https://www.devexpress.com/`;

test('Login is successful', async t => {
    //login process
    await t
        .click(pageHeader.loginButton)
        .typeText(loginPage.loginInput, credentials.user1.login, { paste: true })
        .pressKey('tab')
        .typeText(loginPage.passwordInput, credentials.user1.password, { paste: true })
        .click(loginPage.termOfUseCheckbox)
        .click(loginPage.loginButton);

    // check that login performed successfully
    await t
        .expect(pageHeader.loginButton.exists).notOk()
        .expect(pageHeader.myAccountIcon.count).eql(1)
        .expect(pageHeader.myAccountIcon.getAttribute('title')).eql(credentials.user1.name);
});
