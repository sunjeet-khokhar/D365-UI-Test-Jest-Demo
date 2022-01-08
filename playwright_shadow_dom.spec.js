// To set up ---> 
//npm i -D @playwright/test
// npx playwright install
// To run -- npx playwright test playwright_dynamics.spec.js --headed

const { chromium } = require('playwright');
const {test, expect} = require('@playwright/test');

test.describe('Shadow DOM example',async () => {


  test('interraction with drop down in shadow DOM',async () => {
    const browser = await chromium.launch({
      headless: false
    });
    const context = await browser.newContext();
  
    // Open new page
    const page = await context.newPage();

    await page.goto('https://bugs.chromium.org/p/chromium/issues/list');

    const drop_down = await page.$('[id="can"]');
    const availableOptions = await drop_down.$$('option');
    for (let i = 0; i < availableOptions.length; i++) {
        console.log(await availableOptions[i].innerText());
    }
  
    // Close page
    await page.close();
  
    // ---------------------
    await context.close();
    await browser.close();
    
});


});



  