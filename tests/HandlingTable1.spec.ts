import test, { Locator } from "@playwright/test";
//script to print specific row cell data
test('Handling table data',async({page})=>{
    await page.goto('https://www.w3schools.com/Html/html_tables.asp')
    await page.waitForTimeout(3000)
    //get any row cell data
 const tabledata1 = await page.locator("table#customers tbody tr:nth-child(2) td:nth-child(1)").innerText()
 const tabledata2 = await page.locator("table#customers tbody tr:nth-child(2) td:nth-child(2)").innerText()
 const tabledata3 = await page.locator("table#customers tbody tr:nth-child(2) td:nth-child(3)").innerText()
    console.log(tabledata1)
    console.log(tabledata2)
    console.log(tabledata3)
})
//count no of rows and cell in each row
test('Rows and cell count',async function ({page}){
    await page.goto('https://www.w3schools.com/Html/html_tables.asp')
    await page.waitForTimeout(3000)
    //Locate table and store
    const Webatble:Locator = page.locator('table.ws-table-all').first()
    //get all tr tags from table
    const rows = await Webatble.locator('tr')
    //count no of rows 
    const rowcount = await rows.count()
    console.log(`no of rows are ${rowcount-1}`)
    for(let i=1;i<rowcount;i++)
    {
        //get all td tag in each rows
        const cellcount = await rows.nth(i).locator('td').count()
        console.log(`No of cells in each row ${i}: ${cellcount}`)
    }
})

test('All rows  specified cell data',async({page})=>{
    await page.goto('https://www.w3schools.com/Html/html_tables.asp')
    await page.waitForTimeout(3000)
    //locate table in a page
    const webtable :Locator = page.locator('table.ws-table-all').first()
    const rows =  webtable.locator('tr')
    const rowcount = await rows.count()
    console.log(`No of rows ${rowcount-1}`)
    for(let i=1;i<rowcount;i++)
    {
        const celldata = await rows.nth(i).locator('td').nth(2).innerText()
        console.log(celldata)
    }

})
test('Specified rows cell data',async({page})=>{
    await page.goto('https://www.w3schools.com/Html/html_tables.asp')
    await page.waitForTimeout(3000)
    //locate table
    const webtable :Locator = page.locator('table.ws-table-all').first()
    //get all tr tags from table
    const rows = webtable.locator('tr')
    const rowcount = await rows.count()
    //get all cells
    const cells = rows.locator('td')
    //get first rows cell data
    const celldata = await rows.nth(1).textContent()
   // const celldata = await rows.nth(1).allInnerTexts()
    console.log(celldata)
})