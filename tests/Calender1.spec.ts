import test, { expect } from "@playwright/test";
test('Handling Calender1',async({page})=>{
    const dob ='20-May-2000'
    const[date,month,year] = dob.split('-')
    console.log(date)
    console.log(month)
    console.log(year)
    await page.goto('https://flights.qedgetech.com/register.html')
    await page.waitForTimeout(3000)
    //click on date pickect textbox
    await page.locator('#popupDatepicker').click()
    //select year from year listbox
    await page.locator('.ui-datepicker-year').selectOption({label:year})
    await page.waitForTimeout(3000)
    //select month from calender
    await page.locator('.ui-datepicker-month').selectOption({label:month})
    await page.waitForTimeout(3000)
    await page.locator(`//a[text()=${date}]`).click({force:true})
    const dateselected = await page.locator('#popupDatepicker').inputValue()
    console.log(dateselected)
    await expect(page.locator('#popupDatepicker')).toHaveValue('20-05-2000')
    await page.waitForTimeout(3000)



})