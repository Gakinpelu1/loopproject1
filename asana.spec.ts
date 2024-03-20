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

        /************************************************************************* 

        The below is what I had in mind to loop through the tags; still was having issues trying to isolate
        the tag's tooltip text...

            const expectedTagsArray = data.tags
            //locator that will capture all of the tags in a certain 'box'
            const visibleTagsArray = page.$$('BoardCardCustomPropertiesAndTags-tag')  <-(??)

            function checkTags(expectedTags, visibleTagsArray) {
                let visibleTags = [];
                for(let i = 0; i< expectedTags.length; i++){
                    if(visibleTagsArray.indexOf(expectedTags[i] ! == -1) {
                        visibleTags.push(expectedTags[i]);
                    }
                }
                return visibleTags;
                //Expect the new array of matched tags to equal the tags noted in each Test Case
                await expect(visibleTags).toContainEqual(expectedTags)
            } 
            
            *******************************************************************/
        
    
        //Assert that Card Titles unique to each test case are visible
        if(data.id===1){
            const toDoColumnCardTitle = page.locator('.BoardBody-columnDraggableItemWrapper.SortableList-sortableItemContainer').filter(
                {hasText: `${data.card_title}`})
                await expect(toDoColumnCardTitle).toHaveCount(1)
                /*Assert tags
                checkTags(expectedTags, visibleTagsArray)
                */   

            }
            else if (data.id===2) {
                const toDoColumnCardTitle = page.locator('.BoardBody-columnDraggableItemWrapper.SortableList-sortableItemContainer').filter(
                {hasText: `${data.card_title}`})
                await expect(toDoColumnCardTitle).toHaveCount(1)
                /*Assert tags
                checkTags(expectedTags, visibleTagsArray)
                */   
            }
            else if (data.id===3) {
                const toDoColumnCardTitle = page.locator('.BoardBody-columnDraggableItemWrapper.SortableList-sortableItemContainer').filter(
                {hasText: `${data.card_title}`})
                await expect(toDoColumnCardTitle).toHaveCount(1) 
                 /*Assert tags
                checkTags(expectedTags, visibleTagsArray)
                */   
            }
            else if (data.id===4) {
                const newRequestColumnCardTitle = page.locator('.BoardBody-columnDraggableItemWrapper.SortableList-sortableItemContainer').first().filter(
                {hasText: `${data.card_title}`})
                await expect(newRequestColumnCardTitle).toHaveCount(1)
                 /*Assert tags
                checkTags(expectedTags, visibleTagsArray)
                */   
            }
            else if (data.id===5) {
                const inProgressColumnCardTitle = page.locator('.BoardBody-columnDraggableItemWrapper.SortableList-sortableItemContainer').nth(2).filter(
                {hasText: `${data.card_title}`})    
                await expect(inProgressColumnCardTitle).toHaveCount(1)
                 /*Assert tags
                checkTags(expectedTags, visibleTagsArray)
                */   
            }          
            else if (data.id===6) {
                const completeColumnCardTitle = page.locator('.BoardBody-columnDraggableItemWrapper.SortableList-sortableItemContainer').nth(3).filter(
                {hasText: `${data.card_title}`})
                await expect(completeColumnCardTitle).toHaveCount(1) 
                 /*Assert tags
                checkTags(expectedTags, visibleTagsArray)
                */     
            }
        
    })

}) 

    












  

    





  