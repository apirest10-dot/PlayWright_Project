import test from "@playwright/test";
test('Handling Non select listbox',async({page})=>{
    await page.goto('https://demoqa.com/select-menu')
    await page.waitForTimeout(3000)
    //identify listbox and click to open
    await page.locator('div.css-19bb58m').first().click()
    await page.waitForTimeout(3000)
    await page.locator('#react-select-2-option-1-1').click()
    await page.waitForTimeout(3000)
    await page.locator('div.css-19bb58m').first().click()
    await page.waitForTimeout(3000)
    await page.locator('#react-select-2-option-3').click()
    await page.waitForTimeout(3000)
})
test('Multi Dropdown non select listbox',async({page})=>{
    await page.goto('https://demoqa.com/select-menu')
    await page.waitForTimeout(3000)
        //idetify listbox and click on it
    await page.locator('div.css-19bb58m').last().click()
    //count item in listbox
    const listbox = page.locator('div.css-qr46ko div')
    const count_Options = await listbox.count()
    console.log(`No of items ${count_Options}`)
    const all_Text = await listbox.allInnerTexts()
    console.log(all_Text)
    for(let i=0;i<count_Options;i++)
    {
       await page.waitForTimeout(2000)
        await page.locator('#react-select-4-option-'+i).click()
    }
     await page.waitForTimeout(3000)
})