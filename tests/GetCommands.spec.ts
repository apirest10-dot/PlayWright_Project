import test from "@playwright/test";
test('Capture linktext and url',async({page})=>{
    await page.goto('https://google.com')
    await page.waitForTimeout(3000)
    //capture gmail text
    const gmailText = await page.getByRole('link',{name: 'Gmail'}).innerText()
    console.log(gmailText)
    //capture gmail url 
    const gmailUrl = await page.getByRole('link',{name: 'Gmail'}).getAttribute('href')
    console.log(gmailUrl)
})
//write a scipt to print all labels from webpage
test('Get all Labels',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/register')
    await page.waitForTimeout(3000)
    //get all lables from page
    const all_Labels = await page.locator("form#registerForm>div label").allTextContents()
    console.log(all_Labels)

})
