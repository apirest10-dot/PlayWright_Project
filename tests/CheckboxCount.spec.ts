import test, { Locator } from "@playwright/test";

test('Handling Checkbox',async({page})=>{
    await page.goto('file:///D:/checkbox_1.html')
    await page.waitForTimeout(3000)
    //store all checkboxes
    const checkboxes:Locator = page.locator("input[type='checkbox']")
    //count no of checkboxes
    const check_count = await checkboxes.count()
    console.log(`No of checkboxes are ${check_count}`)
    for(let i=0;i<check_count;i++)
    {
        //check each check box status
        const eachcheckboxstatus:boolean = await checkboxes.nth(i).isChecked()
        //get each checkbox name
        const checkboxname = await checkboxes.nth(i).getAttribute('value')
        console.log(`${eachcheckboxstatus}:${checkboxname}`)
        if(eachcheckboxstatus)
        {
            await checkboxes.nth(i).uncheck()

        }
        else{
             await checkboxes.nth(i).check()
        }
        await page.waitForTimeout(3000)

    }


})

test('Radio button ',async({page})=>{
    await page.goto('https://testkru.com/Elements/RadioButtons')
    await page.waitForTimeout(3000)
    const radiobuttons = page.locator("input[type='radio']")
    const count = await radiobuttons.count()
    console.log(count)
    const  allradio = await page.locator("div.mt-2.row.text-dark div.col-6 label").allInnerTexts()
    console.log(allradio)
})