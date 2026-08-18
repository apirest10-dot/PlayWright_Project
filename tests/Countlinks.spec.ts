import test from "@playwright/test";
test('Counting Links',async({page})=>{
    await page.goto('https://www.facebook.com/')
    await page.waitForTimeout(3000)
    //get all links in a web page which are stored into html tag <a>
    const all_Links = page.locator('a')
    //count all links
    const count_links = await all_Links.count()
    console.log(`No of links are ${count_links}`)
    //iterate all links
    for(let i=0;i<count_links;i++)
    {
        //capture each link text
        const linkname = await all_Links.nth(i).textContent()
        console.log(`Link Position ${i}: ${linkname?.trim()}`)
    }

})
test('Counting Links part2',async({page})=>{
    await page.goto('https://www.facebook.com/')
    await page.waitForTimeout(3000)
    //get all links in a web page which are stored into html tag <a>
    const all_Links = page.locator('a')
    //count all links
    const count_links = await all_Links.all()
    console.log(`No of links are ${count_links.length}`)
    for (const element of count_links) {
        const eachlinkname = await element.textContent()
        const eachlinkurl = await element.getAttribute('href')
        console.log(eachlinkname)
        console.log(eachlinkurl)
    }
})