// This example is relevant for Puppeteer only!
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: false });

const page = await browser.newPage();
await page.goto('https://google.com/');

await page.click('button + button');

await page.type('input[title="Search"]', 'hello world');
await page.keyboard.press('Enter');

// Wait for the element to be present on the page prior to clicking it
await page.waitForSelector('.g a');
await page.click('.g a');

await page.waitForTimeout(10000)
await browser.close();