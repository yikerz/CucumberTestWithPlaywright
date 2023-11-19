import { LaunchOptions, chromium, firefox, webkit } from '@playwright/test';

const options: LaunchOptions = {
    headless: false,
}

export const invokeBrowser = (browserType:string) => {
    switch (browserType) {
        case "chrome":
            return chromium.launch(options);
        case "firefox":
            return firefox.launch(options);
        case "webkit":
            return webkit.launch(options);
        default:
            console.log(browserType)
            throw new Error("Please set the proper browser.");
    }
}