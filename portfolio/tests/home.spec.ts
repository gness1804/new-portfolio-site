import { test, expect } from '@playwright/test';

/**
 * Home page (/) E2E tests.
 * Verifies hero content, project preview tiles, CTA button, and career section.
 */
test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('page loads successfully with 200 status', async ({ page }) => {
    const response = await page.request.get('/');
    expect(response.status()).toBe(200);
  });

  test('"Graham Nessler" heading is visible', async ({ page }) => {
    const heading = page.getByRole('heading', { name: 'Graham Nessler', level: 1 });
    await expect(heading).toBeVisible();
  });

  test('hero intro text is present', async ({ page }) => {
    // Opening sentence of intro paragraph
    await expect(page.getByText("I'm Graham Nessler, an AWS-certified infrastructure and AI engineer")).toBeVisible();
  });

  test('hero bullet points are present', async ({ page }) => {
    await expect(page.getByText('Remediated 90+ security vulnerabilities')).toBeVisible();
    await expect(page.getByText('Executed 340+ zero-downtime configuration changes')).toBeVisible();
    await expect(page.getByText('Resolved 90+ Prisma Cloud violations')).toBeVisible();
  });

  test('three project preview tiles render with correct titles', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Friendly Advice Columnist' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Receipt Ranger' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Recipe Chatbot' })).toBeVisible();
  });

  test('"View all projects" button is present and links to /portfolio', async ({ page }) => {
    const link = page.getByRole('link', { name: 'View all projects' });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', '/portfolio');
  });

  test('career transition section heading is visible', async ({ page }) => {
    const heading = page.getByRole('heading', { name: 'From the Classroom to the Cloud' });
    await expect(heading).toBeVisible();
  });

  test('career section contains link to Amazon book', async ({ page }) => {
    const bookLink = page.getByRole('link', { name: 'an academic book' });
    await expect(bookLink).toBeVisible();
    await expect(bookLink).toHaveAttribute('href', /amazon\.com/);
    await expect(bookLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('career section bullet points are present', async ({ page }) => {
    await expect(page.getByText('Career stability and clear growth trajectory')).toBeVisible();
    await expect(page.getByText('Geographic flexibility and remote work opportunities')).toBeVisible();
  });
});
