import { test, expect } from '@playwright/test';

/**
 * Blog page (/blog) E2E tests.
 * Verifies blog listing, sidebar, post navigation, and individual post rendering.
 */
test.describe('Blog listing page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog');
  });

  test('page loads successfully with 200 status', async ({ page }) => {
    const response = await page.request.get('/blog');
    expect(response.status()).toBe(200);
  });

  test('page has "Blog" h1 heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Blog', level: 1 })).toBeVisible();
  });

  test('displays the first blog post in the listing', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'How I Built This Portfolio Site with AI Agents' })
    ).toBeVisible();
  });

  test('shows post description in listing', async ({ page }) => {
    await expect(
      page.getByText('The story behind building a portfolio site using multi-agent orchestration')
    ).toBeVisible();
  });

  test('shows post date in listing', async ({ page }) => {
    await expect(page.getByText('April 8, 2026')).toBeVisible();
  });

  test('shows tags on post cards', async ({ page }) => {
    await expect(page.getByText('ai').first()).toBeVisible();
    await expect(page.getByText('agents').first()).toBeVisible();
  });

  test('post card links to the individual post', async ({ page }) => {
    const postLink = page.getByRole('link', { name: /Read more/ }).first();
    await postLink.click();
    await expect(page).toHaveURL(/\/blog\/building-this-site/);
  });

  test('right sidebar has "Recent Posts" heading', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(page.getByText('Recent Posts')).toBeVisible();
  });

  test('sidebar contains link to the first post', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    const sidebar = page.locator('aside[aria-label="Recent posts"]');
    await expect(
      sidebar.getByRole('link', { name: 'How I Built This Portfolio Site with AI Agents' })
    ).toBeVisible();
  });

  test('blog nav tab is active on listing page', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    const blogLink = page
      .locator('nav[aria-label="Main navigation"]')
      .getByRole('link', { name: 'Blog' });
    await expect(blogLink).toHaveAttribute('aria-current', 'page');
  });
});

test.describe('Blog post page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog/building-this-site');
  });

  test('page loads successfully with 200 status', async ({ page }) => {
    const response = await page.request.get('/blog/building-this-site');
    expect(response.status()).toBe(200);
  });

  test('displays the post title as h1', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'How I Built This Portfolio Site with AI Agents', level: 1 })
    ).toBeVisible();
  });

  test('displays the post date', async ({ page }) => {
    await expect(page.getByText('April 8, 2026')).toBeVisible();
  });

  test('displays tags', async ({ page }) => {
    await expect(page.getByText('ai').first()).toBeVisible();
    await expect(page.getByText('web-development').first()).toBeVisible();
  });

  test('renders the post content with section headings', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'The Original Plan' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'What Actually Happened' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'The Pivot' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'What I Learned' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'The Technical Details' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Looking Ahead' })).toBeVisible();
  });

  test('has "Back to all posts" link that navigates to blog listing', async ({ page }) => {
    const backLink = page.getByRole('link', { name: 'Back to all posts' }).first();
    await expect(backLink).toBeVisible();
    await backLink.click();
    await expect(page).toHaveURL('/blog');
  });

  test('blog nav tab is active on post page', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    const blogLink = page
      .locator('nav[aria-label="Main navigation"]')
      .getByRole('link', { name: 'Blog' });
    await expect(blogLink).toHaveAttribute('aria-current', 'page');
  });

  test('article element has aria-labelledby pointing to title', async ({ page }) => {
    const article = page.locator('article[aria-labelledby="post-title"]');
    await expect(article).toBeVisible();
    const h1 = article.locator('#post-title');
    await expect(h1).toBeVisible();
  });

  test('og:type meta tag is set to article', async ({ page }) => {
    const ogType = page.locator('meta[property="og:type"]');
    await expect(ogType).toHaveAttribute('content', 'article');
  });
});

test.describe('Blog 404 handling', () => {
  test('unknown slug returns 404', async ({ page }) => {
    const response = await page.request.get('/blog/nonexistent-post');
    expect(response.status()).toBe(404);
  });
});
