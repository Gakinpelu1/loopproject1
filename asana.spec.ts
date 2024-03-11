import { test, expect } from '@playwright/test';
const testCases = JSON.parse(JSON.stringify(require("./testinfo.json")))
import { Toolbox } from '../tests-examples/toolbox'; //contains the log in method



testCases.forEach(data => {

    test.only(`run tests when logged into Asana ${data.name}`, async ({page}) => {
    
        const toolbox = new Toolbox(page)
        await toolbox.loggingIn();
        //once logged in, click on a left hand side navigation menu link:
        await page.getByRole("link", {name:data.leftNav}).first().click()
        await page.waitForTimeout(4000)
        //Navigate to sidebar nav option and click on span that has text _______
        await page.getByRole("link", {name:data.leftNav}).click()
        await page.waitForTimeout(3000)
        //expect
        //await expect(page.getByText(${data.card_title})
        await expect(page.locator('.BoardCard-taskName')).toContainText(data.card_title)

    })

}) 

    












  

    





  