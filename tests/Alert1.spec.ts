import test, { expect } from "@playwright/test";
test('Handling Alert',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    await page.waitForTimeout(3000)
    page.on('dialog',async(dialog)=>{
        //get alert type
        const alertytpe = dialog.type()
        //get dialog message
        const alertmessage = dialog.message()
        console.log(alertytpe)
        console.log(alertmessage)
        await page.waitForTimeout(4000)
        dialog.accept()

    })
    await page.getByText('Click for JS Alert').click()
    await page.waitForTimeout(3000)
    const webtext = await page.locator('#result').textContent()
    console.log(webtext)
    await expect(page.locator('#result')).toContainText(/You successfully/)

})