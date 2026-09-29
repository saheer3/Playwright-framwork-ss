import {test,expect} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';
import {BASE_URL, USERNAME, PASSWORD} from '../../utils/envConfig';

test('Login test saucedemo',async({page})=>{
    const loginPage = new LoginPage(page);  
    // Launch the URL
    await page.goto(BASE_URL);    
    // Login in to the applicatin
    loginPage.login(USERNAME,PASSWORD);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

})

test('Login test 2 saucedemo',async({page})=>{
    const loginPage = new LoginPage(page);  
    // Launch the URL
    await page.goto(BASE_URL);    
    // Login in to the applicatin
    loginPage.login(USERNAME,PASSWORD);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

})