import test, { Locator } from "@playwright/test";
test('Fetching table data',async({page})=>{
    await page.goto('https://www.w3schools.com/Html/html_tables.asp')
    await page.waitForTimeout(3000)
    //locate webtable
    const webtable:Locator = page.locator('.ws-table-all').first()
    //get tr tag from table
    const rows = webtable.locator('tr')
    //count no of rows
    const rowcount = await rows.count()
    console.log(`No of rows are ${rowcount-1}`)
    //iterate all rows to get cells
    for(let i=1;i<rowcount;i++)
    {
        //get each cell from row
        const cells = rows.nth(i).locator('td')
        //count no of cells
        const cellcount = await cells.count()
        //iterate all cells
        for(let j=0;j<cellcount;j++)
        {
            //get each cell text
            const celldata = await cells.nth(j).textContent()
            console.log(celldata)
        }
        console.log('=====================================================')

    }
})
