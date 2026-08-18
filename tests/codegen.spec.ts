import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa-practice.netlify.app/register');
  await expect(page.getByRole('heading', { name: 'Register Form' })).toBeVisible();
   await page.getByRole('textbox', { name: 'First Name' }).fill('Akhilesh');
  await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveValue('Akhilesh');
  await page.getByRole('textbox', { name: 'Last Name Phone number Country' }).click();
  await page.getByRole('textbox', { name: 'Last Name Phone number Country' }).fill('testing');
  await page.getByRole('textbox', { name: 'Enter phone number' }).click();
  await page.getByRole('textbox', { name: 'Enter phone number' }).fill('87654321');
  await page.locator('#countries_dropdown_menu').selectOption('Azerbaijan');
  await page.getByRole('textbox', { name: 'Enter email' }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).fill('test@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test@12345');
  await page.getByRole('checkbox', { name: 'I agree with the terms and' }).check();
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.locator('#message')).toContainText('The account has been successfully created!');
});