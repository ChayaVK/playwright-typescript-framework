import { test, expect } from 'playwright/test';
import path from 'path';

const loginPage = 'file://' + path.resolve(__dirname, '../site/login.html');

test.beforeEach(async ({ page }) => {
  await page.goto(loginPage);
});

test('login button is disabled until a valid email is entered', async ({ page }) => {
  const button = page.getByRole('button', { name: 'Login' });
  await expect(button).toBeDisabled();
  await page.getByLabel('Email').fill('asha@example.com');
  await expect(button).toBeEnabled();
});

test('valid user can log in', async ({ page }) => {
  await page.getByLabel('Email').fill('asha@example.com');
  await page.getByLabel('Password').fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('status')).toHaveText('Welcome back!');
});

test('wrong password shows an error', async ({ page }) => {
  await page.getByLabel('Email').fill('asha@example.com');
  await page.getByLabel('Password').fill('wrong');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('status')).toHaveText('Invalid email or password');
});
