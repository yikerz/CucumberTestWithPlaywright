import { Page } from "@playwright/test";

export class HomePage{

    constructor(private page: Page) {
        this.page = page;
    }

    async clickPractice() {
        await this.page.locator('//*[@id="menu-item-20"]/a').click();
    }

}