import {LoginPageLocators} from '../locators/LoginPageLocators';
import {Page} from '@playwright/test';


export class LoginPage{
    constructor(private page:Page){

    }

async login (username:string, password:string){
     await this.page.goto('https://www.saucedemo.com/');
    await this.page.locator(LoginPageLocators.usernameInput).fill(username);
    await this.page.locator(LoginPageLocators.passwordInput).fill(password);
    await this.page.locator(LoginPageLocators.loginButton).click();}
    }
