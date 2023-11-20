import { Page } from "@playwright/test";

export default class SuccessPage{

    constructor(private page: Page) {
        this.page = page
    }

    async getLoginSucceedHeader() {
        await this.page.waitForURL("https://practicetestautomation.com/logged-in-successfully/");
        return this.page.getByRole('heading', { name: 'Logged In Successfully' });
    }
}