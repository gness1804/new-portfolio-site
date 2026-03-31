import { test, expect } from '@playwright/test';

/**
 * Work Accomplishments page (/work-accomplishments) E2E tests.
 * Verifies all section headings, impact-at-scale section, and key content.
 */
test.describe('Work Accomplishments page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/work-accomplishments');
  });

  test('page loads successfully with 200 status', async ({ page }) => {
    const response = await page.request.get('/work-accomplishments');
    expect(response.status()).toBe(200);
  });

  test('page has "Work Accomplishments" h1 heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Work Accomplishments', level: 1 })).toBeVisible();
  });

  test('Infrastructure & Security Engineering section is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Infrastructure & Security Engineering' })).toBeVisible();
  });

  test('Security Leadership section heading is present', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Security Leadership' })).toBeVisible();
  });

  test('Infrastructure Modernization section heading is present', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Infrastructure Modernization' })).toBeVisible();
  });

  test('Cost Optimization & Efficiency section heading is present', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Cost Optimization & Efficiency' })).toBeVisible();
  });

  test('Access & Identity Management section heading is present', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Access & Identity Management' })).toBeVisible();
  });

  test('Automation & Tooling section heading is present', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Automation & Tooling' })).toBeVisible();
  });

  test('Cloud Architecture section heading is present', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Cloud Architecture' })).toBeVisible();
  });

  test('Database Infrastructure section heading is present', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Database Infrastructure' })).toBeVisible();
  });

  test('"Impact at Scale" section heading is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Impact at Scale' })).toBeVisible();
  });

  test('"574 completed technical initiatives" text is present', async ({ page }) => {
    await expect(page.getByText('574 completed technical initiatives')).toBeVisible();
  });

  test('key security numbers are displayed', async ({ page }) => {
    // Spot-check that the key quantified accomplishments are rendered
    await expect(page.getByText('90+ security vulnerabilities')).toBeVisible();
    await expect(page.getByText('340+ zero-downtime configuration changes')).toBeVisible();
    await expect(page.getByText('90+ Prisma Cloud violations')).toBeVisible();
  });

  test('major healthcare company context is mentioned', async ({ page }) => {
    await expect(page.getByText(/Major healthcare company/i)).toBeVisible();
  });
});
