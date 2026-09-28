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

    async validateProductsDetails(){
        const productNames = await this.page.locator(ProductPageLocators.ProductName).allTextContents();
        const productDesc = await this.page.locator(ProductPageLocators.ProductDesc).allTextContents();
        const productPrice = await this.page.locator(ProductPageLocators.ProductPrice).allTextContents();
        const addToCardCount = await this.page.locator(ProductPageLocators.AddtoCartButton).count();

        if(productNames.length===0)
            throw new Error("No Products Found")

        if(productNames.length!=productDesc.length ||productNames.length!=productPrice.length ||productNames.length!=addToCardCount){
            throw new Error(" Products Count mismatch")
        }

        console.log(' Product Name are -' +productNames)
        console.log(' Product Descriptions are -' +productDesc)
        console.log(' Product Prices are -' +productPrice)
    }

    async addFirstProductToCart(){
        await this.page.locator(ProductPageLocators.AddtoCartButton).first().click();
    }

    async addAllProductToCart(){
        const count = await this.page.locator(ProductPageLocators.AddtoCartButton).count();
        const buttons =await this.page.locator(ProductPageLocators.AddtoCartButton);
        for(let i=0; i<count;i++){
            await buttons.nth(i).click();
            await this.page.waitForTimeout(5000);
        }
    }

    async addSpecificProductsToCart(productName:string[]){
        const allProducts = this.page.locator(ProductPageLocators.ProductName);
        const prodCount = await allProducts.count();

        for(let i =0; i <prodCount ; i++){
            const name = await allProducts.nth(i).textContent();
            if(name && productName.includes(name.trim()))
            {
                await this.page.locator(ProductPageLocators.AddtoCartButton).nth(i).click();
                await this.page.waitForTimeout(5000);
            }
        }


    }

}