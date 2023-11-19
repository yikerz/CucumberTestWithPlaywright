import { After, AfterAll, Before, BeforeAll, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from '@playwright/test';
import { invokeBrowser } from "../helper/browserManager";
import { fixture } from "./Fixture";

let browser: Browser;
let context: BrowserContext;
let page: Page;

BeforeAll(async () => {
    browser = await invokeBrowser("chrome");
})

Before(async () => {
    context = await browser.newContext();
    page = await context.newPage();
    fixture.page = page;
});

After(async function ({pickle, result}) {
    const scenarioName = pickle.name + pickle.id;
    if (result?.status == Status.FAILED){
        const img = await fixture.page.screenshot({
            path: `./test-results/screenshots/${scenarioName}.png`,
            type: 'png'
        })
        await this.attach(img, "image/png");
        }
        await fixture.page.close();
        await context.close();
})

AfterAll(async () => {
    await browser.close();
})