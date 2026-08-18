# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Calender1.spec.ts >> Handling Calender1
- Location: tests\Calender1.spec.ts:2:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://flights.qedgetech.com/register.html", waiting until "load"

```

# Test source

```ts
  1  | import test, { expect } from "@playwright/test";
  2  | test('Handling Calender1',async({page})=>{
  3  |     const dob ='20-May-2000'
  4  |     const[date,month,year] = dob.split('-')
  5  |     console.log(date)
  6  |     console.log(month)
  7  |     console.log(year)
> 8  |     await page.goto('https://flights.qedgetech.com/register.html')
     |                ^ Error: page.goto: Target page, context or browser has been closed
  9  |     await page.waitForTimeout(3000)
  10 |     //click on date pickect textbox
  11 |     await page.locator('#popupDatepicker').click()
  12 |     //select year from year listbox
  13 |     await page.locator('.ui-datepicker-year').selectOption({label:year})
  14 |     await page.waitForTimeout(3000)
  15 |     //select month from calender
  16 |     await page.locator('.ui-datepicker-month').selectOption({label:month})
  17 |     await page.waitForTimeout(3000)
  18 |     await page.locator(`//a[text()=${date}]`).click({force:true})
  19 |     const dateselected = await page.locator('#popupDatepicker').inputValue()
  20 |     console.log(dateselected)
  21 |     await expect(page.locator('#popupDatepicker')).toHaveValue('20-05-2000')
  22 |     await page.waitForTimeout(3000)
  23 | 
  24 | 
  25 | 
  26 | })
```