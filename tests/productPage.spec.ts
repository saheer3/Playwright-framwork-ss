import {test, expect} from '@playwright/test';
import {BASE_URL, USERNAME, PASSWORD} from '../utils/envConfig';
import {ProductPage} from '../pages/ProductPage';
import { LoginPage } from '../pages/LoginPage';
import {LoginPageLocators} from '../locators/LoginPageLocators';
import {ProductPageLocators} from '../locators/ProductPageLocators';


test.describe('Product page validation',()=>
    {
        let loginPage: LoginPage
        let productPage:ProductPage

        test.beforeEach(async({page})=>{
            loginPage = new LoginPage(page);
            productPage = new ProductPage(page);
            await page.goto(BASE_URL);
            await loginPage.login(USERNAME,PASSWORD);
            console.log("Checking CICD main branch push")
        })

        test('Logout from the application',async({page})=>{
            await productPage.logout();
            await expect(page.locator(LoginPageLocators.loginButton)).toBeVisible();
        })

        test('Open about page',async({page})=>{
            await productPage.openAboutPage();
            await expect(page.locator(ProductPageLocators.whySauceLabs)).toBeVisible();
            await page.goBack();
            await expect(page.locator(ProductPageLocators.aboutlink)).toBeVisible();
        })


})