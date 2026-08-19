import test from "@playwright/test";
test('Handling non select listbox',async({page})=>{
await page.goto('https://gmail.com')
await page.waitForTimeout(3000)
//identify listbox and click on it
await page.locator('div.VfPpkd-aPP78e').click()
await page.waitForTimeout(3000)
await page.locator("ul[jsname='rymPhb'] li:nth-child(20)").click()
await page.waitForTimeout(3000)
const listbox = page.locator("ul[jsname='rymPhb'] li")
const count_options = await listbox.allInnerTexts()
console.log(`No of options are ${count_options.length}`)
for (const element of count_options) {
    console.log(element)
}
})