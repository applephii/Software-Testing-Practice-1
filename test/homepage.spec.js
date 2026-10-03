import { test, expect } from '@playwright/test';
import { loginToWeb } from './loginhelper';

test.describe('HomePage_Inventory', () => {
  test.beforeEach(async ({ page }) => {
    await loginToWeb(page);
  });

  test('should show page successfully', async ({ page }) => {
    await expect(page.getByText('Swag Labs')).toBeVisible();
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await expect(page.getByText('Sauce Labs Onesie')).toBeVisible();
  });

  test('should add to cart successfully', async ({ page }) => {
    await page.locator('id=add-to-cart-sauce-labs-backpack').click();
    await page.locator('id=add-to-cart-sauce-labs-onesie').click();

    await expect(page.locator('id=remove-sauce-labs-backpack')).toBeVisible();
    await expect(page.locator('id=remove-sauce-labs-onesie')).toBeVisible();
    // await expect(page.getByRole('button', { name: 'Cart, 2 items' })).toBeVisible();
    await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveAttribute('aria-label', 'Cart, 2 items');
  });

  test('should check out cart successfully', async ({ page }) => {
    // await page.getByRole('button', { name: 'Cart, 2 items' }).click();
    await page.locator('[data-test="shopping-cart-link"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    // await expect(page.getByText('Backpack')).toBeVisible();
    // await expect(page.getByText('Onesie')).toBeVisible();

    await page.getByRole('button', {name: 'checkout'}).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    await expect(page.getByText('Checkout: Your Information'));

    await page.getByRole('textbox', {name: 'First Name'}).fill('abc');
    await page.getByRole('textbox', {name: 'Last Name'}).fill('def');
    await page.getByRole('textbox', {name: 'Zip/Postal Code'}).fill('11223');
    
    await page.getByRole('button', {name: 'continue'}).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
    await expect(page.getByText('Checkout: Overview'));
    // await expect(page.getByText('Backpack')).toBeVisible();
    // await expect(page.getByText('Onesie')).toBeVisible();

    await page.getByRole('button', {name: 'finish'}).click();
    await expect(page.getByText('Thank You for your order'));
    await expect(page.getByRole('button', {name: 'back home'})).toBeVisible();
    await expect(page.getByRole('button', {name: 'generate pdf order'})).toBeVisible();
  });
});