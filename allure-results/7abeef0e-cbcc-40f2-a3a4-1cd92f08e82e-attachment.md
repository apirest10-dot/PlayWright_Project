# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTest.spec.ts >> Environemnt file
- Location: tests\LoginTest.spec.ts:5:5

# Error details

```
Error: page.goto: url: expected string, got undefined
```

# Test source

```ts
  1  | import test, { expect } from "@playwright/test";
  2  | import dotenv from 'dotenv';
  3  | import path from 'path';
  4  | 
  5  | test('Environemnt file',async({page})=>{
  6  |     dotenv.config({ path: path.resolve(__dirname, 'Environment.env') });
> 7  |     await page.goto(process.env.BASE_URL!)
     |                ^ Error: page.goto: url: expected string, got undefined
  8  |     await page.locator('#txtUsername').fill(process.env.BASE_USER!)
  9  |     await page.locator('#txtPassword').fill(process.env.BASE_PASS!)
  10 |     await page.locator('#btnLogin').click()
  11 |     await expect.soft(page).toHaveURL(/dashboard/)
  12 | })
```