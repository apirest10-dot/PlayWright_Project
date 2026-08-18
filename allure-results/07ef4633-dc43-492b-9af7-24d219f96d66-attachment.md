# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Alert2.spec.ts >> Handling prompt
- Location: tests\Alert2.spec.ts:23:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "", waiting until "load"

```

# Test source

```ts
  1  | import test, { expect } from "@playwright/test";
  2  | 
  3  | test('Handling confirm',async({page})=>{
  4  |     await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
  5  |     await page.waitForTimeout(3000)
  6  |     page.on('dialog',async(dialog)=>{
  7  |         //cap[ture alert type
  8  |         const alerttype = dialog.type()
  9  |         console.log(alerttype)
  10 |         //capture error message
  11 |         const err_mess = dialog.message()
  12 |         console.log(err_mess)
  13 |         await page.waitForTimeout(3000)
  14 |         dialog.dismiss()
  15 | 
  16 |     })
  17 |     await page.getByText('Click for JS Confirm').click()
  18 |     const webtext = await page.locator('#result').textContent()
  19 |     console.log(webtext)
  20 |     await expect(page.locator('#result')).toBeVisible()
  21 | 
  22 | })
  23 | test('Handling prompt',async({page})=>{
> 24 |     await page.goto('')
     |                ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  25 |     await page.waitForTimeout(3000)
  26 |     page.on('dialog',async(dialog)=>{
  27 |         const alerttype = dialog.type()
  28 |         console.log(alerttype)
  29 |         const alermess = dialog.message()
  30 |         console.log(alermess)
  31 |         await page.waitForTimeout(3000)
  32 |         dialog.accept('Akhilesh Hello')
  33 | 
  34 |     })
  35 |     await page.getByText('Click for JS Prompt').click()
  36 |     const webtext = await page.locator('#result').innerText()
  37 |     console.log(webtext)
  38 |     await expect(page.locator('#result')).toHaveText(/You entered:/)
  39 | 
  40 | })
```