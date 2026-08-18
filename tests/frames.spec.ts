import test, { FrameLocator } from "@playwright/test";
test('Handling iframes',async({page})=>{
    await page.goto('https://jqueryui.com/tabs/')
    await page.waitForTimeout(3000)
    //identify iframe and store to one varibale
    const frame:FrameLocator = page.frameLocator('.demo-frame')
    //if you want to perform any action inside frame we need to take help of frame varibale
    //click on new tab in iframe
    await frame.locator('a#ui-id-2').click()
    await page.waitForTimeout(3000)
    //capture text
    const frameText1:string = await frame.locator('#tabs-1').innerText()
    console.log(frameText1)
    await frame.locator('a#ui-id-3').click()
    await page.waitForTimeout(3000)
    //capture text
    const frameText2:string = await frame.locator('#tabs-3').innerText()
    console.log(frameText2)
    await page.waitForTimeout(3000)
    //click button in main html page
    await page.getByText('Button',{exact:true}).click({force:true})
    await page.waitForTimeout(3000)

  

})