import test, { expect } from "@playwright/test";

 test('Environemnt file',async({page})=>{
    await page.goto(process.env.BASE_URL!)
    await page.locator('#txtUsername').fill(process.env.BASE_USER!)
    await page.locator('#txtPassword').fill(process.env.BASE_PASS!)
    await page.locator('#btnLogin').click()
    await expect.soft(page).toHaveURL(/dashboard/)
})