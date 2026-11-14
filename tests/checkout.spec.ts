import { test, expect } from 'playwright/test';
import path from 'path';

const checkoutPage = 'file://' + path.resolve(__dirname, '../site/checkout.html');

test('guest can check out', async ({ page }) => {
  await page.goto(checkoutPage);
  await page.getByLabel('Full name').fill('Asha QA');
  await page.getByLabel('Address').fill('12 MG Road, Bengaluru');
  await page.getByRole('button', { name: 'Place order as guest' }).click();
  await expect(page.getByRole('status')).toHaveText('Order placed! Order number: 1005');
});

test('checkout needs name and address', async ({ page }) => {
  await page.goto(checkoutPage);
  await page.getByRole('button', { name: 'Place order as guest' }).click();
  await expect(page.getByRole('status')).toHaveText('Please fill in your name and address');
});
