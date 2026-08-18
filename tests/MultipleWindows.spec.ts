import test from "@playwright/test";

test('Handling multipleWindows',async({page})=>{
    await page.goto('https://gmail.com')
    await page.waitForTimeout(3000)
    //Wait for "popup" event to appear on the page -  page.waitForEvent("popup")
     page.waitForEvent('popup')
    //Identify and click on the element which is responsible for generate of "popup" event on the webpage
    await page.locator("a[target='_blank']").nth(1).click()
    //We can store the final result of const newPage = await page.waitForEvent("popup")
    const helppage = await page.waitForEvent('popup')
    await page.waitForLoadState()
     await helppage.locator('a[data-stats-id="accounts:community"]').click()
     console.log(await helppage.title())
       await page.waitForTimeout(3000)
       await helppage.close()
       await page.waitForTimeout(3000)
       //go back to parent enter username
       await page.bringToFront()
       await page.locator('#identifierId').fill('test@gmail.com')
       console.log(await page.title())
       await page.waitForTimeout(3000)

})