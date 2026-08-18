import test from "@playwright/test";

test('Basic Css Selector',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/register')
    await page.waitForTimeout(3000)//hard coded time
    await page.locator('input#firstName').fill('Akhilesh')
    await page.locator('input.form-control').nth(1).fill('PlayWright')
    await page.locator('div.form-group>#phone').fill('876543')
    await page.locator("select[class='browser-default custom-select']").selectOption('India')
    await page.locator("input[class^='form']").nth(3).fill('Test@gmail.com')
    await page.locator("input[placeholder*='word']").fill('Test!@#')
    await page.locator("input[class$='input']").click()
    await page.locator('button.btn.btn-primary').click()
    await page.waitForTimeout(3000)
})
test('Using built in Locators',async({page})=>{
    test.describe.configure({timeout:5000})
    await page.goto('https://qa-practice.razvanvancea.ro/')
    await page.waitForTimeout(3000)
    await page.getByText('Forms',{exact:true}).click({force:true})
    await page.getByText('Register',{exact:true}).click({force:true})
    //await page.getByText(/Register/i).click()
    await page.getByRole('textbox',{name:'First Name'}).fill('Akhilesh')
    await page.getByPlaceholder('Enter last name').fill('Testing')
    await page.getByPlaceholder('Enter phone number').fill('97865432')
    await page.getByRole('combobox').selectOption('India')
    await page.getByRole('textbox',{name:'Enter email'}).fill('test@gmail.com')
    await page.getByRole('textbox',{name:'Password'}).fill('RTY3545')
    await page.getByText('I agree with the terms and conditions',{exact:true}).click({force:true})
    await page.getByRole('button',{name:'Register'}).click({force:true})
    await page.waitForTimeout(5000)
    //https://flights.qedgetech.com/
    

})