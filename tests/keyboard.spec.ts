import test from "@playwright/test";
test('Handling keyboard',async({page})=>{
    await page.goto('https://google.com')
    await page.waitForTimeout(3000)
    //enter some text in keyboard
    await page.keyboard.type('PlayWright openings ')
    //press down arrow for 5 times
    for(let i=1;i<=5;i++)
    {
        await page.waitForTimeout(2000)
        await page.keyboard.press('ArrowDown')
    }
    //press enter key 
    await page.keyboard.press('Enter')
    await page.waitForTimeout(3000)
})
test('Handling Auto suggestions',async({page})=>{
    await page.goto('https://google.com')
    //enter some text in keyboard
    await page.keyboard.type('PlayWright openings ')
    await page.waitForTimeout(3000)
    //get collection of all auto suggestions
    const all_suggestions = page.locator("ul[role='listbox']>li")
    //count no of items
    const count_options= await all_suggestions.all()
    console.log(`No of count ${count_options.length}`)
    for (const element of count_options) {
        console.log(await element.innerText())
        //console.log(`${element}::${await element.innerText()}`)
        
    }
})