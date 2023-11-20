import { Given, Then, When, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { fixture } from '../../hooks/Fixture';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';
import { PracticePage } from '../../pages/PracticePage';
import SuccessPage from '../../pages/SuccessPage';

setDefaultTimeout(10 * 1000);

let homePage: HomePage;
let practicePage: PracticePage;
let loginPage: LoginPage;
let successPage: SuccessPage;


Given('User navigates to the application', async function () {
    homePage = new HomePage(fixture.page);
    practicePage = new PracticePage(fixture.page);
    loginPage = new LoginPage(fixture.page);
    successPage = new SuccessPage(fixture.page);
    await fixture.page.goto('https://practicetestautomation.com/');
});

Given('User clicks on the practice link text', async function () {
    await homePage.clickPractice();
});

Given('User clicks on the Test Login Page link text', async function () {
    await practicePage.clickTestLoginPage();
});


Given('User enters the username as {string}', async function (username) {
    await loginPage.inputUsername(username);
});


Given('User enters the password as {string}', async function (password) {
    await loginPage.inputPassword(password);
});


When('User clicks on the submit button', async function () {
    await loginPage.clickSubmit();
});


Then('User should navigates to successful login page', async function () {
    const successHeader = await successPage.getLoginSucceedHeader();
    await expect(successHeader).toBeVisible();
});

Then('User should see error message with incorrect {string}', async function (input) {
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toHaveText(`Your ${input} is invalid!`);
});