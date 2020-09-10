import {Role} from 'testcafe'
import { user1Role } from './utils/roles';
import { checkLogin } from './utils/helpers';

fixture `Login functionality (Anonymous Role)`
    .page `https://www.devexpress.com/`;

test('Login in and log out', async t => {
    await t.useRole(user1Role);
    await checkLogin();

    await t
        .useRole(Role.anonymous())
        .debug();
});
