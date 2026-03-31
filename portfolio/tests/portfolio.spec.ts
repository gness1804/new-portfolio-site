import { test, expect } from '@playwright/test';

/**
 * Portfolio page (/portfolio) E2E tests.
 * Verifies all project cards, GitHub links, open source section,
 * certifications, and skills sections.
 */
test.describe('Portfolio page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/portfolio');
  });

  test('page loads successfully with 200 status', async ({ page }) => {
    const response = await page.request.get('/portfolio');
    expect(response.status()).toBe(200);
  });

  test('page has "Portfolio" h1 heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Portfolio', level: 1 })).toBeVisible();
  });

  test('all 4 project cards render with correct titles', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Friendly Advice Columnist' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Receipt Ranger' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Recipe Chatbot' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Cursor File System' })).toBeVisible();
  });

  test('Friendly Advice Columnist GitHub link has correct href', async ({ page }) => {
    const link = page.getByRole('link', { name: /Friendly Advice Columnist.*GitHub/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', 'https://github.com/gness1804/friendly-advice-columnist');
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('Receipt Ranger GitHub link has correct href', async ({ page }) => {
    const link = page.getByRole('link', { name: /Receipt Ranger.*GitHub/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', 'https://github.com/gness1804/receipt-ranger');
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('Recipe Chatbot GitHub link has correct href', async ({ page }) => {
    const link = page.getByRole('link', { name: /Recipe Chatbot.*GitHub/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', 'https://github.com/gness1804/recipes-ai-app');
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('Cursor File System GitHub link has correct href', async ({ page }) => {
    const link = page.getByRole('link', { name: /Cursor File System.*GitHub/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', 'https://github.com/gness1804/cursor-file-system');
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('Open Source Contributions section is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Open Source Contributions' })).toBeVisible();
  });

  test('open source entries are listed', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'River City Resources' })).toBeVisible();
    await expect(page.getByText('CHARLOTTE')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Taco Price Index' })).toBeVisible();
  });

  test('Certifications section is visible with AWS cert', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Certifications' })).toBeVisible();
    await expect(page.getByText('AWS Certified Solutions Architect')).toBeVisible();
  });

  test('Core Skills section is visible with key technologies', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Core Skills' })).toBeVisible();
    await expect(page.getByText(/Python/)).toBeVisible();
    await expect(page.getByText(/AWS \(Lambda/)).toBeVisible();
  });

  test('project cards have anchor IDs for deep linking', async ({ page }) => {
    // Verify the anchor IDs exist for hash navigation from home page tiles
    const fac = page.locator('#friendly-advice-columnist');
    const rr = page.locator('#receipt-ranger');
    const rc = page.locator('#recipe-chatbot');
    const cfs = page.locator('#cursor-file-system');

    await expect(fac).toBeAttached();
    await expect(rr).toBeAttached();
    await expect(rc).toBeAttached();
    await expect(cfs).toBeAttached();
  });
});
