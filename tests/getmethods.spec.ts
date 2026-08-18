import test from "@playwright/test";

test('Validate Get methods',async({page})=>{
    //launch url
    await page.goto('http://tatacliq.com')
    //suspend tool for 4 second 
    await page.waitForTimeout(4000)//hard coded time
    //get title and lenght of title
    const page_Title:string = await page.title()
    console.log(page_Title)
    console.log(page_Title.length)
    //get url and lenght of url
    const Str_Url:string = page.url()
    console.log(Str_Url)
    console.log(Str_Url.length)

})