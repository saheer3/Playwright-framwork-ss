import  {Page} from '@playwright/test';
import {ProductPageLocators} from '../locators/ProductPageLocators';

export class ProductPage{
    constructor(private page:Page){

    }

    //////// Clicking on the menu button
    async logout(){
        await this.page.locator(ProductPageLocators.menuButton).click();
        await this.page.locator(ProductPageLocators.logoutlink).click();
    }

    async openAboutPage(){
        await this.page.locator(ProductPageLocators.menuButton).click();
        await this.page.locator(ProductPageLocators.aboutlink).click();
    }
}