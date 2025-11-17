import { test, expect } from "@playwright/test";

test.describe("Campfire Design System", () => {
  test("renders navigation and hero content", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: /Campfire Design System/i }),
    ).toBeVisible();

    const nav = page.getByRole("navigation");
    await expect(nav.getByRole("button", { name: /Design Tokens/i })).toBeVisible();
    await expect(nav.getByRole("button", { name: /Components/i })).toBeVisible();
    await expect(nav.getByRole("button", { name: /Testing & Examples/i })).toBeVisible();
  });

  test("theme toggle switches modes", async ({ page }) => {
    await page.goto("/");

    const toggle = page.getByRole("button", { name: /dark|light/i });
    await expect(toggle).toBeVisible();
    const body = page.locator("html");

    await toggle.click();
    await expect(body).toHaveClass(/dark/);
  });
});
