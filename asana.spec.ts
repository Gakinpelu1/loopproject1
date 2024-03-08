import { test, expect } from '@playwright/test';
const testCases = JSON.parse(JSON.stringify(require("./testinfo.json")))
const loginInfo = JSON.parse(JSON.stringify(require("./login.json")))
const Trouble = require("./troubleshoot")



testCases.forEach(data => {

    test(`run tests when logged into Asana ${data.name}`, async ({page}) => {
        
        //navigate to page
        await page.goto(loginInfo.loginPage)
        //enter in email address
        await page.fill("input",loginInfo.email)
        //click continue
        await page.getByRole('button', { name: 'Continue', exact: true }).click()
        await page.waitForTimeout(2000)
        //enter in password
        await page.fill("#lui_6", loginInfo.password)
        //click Log in
        await page.getByRole('button', { name: 'Log in', exact: true }).click()

        //Navigate to
        //page. click on span that has text _______
        await page.getByRole("link", {name:data.leftNav}).click()
        await page.waitForTimeout(3000)
        //expect
        //await expect(page.getByText(${data.card_title})

    })

}) 

    












  

    





  