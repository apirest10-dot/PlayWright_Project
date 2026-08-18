import { test, expect } from '@playwright/test';
test.skip('Verify Forgot Password', async ({ page }) => {
await page.goto('http://orangehrm.qedgetech.com/');
await page.click('text=Forgot your password?');
});


test.fail('Invalid Login', async ({ page }) => {
await page.goto('http://orangehrm.qedgetech.com/');
await page.locator('#txtUsername').fill('Admin');
await page.locator('#txtPassword').fill('Qedge123!');
await page.locator('#btnLogin').click();
await expect(page).toHaveURL(/dashboard/);
});

test.fixme('Verify Employee Delete', async ({ page }) => {
await page.goto('http://orangehrm.qedgetech.com/');
// Bug exists in application
// Test will not execute
});


test('Upload Employee Photo', async ({ page }) => {
    test.slow()
 await page.goto('http://orangehrm.qedgetech.com/')
   await page.locator('#txrname').fill('Admin')
   // Large file upload
// Takes more time
})

test('OrangeHRM Login', async ({ page }) => {
await test.step('Open Login Page', async () => {
await page.goto('http://orangehrm.qedgetech.com/');
});
await test.step('Enter Username', async () => {
await page.fill('#txtUsername','Admin');
});
await test.step('Enter Password', async () => {
await page.fill('#txtPassword','Qedge123!@#');
});
await test.step('Click Login Button', async () => {
await page.click('#btnLogin');
});
await test.step('Verify Dashboard', async () => {
await expect(page).toHaveURL(/dashboard/);
});
});

test.describe('Related Group of Testcases',()=>{
 test('Login with valid data',async({page})=>{
await page.goto('http://orangehrm.qedgetech.com/');
await page.locator('#txtUsername').fill('Admin');
await page.locator('#txtPassword').fill('Qedge123!@#');
await page.locator('#btnLogin').click();
await expect(page).toHaveURL(/dashboard/);
    })

test('Login with Invalid data',async({page})=>{
await page.goto('http://orangehrm.qedgetech.com/');
await page.locator('#txtUsername').fill('Admin');
await page.locator('#txtPassword').fill('Qedge123#');
await page.locator('#btnLogin').click();
await expect(page.locator('#spanMessage')).toContainText('Invalid credentials')
    })


})