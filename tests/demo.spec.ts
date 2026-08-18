import test, { expect } from "@playwright/test";

test('sample test',async({page})=>{
 await page.goto('http://orangehrm.qedgetech.com/symfony/web/index.php/auth/login');
 await page.getByText('Username').click();
 await page.locator('#txtUsername').fill('Admin');
 await expect(page.locator('#txtUsername')).toHaveValue('Admin');
 await page.locator('#txtPassword').click();
 await page.locator('#txtPassword').fill('Qedge123!@#');
 await expect(page.locator('#txtPassword')).toHaveValue('Qedge123!@#');
 await page.getByRole('button', { name: 'LOGIN', exact: true }).click();
 await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
 await page.getByRole('link', { name: 'PIM' }).click();
 await page.getByRole('button', { name: 'Add' }).click();
 await page.locator('#firstName').click();
 await page.locator('#firstName').fill('test');
 await page.locator('#middleName').click();
 await page.locator('#middleName').fill('sele');
 await page.locator('#lastName').click();
 await page.locator('#lastName').fill('play');
 await expect(page.getByRole('textbox', { name: 'Employee Id' })).toHaveValue('0269');
 await page.getByRole('button', { name: 'Save' }).click();
 await expect(page.locator('#profile-pic')).toContainText('test sele play');   
})