const puppeteer = require('puppeteer');

async function openBrowserPage() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    return { page, browser }
}

module.exports = openBrowserPage;
