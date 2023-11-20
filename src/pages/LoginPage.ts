import { Page } from "@playwright/test";

export class LoginPage {

    constructor(private page: Page) {
        this.page = page;
    }

    async inputUsername(username: string) {
        await this.page.getByLabel('username').fill(username);
    }

    async inputPassword(password: string) {
        await this.page.getByLabel('password').fill(password);
    }

    async clickSubmit() {
        await this.page.locator('id=submit').click();
    }

    async getErrorMessage() {
        let errorMessage = this.page.locator('//*[@id="error"]');
        await errorMessage.isVisible();
        return await errorMessage;
    }

}