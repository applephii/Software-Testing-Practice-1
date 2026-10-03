// SauceDemo.com Testing

import { test, expect } from '@playwright/test';

test.describe('LoginPage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://saucedemo.com/');
  });

  test('Login page should appear', async ({ page }) => {
    await expect(page.getByText('Swag Labs')).toBeVisible();
    await expect(page.getByRole('button', {name:'Login'})).toBeVisible();
    // await expect(page.getByLabel('Username')).toBeVisible();
    // await expect(page.getByLabel('Password')).toBeVisible();
    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
  });

  test('should login successfully', async ({ page }) => {
    // await page.getByLabel('Username').fill('standard_user');
    // await page.getByLabel('Password').fill('secret_sauce');
    await page.getByRole('textbox', {name: 'Username'}).fill('standard_user');
    await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce');
    // await page.locator('#user-name').fill('standard_user');
    // await page.locator('#password').fill('secret_sauce');
    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });
});