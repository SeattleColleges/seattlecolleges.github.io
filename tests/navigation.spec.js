import { test, expect } from '@playwright/test';

test.describe('Top-level navigation', () => {
    const base = 'http://localhost:3000';

    const pages = [
        { name: 'About', path: '#/About' },
        { name: 'Portfolio', path: '#/Portfolio' }
    ];

    test.beforeEach(async ({ page }) => {
        await page.goto(base);
    });

    for (const pageInfo of pages) {
        test(`navigates to ${pageInfo.name}`, async ({ page }) => {
            // Click ONLY the top navbar link
            await page
                .locator('.navbar')
                .first()
                .getByRole('link', { name: pageInfo.name })
                .click();

            // Wait for hash-based navigation
            await page.waitForURL(`${base}/${pageInfo.path}`);

            // Assert URL
            await expect(page).toHaveURL(`${base}/${pageInfo.path}`);

            // Assert page content
            await expect(page.locator('h1')).toBeVisible();
        });
    }
});
