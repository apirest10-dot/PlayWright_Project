import test from "@playwright/test";
test('Handling calender',async({page})=>{
    const dob ='25/February/2020'
    const[date,month,year] = dob.split('/')
    await page.goto('https://jqueryui.com/datepicker/')
    await page.waitForTimeout(3000)
    const frame = page.frameLocator('.demo-frame')
    //click date picker to open calender
    await frame.locator('#datepicker').click()
    //store year into one varibale
    const calYear = frame.locator('.ui-datepicker-year')
    //store cal month
    const calMonth = frame.locator('.ui-datepicker-month')
    while((await calYear.textContent()!= year)||( await calMonth.textContent()!=month))
    {
        //click prev button
        await frame.getByTitle('Prev').click()

    }
    //click date in calender
    await frame.locator(`//a[text()=${date}]`).click()
    const selecteddate = await frame.locator('#datepicker').inputValue()
    console.log(selecteddate)


})