import test, { expect } from "@playwright/test";
test('Handling mouse hover',async({page})=>{
    await page.goto('https://www.spicejet.com/')
    await page.waitForTimeout(3000)
    //mouse hover to addons
    await page.getByText('Add-ons',{exact:true}).hover()
    await page.waitForTimeout(3000)
    const webtext = await page.getByTestId('test-id-Extra Seat').innerText()
    console.log(webtext)
    await expect(page.getByTestId('test-id-Extra Seat')).toBeVisible()
    await page.waitForTimeout(3000)

})
test('Multiple mouse hover',async({page})=>{
    await page.goto('https://www.myntra.com/')
    await page.waitForTimeout(3000)
    await page.locator("a[data-group='men']").hover()
    await page.waitForTimeout(3000)
    await page.locator('[href="/men-tshirts"]').click()
    await page.waitForTimeout(3000)
    await page.locator('a[data-group="kids"]').hover()
    await page.waitForTimeout(3000)
    await page.locator('a[data-reactid="423"]').click()
    await page.locator('a[data-group="home"]').hover()
    await page.waitForTimeout(3000)
    await page.locator('a[href="/clocks"]').click()
})
