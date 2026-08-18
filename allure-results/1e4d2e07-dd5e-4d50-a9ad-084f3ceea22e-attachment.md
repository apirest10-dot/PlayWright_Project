# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Annotations.spec.ts >> Upload Employee Photo
- Location: tests\Annotations.spec.ts:23:5

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.fill: Test timeout of 90000ms exceeded.
Call log:
  - waiting for locator('#txrname')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - textbox [ref=e5]
  - generic [ref=e6]:
    - img [ref=e8]
    - generic [ref=e9]:
      - img [ref=e11]
      - generic [ref=e39]:
        - generic [ref=e40]: LOGIN Panel
        - generic [ref=e41]:
          - textbox [ref=e42]
          - text: Username
        - generic [ref=e43]:
          - textbox [ref=e44]
          - text: Password
        - generic [ref=e46]:
          - button "LOGIN" [ref=e47] [cursor=pointer]
          - link "Forgot your password?" [ref=e49] [cursor=pointer]:
            - /url: /symfony/web/index.php/auth/requestPasswordResetCode
  - generic [ref=e52]:
    - text: "Alternative Login :"
    - combobox [ref=e53]:
      - option "-- Select --" [selected]
    - button "Login" [disabled] [ref=e54]
  - generic [ref=e55]:
    - generic [ref=e56]:
      - text: OrangeHRM 4.10.1
      - text: © 2005 - 2026
      - link "OrangeHRM, Inc" [ref=e57] [cursor=pointer]:
        - /url: http://www.orangehrm.com
      - text: . All rights reserved.
    - generic [ref=e58]:
      - link "LinkedIn OrangeHRM group" [ref=e59] [cursor=pointer]:
        - /url: http://www.linkedin.com/groups?home=&gid=891077
        - img "LinkedIn OrangeHRM group" [ref=e60]
      - link "OrangeHRM on Facebook" [ref=e61] [cursor=pointer]:
        - /url: http://www.facebook.com/OrangeHRM
        - img "OrangeHRM on Facebook" [ref=e62]
      - link "OrangeHRM on twitter" [ref=e63] [cursor=pointer]:
        - /url: http://twitter.com/orangehrm
        - img "OrangeHRM on twitter" [ref=e64]
      - link "OrangeHRM on youtube" [ref=e65] [cursor=pointer]:
        - /url: http://www.youtube.com/orangehrm
        - img "OrangeHRM on youtube" [ref=e66]
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
  11 | await page.locator('#txtPassword').fill('Qedge123!@#');
  12 | await page.locator('#btnLogin').click();
  13 | await expect(page).toHaveURL(/dashboard/);
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
> 26 |    await page.locator('#txrname').fill('Admin')
     |                                   ^ Error: locator.fill: Test timeout of 90000ms exceeded.
  27 |    // Large file upload
  28 | // Takes more time
  29 | })
```