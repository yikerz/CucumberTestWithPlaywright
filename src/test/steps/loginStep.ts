import { Given, Then, When, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { fixture } from '../../hooks/Fixture';

setDefaultTimeout(10 * 1000);

Given('User navigates to the application', async function () {
    await fixture.page.goto("https://practicetestautomation.com/");
});

Given('User clicks on the pratice link text', async function () {
    await fixture.page.click('//*[@id="menu-item-20"]/a');
});


Given('User clicks on the Test Login Page link text', async function () {
    await fixture.page.getByRole('link', { name: 'Test Login Page' }).click();
});


Given('User enters the username as {string}', async function (string) {
    await fixture.page.getByLabel('username').fill(string);
});


Given('User enters the password as {string}', async function (string) {
    await fixture.page.getByLabel('password').fill(string);
});


When('User clicks on the submit button', async function () {
    await fixture.page.click('id=submit');
});


Then('User should navigates to successful login page', async function () {
    await fixture.page.waitForURL("https://practicetestautomation.com/logged-in-successfully/")
    expect(fixture.page.getByRole('heading', { name: 'Logged In Successfully' }));
});

Then('User should see error message with incorrect {string}', async function (input) {
    await fixture.page.locator('//*[@id="error"]').isVisible();
    await expect(fixture.page.locator('//*[@id="error"]')).toHaveText(`Your ${input} is invalid!`);
});