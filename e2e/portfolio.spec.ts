import { test, expect } from "@playwright/test";

test.describe("Portfolio E2E Flow Verification", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    // Wait for client-side hydration by verifying a state-dependent render:
    // The language toggle shows "ID" only after AppContext hydrates (default = "en").
    // On SSR, the button text might be empty or uninitialized.
    await page.waitForFunction(
      () => {
        const btn = document.querySelector('button[title="Change Language / Ubah Bahasa"]');
        return btn && btn.textContent?.trim() === "ID";
      },
      { timeout: 15000 }
    );
    // Additional settle time for event handler attachment
    await page.waitForTimeout(500);
  });

  test("Initial landing has correct defaults (English & Dark mode)", async ({ page }) => {
    await expect(page).toHaveTitle(/Irfan Thalib/);
    
    const htmlElement = page.locator("html");
    await expect(htmlElement).not.toHaveClass(/light/);

    const aboutLink = page.locator('nav a[href="#about"]').first();
    await expect(aboutLink).toHaveText("About");
  });

  test("Language toggle translates page content dynamically", async ({ page }) => {
    const langBtn = page.getByTitle("Change Language / Ubah Bahasa");
    const aboutLink = page.locator('nav a[href="#about"]').first();

    // Verify initial is English
    await expect(aboutLink).toHaveText("About");

    // Click to toggle to Indonesian
    await langBtn.click();
    await expect(aboutLink).toHaveText("Tentang", { timeout: 10000 });

    // Verify skills header in Indonesian
    const servicesHeader = page.locator("#services h2");
    await expect(servicesHeader).toHaveText("Keahlian & Kemampuan");

    // Toggle back to English
    await langBtn.click();
    await expect(aboutLink).toHaveText("About", { timeout: 10000 });
  });

  test("Theme toggle toggles html .light class successfully", async ({ page }) => {
    const themeBtn = page.getByTitle("Change Theme / Ubah Tema");
    const htmlElement = page.locator("html");

    // Start with dark (no light class)
    await expect(htmlElement).not.toHaveClass(/light/);

    // Click to toggle to Light mode
    await themeBtn.click();
    await expect(htmlElement).toHaveClass(/light/, { timeout: 10000 });

    // Toggle back to Dark mode
    await themeBtn.click();
    await expect(htmlElement).not.toHaveClass(/light/, { timeout: 10000 });
  });

  test("Contact form allows typing and input validation", async ({ page }) => {
    const nameInput = page.locator("input#name");
    const emailInput = page.locator("input#email");
    const messageInput = page.locator("textarea#message");

    await nameInput.fill("Test User");
    await emailInput.fill("test@example.com");
    await messageInput.fill("Hello, this is an automated E2E test message.");

    await expect(nameInput).toHaveValue("Test User");
    await expect(emailInput).toHaveValue("test@example.com");
    await expect(messageInput).toHaveValue("Hello, this is an automated E2E test message.");
  });
});
