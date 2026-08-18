# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BasicUi.spec.ts >> Using built in Locators
- Location: tests\BasicUi.spec.ts:16:5

# Error details

```
Error: Playwright Test did not expect test.describe.configure() to be called here.
Most common reasons include:
- You are calling test.describe.configure() in a configuration file.
- You are calling test.describe.configure() in a file that is imported by the configuration file.
- You have two different versions of @playwright/test. This usually happens
  when one of the dependencies in your package.json depends on @playwright/test.
- You are calling test.describe.configure() from an async test.describe() block. Only sync ones are supported.
```

# Test source

```ts
  1  | import test from "@playwright/test";
  2  | 
  3  | test('Basic Css Selector',async({page})=>{
  4  |     await page.goto('https://qa-practice.netlify.app/register')
  5  |     await page.waitForTimeout(3000)//hard coded time
  6  |     await page.locator('input#firstName').fill('Akhilesh')
  7  |     await page.locator('input.form-control').nth(1).fill('PlayWright')
  8  |     await page.locator('div.form-group>#phone').fill('876543')
  9  |     await page.locator("select[class='browser-default custom-select']").selectOption('India')
  10 |     await page.locator("input[class^='form']").nth(3).fill('Test@gmail.com')
  11 |     await page.locator("input[placeholder*='word']").fill('Test!@#')
  12 |     await page.locator("input[class$='input']").click()
  13 |     await page.locator('button.btn.btn-primary').click()
  14 |     await page.waitForTimeout(3000)
  15 | })
  16 | test('Using built in Locators',async({page})=>{
> 17 |     test.describe.configure({timeout:5000})
     |                   ^ Error: Playwright Test did not expect test.describe.configure() to be called here.
  18 |     await page.goto('https://qa-practice.razvanvancea.ro/')
  19 |     await page.waitForTimeout(3000)
  20 |     await page.getByText('Forms',{exact:true}).click({force:true})
  21 |     await page.getByText('Register',{exact:true}).click({force:true})
  22 |     //await page.getByText(/Register/i).click()
  23 |     await page.getByRole('textbox',{name:'First Name'}).fill('Akhilesh')
  24 |     await page.getByPlaceholder('Enter last name').fill('Testing')
  25 |     await page.getByPlaceholder('Enter phone number').fill('97865432')
  26 |     await page.getByRole('combobox').selectOption('India')
  27 |     await page.getByRole('textbox',{name:'Enter email'}).fill('test@gmail.com')
  28 |     await page.getByRole('textbox',{name:'Password'}).fill('RTY3545')
  29 |     await page.getByText('I agree with the terms and conditions',{exact:true}).click({force:true})
  30 |     await page.getByRole('button',{name:'Register'}).click({force:true})
  31 |     await page.waitForTimeout(5000)
  32 |     //https://flights.qedgetech.com/
  33 |     
  34 | 
  35 | })
```