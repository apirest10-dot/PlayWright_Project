import test from "@playwright/test";
test('Checking Page Title',async({page})=>{
    await page.goto('https://google.com')
    await page.waitForTimeout(3000)
    const Expected_Title ='Google'
    const Actual_Title = await page.title()
    if(Actual_Title.match(Expected_Title))
    {
        console.log(`Title is Matching ${Expected_Title}   ${Actual_Title}`)
    }
    else{
        console.log(`Title is Not Matching ${Expected_Title}   ${Actual_Title}`)
    }
})