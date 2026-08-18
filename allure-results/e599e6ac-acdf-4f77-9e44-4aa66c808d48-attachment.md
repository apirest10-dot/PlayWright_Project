# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Annotations.spec.ts >> Invalid Login
- Location: tests\Annotations.spec.ts:8:6

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /dashboard/
Received string:  "http://orangehrm.qedgetech.com/symfony/web/index.php/auth/validateCredentials"
Timeout: 20000ms

Call log:
  - Expect "toHaveURL" with timeout 20000ms
    43 × unexpected value "http://orangehrm.qedgetech.com/symfony/web/index.php/auth/validateCredentials"

```

```yaml
- textbox
- img
- img
- text: LOGIN Panel
- textbox
- text: Username
- textbox
- text: Password
- button "LOGIN"
- text: Invalid credentials
- link "Forgot your password?":
  - /url: /symfony/web/index.php/auth/requestPasswordResetCode
- text: OrangeHRM 4.10.1 © 2005 - 2026
- link "OrangeHRM, Inc":
  - /url: http://www.orangehrm.com
- text: . All rights reserved.
- link "LinkedIn OrangeHRM group":
  - /url: http://www.linkedin.com/groups?home=&gid=891077
  - img "LinkedIn OrangeHRM group"
- link "OrangeHRM on Facebook":
  - /url: http://www.facebook.com/OrangeHRM
  - img "OrangeHRM on Facebook"
- link "OrangeHRM on twitter":
  - /url: http://twitter.com/orangehrm
  - img "OrangeHRM on twitter"
- link "OrangeHRM on youtube":
  - /url: http://www.youtube.com/orangehrm
  - img "OrangeHRM on youtube"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | test.skip('Verify Forgot Password', async ({ page }) => {
  3  | await page.goto('http://orangehrm.qedgetech.com/');
  4  | await page.click('text=Forgot your password?');
  5  | });
  6  | 
  7  | 
  8  | test.fail('Invalid Login', async ({ page }) => {
  9  | await page.goto('http://orangehrm.qedgetech.com/');
  10 | await page.locator('#txtUsername').fill('Admin');
  11 | await page.locator('#txtPassword').fill('Qedge123!');
  12 | await page.locator('#btnLogin').click();
> 13 | await expect(page).toHaveURL(/dashboard/);
     |                    ^ Error: expect(page).toHaveURL(expected) failed
  14 | });
  15 | 
  16 | test.fixme('Verify Employee Delete', async ({ page }) => {
  17 | await page.goto('http://orangehrm.qedgetech.com/');
  18 | // Bug exists in application
  19 | // Test will not execute
  20 | });
  21 | 
  22 | 
  23 | test('Upload Employee Photo', async ({ page }) => {
  24 |     test.slow()
  25 |  await page.goto('http://orangehrm.qedgetech.com/')
  26 |    await page.locator('#txrname').fill('Admin')
  27 |    // Large file upload
  28 | // Takes more time
  29 | })
  30 | 
  31 | test('OrangeHRM Login', async ({ page }) => {
  32 | await test.step('Open Login Page', async () => {
  33 | await page.goto('http://orangehrm.qedgetech.com/');
  34 | });
  35 | await test.step('Enter Username', async () => {
  36 | await page.fill('#txtUsername','Admin');
  37 | });
  38 | await test.step('Enter Password', async () => {
  39 | await page.fill('#txtPassword','Qedge123!@#');
  40 | });
  41 | await test.step('Click Login Button', async () => {
  42 | await page.click('#btnLogin');
  43 | });
  44 | await test.step('Verify Dashboard', async () => {
  45 | await expect(page).toHaveURL(/dashboard/);
  46 | });
  47 | });
  48 | 
  49 | test.describe('Related Group of Testcases',()=>{
  50 |     test('Login with valid data',async({page})=>{
  51 | await page.goto('http://orangehrm.qedgetech.com/');
  52 | await page.locator('#txtUsername').fill('Admin');
  53 | await page.locator('#txtPassword').fill('Qedge123!@#');
  54 | await page.locator('#btnLogin').click();
  55 | await expect(page).toHaveURL(/dashboard/);
  56 |     })
  57 | 
  58 |     test.fail('Login with Invalid data',async({page})=>{
  59 | await page.goto('http://orangehrm.qedgetech.com/');
  60 | await page.locator('#txtUsername').fill('Admin');
  61 | await page.locator('#txtPassword').fill('Qedge123!@#');
  62 | await page.locator('#btnLogin').click();
  63 | //await expect(page.locator('#spanMessage')).toContainText('Invalid credentials')
  64 |     })
  65 | 
  66 | 
  67 | })
```