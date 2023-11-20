import { Page } from "@playwright/test";

export class PracticePage {

    constructor(private page: Page) {
        this.page = page;
    }

    async clickTestLoginPage() {
        await this.page.getByRole('link', { name: 'Test Login Page' }).click();
    }

}