import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from './world';

Given('I am on the Pokémon search page', async function () {
  await page.goto('http://localhost:5173');
});

When('I enter {string} in the search input', async function (pokemonName: string) {
  await page.fill('input[placeholder="Enter Pokémon name"]', pokemonName);
});

When('I click the search button', async function () {
  await page.click('button:has-text("Search")');
});

Then('I should see the Pokémon name {string}', async function (pokemonName: string) {
  await expect(page.locator('h2')).toHaveText(pokemonName, { ignoreCase: true });
});

Then('I should see the Pokémon image', async function () {
  await expect(page.locator('.pokemon-result img')).toBeVisible();
});

Then('I should see an error message {string}', async function (errorMessage: string) {
  await expect(page.locator('.error')).toHaveText(errorMessage);
});