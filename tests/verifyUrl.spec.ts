import test from "@playwright/test";
test('Verify Url',async function({page}){
    await page.goto('http://gmail.com')
    await page.waitForTimeout(4000)
    const Expected ='https://'
    const Actual = page.url()
    if(Actual.startsWith(Expected))
    {
        console.log(`Url is Secured ${Expected}   ${Actual}`)
    }
    else{
        console.log(`Url is Not Secured ${Expected}   ${Actual}`)
    }
})