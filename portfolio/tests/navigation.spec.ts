import { test, expect } from '@playwright/test';

/**
 * Navigation E2E tests (desktop viewport).
 * Verifies all nav links navigate correctly, active tab highlighting,
 * and the logo link.
 */
test.describe('Navigation (desktop)', () => {
  // Verify each nav link routes to the correct URL
  const navRoutes = [
    { label: 'Home', href: '/', currentPage: 'home' },
    { label: 'Portfolio', href: '/portfolio', currentPage: 'portfolio' },
    { label: 'Work Accomplishments', href: '/work-accomplishments', currentPage: 'work-accomplishments' },
    { label: 'History', href: '/history', currentPage: 'history' },
    { label: 'Blog', href: '/blog', currentPage: 'blog' },
  ];

  for (const route of navRoutes) {
    test(`clicking "${route.label}" navigates to ${route.href}`, async ({ page }) => {
      await page.goto('/');
      // Desktop nav is visible at md+ breakpoints; force viewport to desktop
      await page.setViewportSize({ width: 1280, height: 800 });

      const navLink = page.locator('nav[aria-label="Main navigation"]').getByRole('link', {
        name: route.label,
      });
      await navLink.click();
      await expect(page).toHaveURL(route.href);
    });
  }

  for (const route of navRoutes) {
    test(`active tab is highlighted when on "${route.label}" page`, async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto(route.href);

      // The active link carries aria-current="page" per WCAG navigation pattern
      const activeLink = page
        .locator('nav[aria-label="Main navigation"]')
        .getByRole('link', { name: route.label });
      await expect(activeLink).toHaveAttribute('aria-current', 'page');

      // And the active link's styling class includes the red border
      await expect(activeLink).toHaveClass(/border-red-600/);
    });
  }

  test('logo link navigates to homepage', async ({ page }) => {
    await page.goto('/history');
    const logoLink = page.getByRole('link', { name: 'Graham Nessler - Home' });
    await expect(logoLink).toBeVisible();
    await logoLink.click();
    await expect(page).toHaveURL('/');
  });

  test('inactive nav links do NOT carry aria-current="page"', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');

    const portfolioLink = page
      .locator('nav[aria-label="Main navigation"]')
      .getByRole('link', { name: 'Portfolio' });
    // Should not have aria-current set
    await expect(portfolioLink).not.toHaveAttribute('aria-current', 'page');
  });
});
