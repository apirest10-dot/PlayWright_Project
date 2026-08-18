import test, { expect } from "@playwright/test";
test('Double cclick',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/double-click')
    await page.waitForTimeout(3000)
   // await page.locator('#double-click-btn').dblclick()
    await page.locator('#double-click-btn').click({clickCount:2})
    const webtext = await page.locator('#double-click-result').textContent()
    console.log(webtext)
    await expect(page.locator('#double-click-result')).toHaveText('Congrats, you double clicked!')
      
})
test('Right click element',async({page})=>{
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
    await page.waitForTimeout(3000)
    await page.getByText('right click me').click({'button':'right'})
    page.on('dialog',async(dialog)=>{
        const alerttype = dialog.type()
        console.log(alerttype)
        const alertmessage = dialog.message()
        console.log(alertmessage)
         await page.waitForTimeout(3000)
        dialog.accept()

    })
        await page.waitForTimeout(3000)
    await page.getByText('Delete',{exact:true}).click()
    await page.waitForTimeout(3000)
})