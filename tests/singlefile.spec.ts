import test, { expect } from "@playwright/test";
import path from "path";
test('Upload single file',async({page})=>{
    //store path of file which you want upload
    const filepath =path.join(__dirname,"../TestData/Capture.PNG")
    await page.goto('https://qa-practice.netlify.app/file-upload')
    await page.waitForTimeout(3000)
    //click upload button
    await page.locator('#file_upload').setInputFiles(filepath)
    await page.getByText('Submit',{exact:true}).click({force:true})
    const message = await page.locator('#file_upload_response').textContent()
    console.log(message)
    await expect(page.locator('#file_upload_response')).toHaveText(/You have successfully uploaded/)
})
test('Multiple Files Upload',async({page})=>{
    const filepath1 =path.join(__dirname,"../TestData/Capture.PNG")
    const filepath2 =path.join(__dirname,"../TestData/Creating Prompt.txt")
    const filepath3 =path.join(__dirname,"../TestData/EvengBatch.xlsx")
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.waitForTimeout(3000)
    await page.locator('#filesToUpload').setInputFiles(
        [filepath1,filepath2,filepath3])
     const allfile = await page.locator('ul#fileList>li').allInnerTexts()
     console.log(allfile)
     
})
test("Handling file download scenario", async ({page})=>{
    await page.goto("https://demoqa.com/upload-download")
    const downloadResult = page.waitForEvent('download')
   //  console.log(downloadResult);
    await page.locator("#downloadButton").click()
    await page.waitForTimeout(3000)
    const download = await downloadResult
   //  console.log(download);
       const downloadDir = await path.join(__dirname,"../downloads")
    console.log(downloadDir);
       // C:\Users\pkroy\Videos\PWTSMay26\downloads\abcd.jpg
    // suggestedFilename() - Return the downloaded file name
    const fileName = await download.suggestedFilename()
    console.log(fileName);
     await page.waitForTimeout(3000)
    const filePath = path.join(downloadDir, fileName)
    console.log(filePath)
 await page.waitForTimeout(3000)
   // saveAs(filepath) - Copy the download to a user-specified path
    await download.saveAs(filePath)
 await page.waitForTimeout(3000)
   await expect(filePath).toContain(fileName)
    await page.waitForTimeout(3000)
})