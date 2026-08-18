import test, { expect, Locator } from "@playwright/test";
test('Handling checkbox',async({page})=>{
    await page.goto('https://mail.rediff.com/cgi-bin/login.cgi')
    await page.waitForTimeout(3000)
    //verify checkbox is checked or uncheked
    const checkbox:Locator = page.locator('input#remember')
    const elemntStatus : boolean = await checkbox.isChecked()
    //assert that checkbox is checked
    await expect(checkbox).toBeChecked({checked:true})
    console.log(`Checkbox status :${elemntStatus}`)
    //uncheck check box from selection
    await checkbox.uncheck()
    await page.waitForTimeout(3000)
    //assert it checkbox not tobe checked
    await expect(checkbox).not.toBeChecked()
    await page.waitForTimeout(3000)

})