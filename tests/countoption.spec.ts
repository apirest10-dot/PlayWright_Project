import test, { Locator } from "@playwright/test";

test('Counting Items in listbox',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/register')
    await page.waitForTimeout(3000)
    //store listbox into one varibale
    const element:Locator = page.locator('#countries_dropdown_menu')
    //get all option tags from listbox
    const all_Options = element.locator('option')
    //count no of options
    const count_options = await all_Options.all()
    console.log(`No of options are ${count_options.length}`)
    for (const eachoption of count_options) {
        //print each option name
        console.log((await eachoption.innerText()).trim())
    }

})

test('Count in multilistbox',async({page})=>{
    await page.goto('file:///D:/MultiListboxHtmlpage.html')
    await page.waitForTimeout(3000)
    //store listbox
    const mulilistbox:Locator = page.locator("[name='multiSelection']")
    //get option from multilitbox
    const all_Options = mulilistbox.locator('option')
    const count_option = await all_Options.all()
    console.log(`No of options in multilistbox ${count_option.length}`)
    for (const eachoption of count_option) {
        console.log(await eachoption.textContent())
    }

})