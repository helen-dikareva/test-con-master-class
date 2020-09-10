import { Selector } from 'testcafe';

class PageHeader {
    constructor () {
        this.cartButton  = Selector('#Cart');
        this.loginButton = Selector('#LogIn');

        this.myAccountButton   = Selector('#MyAccount');
        this.myAccountIcon     = this.myAccountButton.find('.UserIcon');
        this.myAccountMenu     = this.myAccountButton.find('.MyAccountMenu');
        this.manageProfileItem = this.myAccountMenu.find('li').withText('Manage Profile');
        this.downloadsItem     = this.myAccountMenu.find('li').withText('Download My Products');

        this.searchButton = Selector('[title="Search"].SearchButton');
        this.searchInput  = Selector('#tbSiteSearch');
    }
}

class LoginPage {
    constructor () {
        this.loginInput        = Selector('input').withAttribute('id', /ctl\d+_ctl\d+_Content_Content_pLogin_tbEmail_I/);
        this.passwordInput     = Selector('.dxeEditArea_V5.dxeEditAreaSys').withAttribute('name', /ctl\d+\$ctl\d+\$Content\$Content\$pLogin\$tbPassword/);
        this.termOfUseCheckbox = Selector('span').withAttribute('id', /ctl\d+_ctl\d+_Content_Content_pLogin_cbTermsOfUse_S_D/);
        this.loginButton       = Selector('a').withText('LOG IN');
    }
}

class ManageAccountPage {
    constructor () {
        this.accountInfo            = Selector('.MyAccount.Profile');
        this.personalInfoUpdateLink = Selector('span').withText('Update Personal Information');
    }
}

class MyDownloadsPage {
    constructor () {
        this.licenseList       = Selector('.license-list');
        this.newLicenseLink    = this.licenseList.find('a').withText('Purchase a New License');
        this.downloadTrialLink = this.licenseList.find('a').withText('Download 30 Day Trial');
    }
}

// NOTE: Page Model's for different pages used in tests.
// PageModel contains description for the page and
// sometimes repetitive actions.
export const pageHeader        = new PageHeader();
export const loginPage         = new LoginPage();
export const manageAccountPage = new ManageAccountPage();
export const myDownloadsPage   = new MyDownloadsPage();
