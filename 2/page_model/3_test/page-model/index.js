import { Selector } from 'testcafe';

class Page {
    constructor () {
        this.nameInput = Selector('#developer-name');
    }
}

export default new Page();
