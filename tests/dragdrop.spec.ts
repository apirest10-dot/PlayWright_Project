import test, { expect, Locator } from "@playwright/test";
test('Handling Drag and Drop',async({page})=>{
    await page.goto('https://jqueryui.com/droppable/')
    await page.waitForTimeout(3000)
    //idetify iframe and store
    const frame = page.frameLocator('.demo-frame')
    const source = frame.locator('#draggable')
    const target = frame.locator('#droppable')
    await source.dragTo(target)
    await expect(frame.getByText('Dropped!').last()).toHaveText('Dropped!')
   await page.waitForTimeout(4000)
})
test('Drag and drop 1',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop')
    await page.waitForTimeout(3000)
    const source:Locator = page.locator('#column-a')
    const target:Locator = page.locator('#column-b')
    await source.dragTo(target)
    await page.waitForTimeout(3000)
})

test('Handling hidden Elements',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/show-hide-element')
    await page.waitForTimeout(3000)
    await expect(page.locator('#hiddenText')).toBeVisible()
    await page.waitForTimeout(3000)
    await page.locator('#showHideBtn').click()
     await page.waitForTimeout(3000)
     //assert text to be hidden
     await expect(page.locator('#hiddenText')).toBeHidden()
      await page.waitForTimeout(3000)
     await page.locator('#showHideBtn').click()
      await page.waitForTimeout(3000)
     await expect(page.locator('#hiddenText')).toBeVisible()
     await page.waitForTimeout(3000)
})