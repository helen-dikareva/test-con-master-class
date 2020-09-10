import { user1Role, user2Role } from '../utils/roles';
import { checkLogin } from '../utils/helpers';
import credentials from '../utils/credentials';

fixture `Login functionality (Switching between roles1)`
.skip
    .page `https://www.devexpress.com/`;

test('Login is successful', async t => {
    //user 1
    await t.useRole(user1Role);
    await checkLogin(credentials.user1.name);

    //user 2
    await t.useRole(user2Role);
    await checkLogin(credentials.user2.name);

    //user 1
    await t.useRole(user1Role);
    await checkLogin(credentials.user1.name);

    //user 2
    await t.useRole(user2Role);
    await checkLogin(credentials.user2.name);
});