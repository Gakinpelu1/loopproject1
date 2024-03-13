import { test, expect } from '@playwright/test';
const testCases = JSON.parse(JSON.stringify(require("./testinfo.json")))
import { Toolbox } from './toolbox'; //contains the log in method

testCases.forEach(data => {

    test.only(`run tests when logged into Asana ${data.name}`, async ({page}) => {
        
        const toolbox = new Toolbox(page)
        await toolbox.loggingIn();
        //once logged in, click on a left hand side navigation menu link:
        await page.getByRole("link", {name:data.leftNav}).first().click()
        //await page.getByRole("link", {name:data.leftNav}).click()
        await page.waitForTimeout(3000)

        //card title text variable
        const cardTitle= await page.locator('span', {hasText:`${data.card_title}`}).first()
      
        //Assert that Card Titles unique to each test case are visible
        if(data.id===1){
            await expect(cardTitle).toBeVisible()
            }
            else if (data.id===2) {
                await expect(cardTitle).toBeVisible()
            }
            else if (data.id===3) {
                await expect(cardTitle).toBeVisible()  
            }
            else if (data.id===4) {
                expect(cardTitle).toBeVisible()
            } 
            else if (data.id===5) {
                expect(cardTitle).toBeVisible()
            }          
            else if (data.id===6) {
                expect(cardTitle).toBeVisible() 
            }

    })

}) 

    












  

    





  