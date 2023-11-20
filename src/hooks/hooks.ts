import { After, AfterAll, Before, BeforeAll, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from '@playwright/test';
import { invokeBrowser } from "../helper/browserManager";
import { fixture } from "./Fixture";
const fs = require('fs-extra');

let browser: Browser;
let context: BrowserContext;
let page: Page;

BeforeAll(async () => {
    browser = await invokeBrowser("chrome");
})

Before(async function ({pickle}) {
    context = await browser.newContext({
        recordVideo: {
            dir: "test-results/videos",
        }
    });
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
        const videoPath = await fixture.page.video()?.path();

        await fixture.page.close();
        await context.close();

        this.attach(img, "image/png");
        this.attach(fs.readFileSync(videoPath), "video/webm");

    } else {
        await fixture.page.close();
        await context.close();
    }
    
})

AfterAll(async () => {
    await browser.close();
})