import test, { expect } from "@playwright/test";
test('Login test with asserts',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/auth_ecommerce.html')
    await page.waitForTimeout(3000)
    //assert text is visble
    await expect(page.getByRole('heading',{name:'Login - Shop'})).toBeVisible()
    //enter email
    await page.getByPlaceholder('Enter email - insert admin@admin.com').fill('admin@admin.com')
    //assert that text box have expected value
    await expect.soft(page.getByPlaceholder('Enter email - insert admin@admin.com')).toHaveValue('admin@admin.com')
    //capture value in email text
    const emaivalue = await page.getByPlaceholder('Enter email - insert admin@admin.com').inputValue()
    console.log(emaivalue)
    //enter password
    await page.getByLabel('Password').fill('admin123')
    await expect.soft(page.getByLabel('Password')).toHaveValue('admin123')
    const passwordvalue = await page.getByLabel('Password').inputValue()
    console.log(passwordvalue)
    await page.getByText('Submit',{exact:true}).click({force:true})
    await expect(page.getByRole('heading',{name:'SHOPPING CART'})).toHaveText(/SHOPPING/)
await page.waitForTimeout(3000)
})