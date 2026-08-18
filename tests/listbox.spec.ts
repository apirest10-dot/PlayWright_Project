import test from "@playwright/test";

test('Handling single listbox',async({page})=>{
    await page.goto('https://www.ebay.com/')
    await page.waitForTimeout(3000)
    //select optin in listbox using values
    await page.locator('#gh-cat').selectOption('Coins & Paper Money')
    await page.waitForTimeout(3000)
    //select option from listbox using label
    await page.locator('#gh-cat').selectOption({label:'Health & Beauty'})
    await page.waitForTimeout(3000)
      //select option from listbox using value
      await page.locator('#gh-cat').selectOption({value:'1281'})
      await page.waitForTimeout(3000)
      //select option from listbox using index
      await page.locator('#gh-cat').selectOption({index:2})
      await page.waitForTimeout(3000)
})
test('Handling Multioption listbox',async({page})=>{
    await page.goto('file:///D:/MultiListboxHtmlpage.html')
    await page.waitForTimeout(3000)
    //select options using values
    await page.locator("[name='multiSelection']").selectOption(['Yellow','purple'])
    await page.waitForTimeout(3000)
    //select options using value
    await page.locator("[name='multiSelection']").selectOption([{value:'black'},{value:'blue'}])
    await page.waitForTimeout(3000)
    //select options using label
    await page.locator("[name='multiSelection']").selectOption([{label:'silver'},{label:'brown'}])
    await page.waitForTimeout(3000)
    //select options using index
    await page.locator("[name='multiSelection']").selectOption([{index:2},{index:0},{index:5}])
    await page.waitForTimeout(3000)
    
})