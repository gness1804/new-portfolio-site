import { test, expect } from '@playwright/test';

const AMAZON_BOOK_URL =
  'https://www.amazon.com/Islandwide-Struggle-Freedom-Emancipation-Reenslavement-ebook/dp/B015ZTG2UM/ref=sr_1_1?ie=UTF8&qid=1446851797&sr=8-1&keywords=graham+nessler';

/**
 * History page (/history) E2E tests.
 * Verifies book cover image, Amazon link, and all body paragraphs.
 */
test.describe('History page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/history');
  });

  test('page loads successfully with 200 status', async ({ page }) => {
    const response = await page.request.get('/history');
    expect(response.status()).toBe(200);
  });

  test('page has "History" h1 heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'History', level: 1 })).toBeVisible();
  });

  test('opening paragraph about historian background is present', async ({ page }) => {
    await expect(
      page.getByText("I'm a professionally trained historian specializing in Latin American and Caribbean history")
    ).toBeVisible();
  });

  test('book cover image renders with correct alt text', async ({ page }) => {
    const bookCover = page.getByRole('img', { name: /An Islandwide Struggle for Freedom/i });
    await expect(bookCover).toBeVisible();
  });

  test('book image src points to the correct asset', async ({ page }) => {
    const bookCover = page.getByRole('img', { name: /An Islandwide Struggle for Freedom/i });
    await expect(bookCover).toHaveAttribute('src', '/assets/island-wide-struggle-cover.png');
  });

  test('Amazon link is correct and has security attributes', async ({ page }) => {
    // The book title link in the opening paragraph
    const bookTitleLink = page.getByRole('link', { name: /An Islandwide Struggle for Freedom/i }).first();
    await expect(bookTitleLink).toBeVisible();
    await expect(bookTitleLink).toHaveAttribute('href', AMAZON_BOOK_URL);
    await expect(bookTitleLink).toHaveAttribute('rel', 'noopener noreferrer');
    await expect(bookTitleLink).toHaveAttribute('target', '_blank');
  });

  test('book cover image is wrapped in an Amazon link', async ({ page }) => {
    const bookLink = page.getByRole('link', {
      name: /Buy An Islandwide Struggle for Freedom on Amazon/i,
    });
    await expect(bookLink).toBeVisible();
    await expect(bookLink).toHaveAttribute('href', AMAZON_BOOK_URL);
    await expect(bookLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('second body paragraph (why study one revolution) is present', async ({ page }) => {
    await expect(page.getByText('Why study a single revolution for years?')).toBeVisible();
  });

  test('third body paragraph (sugar in your coffee) is present', async ({ page }) => {
    await expect(page.getByText('The sugar in your coffee')).toBeVisible();
  });

  test('fourth body paragraph (historical training and tech) is present', async ({ page }) => {
    await expect(page.getByText('This historical training shapes how I approach technology')).toBeVisible();
  });

  test('final paragraph about broader historical interests is present', async ({ page }) => {
    await expect(
      page.getByText(/My broader historical interests include Ancient Rome/)
    ).toBeVisible();
  });
});
