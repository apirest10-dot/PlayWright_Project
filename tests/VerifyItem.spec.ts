import test, { Locator } from "@playwright/test";
test('Verify optin in Listbox',async({page})=>{
   let Expected_Option :string= 'crafts' 
   let Item_Exist:boolean =false
   await page.goto('https://www.ebay.com/')
   await page.waitForTimeout(3000)
   //store listbox into one varibale
   const listboxele:Locator = page.locator('#gh-cat')
   //get option from listbox
   const all_Options = listboxele.locator('option')
   //count no of options
   const countoptions = await all_Options.all()
   console.log(`No of options are ${countoptions.length}`)
   for (const element of countoptions) {
    //get each option text from listbox
    let Actual_Options = await element.innerText()
    await page.waitForTimeout(200)
    console.log(Actual_Options)
    if(Actual_Options.toUpperCase().match(Expected_Option.toUpperCase()))
    {
        Item_Exist=true
        break
    }
       }
   if(Item_Exist)//it is storing true or false
   {
    console.log(`${Expected_Option} Option Found in Listbox`)
   }
   else{
    console.log(`${Expected_Option} Option Not Found in Listbox`)
   }
})
