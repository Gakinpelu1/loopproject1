import { Page } from '@playwright/test';


export class Troubleshoot {

    constructor (Page) {
        this.page = Page
    }

    async goToEdmunds () {

       await this.page.goto("www.https://www.edmunds.com/", {timeout: 4000})

    }


}