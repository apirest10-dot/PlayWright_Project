import test, { expect } from "@playwright/test";

test('Handling confirm',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    await page.waitForTimeout(3000)
    page.on('dialog',async(dialog)=>{
        //cap[ture alert type
        const alerttype = dialog.type()
        console.log(alerttype)
        //capture error message
        const err_mess = dialog.message()
        console.log(err_mess)
        await page.waitForTimeout(3000)
        dialog.dismiss()

    })
    await page.getByText('Click for JS Confirm').click()
    const webtext = await page.locator('#result').textContent()
    console.log(webtext)
    await expect(page.locator('#result')).toBeVisible()

})
test('Handling prompt',async({page})=>{
    await page.goto('')
    await page.waitForTimeout(3000)
    page.on('dialog',async(dialog)=>{
        const alerttype = dialog.type()
        console.log(alerttype)
        const alermess = dialog.message()
        console.log(alermess)
        await page.waitForTimeout(3000)
        dialog.accept('Akhilesh Hello')

    })
    await page.getByText('Click for JS Prompt').click()
    const webtext = await page.locator('#result').innerText()
    console.log(webtext)
    await expect(page.locator('#result')).toHaveText(/You entered:/)

})