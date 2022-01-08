// To set up ---> 
//npm i -D @playwright/test
// npx playwright install
// To run -- npx playwright test playwright_dynamics.spec.js --headed

const { chromium } = require('playwright');
const {test, expect} = require('@playwright/test');

test.describe('Dynamics login and goto sales',async () => {

  test.setTimeout(60000)

  test('navigate & verify home page title',async () => {
    const browser = await chromium.launch({
      headless: false
    });
    const context = await browser.newContext();
  
    // Open new page
    const page = await context.newPage();
  
    // Go to https://login.microsoftonline.com/6c912b97-d9f0-4472-a96a-d82de2f1d438/oauth2/authorize?client_id=00000007-0000-0000-c000-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid+profile&state=OpenIdConnect.AuthenticationProperties%3dMAAAAM7OKv1msxHsnwb5tGi_BpgVGHrE3OzGx4HyNCYzXxYxQVRAWkHM9sxfR-Q3csvDEAEAAAABAAAACS5yZWRpcmVjdCVodHRwczovL29yZ2NjNDc3MmE0LmNybS5keW5hbWljcy5jb20v%26RedirectTo%3dMAAAAM7OKv1msxHsnwb5tGi%252fBph1cidH%252bRZ5yzaoIO94LbXQPCW4euc%252bHn0NdPANkpZp1Wh0dHBzOi8vb3JnY2M0NzcyYTQuY3JtLmR5bmFtaWNzLmNvbS8%253d%26RedirectToForMcas%3dhttps%253a%252f%252forgcc4772a4.crm.dynamics.com%252f&nonce=637768795939392124.M2E1OTAzYjItNzk5Zi00YjU0LWFmZjUtODQwM2U5YWExMWQwM2FlZTI4ZjEtOTYwMC00YzMyLWE3YzAtNjAzNzc2ZjA2MDQ0&redirect_uri=https%3a%2f%2fby2--namcrmlivesg618.crm.dynamics.com%2f&max_age=86400
    await page.goto('https://login.microsoftonline.com/6c912b97-d9f0-4472-a96a-d82de2f1d438/oauth2/authorize?client_id=00000007-0000-0000-c000-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid+profile&state=OpenIdConnect.AuthenticationProperties%3dMAAAAM7OKv1msxHsnwb5tGi_BpgVGHrE3OzGx4HyNCYzXxYxQVRAWkHM9sxfR-Q3csvDEAEAAAABAAAACS5yZWRpcmVjdCVodHRwczovL29yZ2NjNDc3MmE0LmNybS5keW5hbWljcy5jb20v%26RedirectTo%3dMAAAAM7OKv1msxHsnwb5tGi%252fBph1cidH%252bRZ5yzaoIO94LbXQPCW4euc%252bHn0NdPANkpZp1Wh0dHBzOi8vb3JnY2M0NzcyYTQuY3JtLmR5bmFtaWNzLmNvbS8%253d%26RedirectToForMcas%3dhttps%253a%252f%252forgcc4772a4.crm.dynamics.com%252f&nonce=637768795939392124.M2E1OTAzYjItNzk5Zi00YjU0LWFmZjUtODQwM2U5YWExMWQwM2FlZTI4ZjEtOTYwMC00YzMyLWE3YzAtNjAzNzc2ZjA2MDQ0&redirect_uri=https%3a%2f%2fby2--namcrmlivesg618.crm.dynamics.com%2f&max_age=86400');
  
    // Click [placeholder="Email address, phone number or Skype"]
    await page.click('[placeholder="Email address, phone number or Skype"]');
  
    // Fill [placeholder="Email address, phone number or Skype"]
    await page.fill('input[name="loginfmt"]', 'ss@trvialsearch.onmicrosoft.com');
  
    // Click text=Next
    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://login.microsoftonline.com/6c912b97-d9f0-4472-a96a-d82de2f1d438/oauth2/authorize?client_id=00000007-0000-0000-c000-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid+profile&state=OpenIdConnect.AuthenticationProperties%3dMAAAAM7OKv1msxHsnwb5tGi_BpgVGHrE3OzGx4HyNCYzXxYxQVRAWkHM9sxfR-Q3csvDEAEAAAABAAAACS5yZWRpcmVjdCVodHRwczovL29yZ2NjNDc3MmE0LmNybS5keW5hbWljcy5jb20v%26RedirectTo%3dMAAAAM7OKv1msxHsnwb5tGi%252fBph1cidH%252bRZ5yzaoIO94LbXQPCW4euc%252bHn0NdPANkpZp1Wh0dHBzOi8vb3JnY2M0NzcyYTQuY3JtLmR5bmFtaWNzLmNvbS8%253d%26RedirectToForMcas%3dhttps%253a%252f%252forgcc4772a4.crm.dynamics.com%252f&nonce=637768795939392124.M2E1OTAzYjItNzk5Zi00YjU0LWFmZjUtODQwM2U5YWExMWQwM2FlZTI4ZjEtOTYwMC00YzMyLWE3YzAtNjAzNzc2ZjA2MDQ0&redirect_uri=https%3a%2f%2fby2--namcrmlivesg618.crm.dynamics.com%2f&max_age=86400' }*/),
      page.click('text=Next')
    ]);
  
    // Fill input[name="passwd"]
    await Promise.all([
    //page.waitForNavigation(/*{ url: 'https://login.microsoftonline.com/6c912b97-d9f0-4472-a96a-d82de2f1d438/oauth2/authorize?client_id=00000007-0000-0000-c000-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid+profile&state=OpenIdConnect.AuthenticationProperties%3dMAAAAM7OKv1msxHsnwb5tGi_BpgVGHrE3OzGx4HyNCYzXxYxQVRAWkHM9sxfR-Q3csvDEAEAAAABAAAACS5yZWRpcmVjdCVodHRwczovL29yZ2NjNDc3MmE0LmNybS5keW5hbWljcy5jb20v%26RedirectTo%3dMAAAAM7OKv1msxHsnwb5tGi%252fBph1cidH%252bRZ5yzaoIO94LbXQPCW4euc%252bHn0NdPANkpZp1Wh0dHBzOi8vb3JnY2M0NzcyYTQuY3JtLmR5bmFtaWNzLmNvbS8%253d%26RedirectToForMcas%3dhttps%253a%252f%252forgcc4772a4.crm.dynamics.com%252f&nonce=637768795939392124.M2E1OTAzYjItNzk5Zi00YjU0LWFmZjUtODQwM2U5YWExMWQwM2FlZTI4ZjEtOTYwMC00YzMyLWE3YzAtNjAzNzc2ZjA2MDQ0&redirect_uri=https%3a%2f%2fby2--namcrmlivesg618.crm.dynamics.com%2f&max_age=86400' }*/),
    //page.click('input[name="passwd"]'),
    await page.click('[placeholder="Password"]'),
    page.fill('input[name="passwd"]', '12345')
    ]);
  
    // Click text=Sign in
    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://login.microsoftonline.com/6c912b97-d9f0-4472-a96a-d82de2f1d438/login' }*/),
      page.click('text=Sign in')
    ]);
  
    // Click text=Skip for now (14 days until this is required)
    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://login.microsoftonline.com/6c912b97-d9f0-4472-a96a-d82de2f1d438/resume?ctx=rQIIAZVTPWzbRhQ2LflHQdIYRodsCYI4CNpSJo-kKBowEIqWRTkiaVGyaXIxyCMlkRJ5DHmWRA5BkC4dMwbJUjSZ0p-h6FB0ytoszdoCXTIFmZJOHUs1CFCgyJD3Dh_e3Xv48OHuu89KdJXeuUa9C55c4DuA76v3kWye26iMP23cePht66cvfg2_32g9eUpURxjH6c72tpMBkozsECbhxJ966bBG16vFpupmxakP0ypE4fbPBPGCIF4RxNPltMbwfK3OC5zAFAlowFYV0KS1vpibQRur-ZizfIoygyOqY-yHVnCEtb3uTAFHnGk054qxqPcnVr_NWkETa31zpkjFfK5kHaPJmLmI1UDM1RwCKxCBstel_li-qIlneAQWgBI_9_5argxQEp7GKMUPS1-WtNiL2q6EosiDuLoY8yLsQxv7KDpMUOwl2PfSXUUsQuG1W1M6TOdyGs0cDrf800Y8PG7JSZPR8taclTNVMvOTuTnvHuuiMZYVIZ0PdLLLwHS61xSbC5bGAqQel1mGHsPwOHClY-TK-gzmaNoBQmYBNVD3IKOETaoTqpnT48aewY0cYxLAjAscQE2v657rJ4XkPvqQti0waMQjGvquvAUc3eKy3EZtTWA7zkn3UDJY7wwWDTmiVPdQVMexFdPGiHLlRq759anDHEQmUKjiOjOz3z0zmQPcCXXOCfexbah5oWzq9OpbjPsfLfsoUaCd7v5rki3GLjQUCyVDCFmeBzb7P4cU7R9L12pQoIEj8KQrDCiSZXlA2kLNJt06cD0woF2WqT8vfVI8R-S7V-IEDfyJ97J0OU1v4mTq25PUsxM4qqKo4E1QigZ4Qf6sfPfxyosy8bp8nlrZWV8_t3Hx0tqVpb_LxDcrhbu_-_rBnbWrP0j3_iQ33552ys9XtqNO-4DlJy1Po5We3TtEZ229PuwnwyRr6RPJdaXR7Vl4C35-0t5lduj7q8T91dU3q8tfrRG_VD7yb9w7f2F9abNSCR9RR8Zvv8vPLiz9Aw2&flowtoken=AQABAAEAAAD--DLA3VO7QrddgJg7WevrpaR0qriDbiafh5Q5k-5sp5acpKeCiGM5Xq6eLubwBlz9F8EaG4aRyXIIeiFxdoObTNul182BvE20P9p8bEWdrJxLeL2MltZndEOiV4BG1tiDhOIJJUz44_hLQE1gSdigw879q9cuhFP_YXtfecgWIvzx9Qu3zCLR3qI27Elvtuq_vD-6N5G7Ka6I7J-ulJR-BrP3_xHFzR1aHXN2rzMJpKgSVj2i2I46I-oo0WYjYB1GZFqkEo1LpMtAJY1Ovbc6JlE78gY1gvuznh1a-rFekggCpFgzXXnijdDIVaTuxYW-PBjg9tcbpc-IaqDxyCuLtTVwbnA5osskyFQje2jqhrooIVBW7px7fxqy6ZByG_obRkRaBDae4rdSBiYU2a-1dYuejaYcEAw1qSuZHTG8rxIS-u5vDblXPUJqqwyEOQM_crdqARtF2JH2-y15b8ZFvGoHfOh7YhEpqJxgU2i0KkPZgFrDWODzRfeJTs9bIUXSCELHcSZByIL40UMz5pOQ8Du4lLLNQhFYAemNlCx749-nQj4EFwAedMvp3dYj9hLhvBlvR4NRpgmyw7gMO9p9BBtrsXdye-x7M2Sl-kA-g5gX3-DaEsE_wSuZ5ko40Zpq4Ki1hKf_RXW-yd78m0IgzwqgHC6V5cxttoqgilj5_rO60RcTAjEKogZIt2QuDiv94pKGkyYxcnM6XUXpAQzoIAA&skipmfaregistration=1' }*/),
      page.click('text=Skip for now (14 days until this is required)')
    ]);
  
    // Click text=No
    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://orgcc4772a4.crm.dynamics.com/' }*/),
      page.click('text=No')
    ]);
  
    // Go to https://orgcc4772a4.crm.dynamics.com/main.aspx?forceUCI=1&pagetype=apps
    await page.goto('https://orgcc4772a4.crm.dynamics.com/main.aspx?forceUCI=1&pagetype=apps');

    // Click text=Skip for now (14 days until this is required)
    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://login.microsoftonline.com/6c912b97-d9f0-4472-a96a-d82de2f1d438/resume?ctx=rQIIAZVTPWzbRhQ2LflHQdIYRodsCYI4CNpSJo-kKBowEIqWRTkiaVGyaXIxyCMlkRJ5DHmWRA5BkC4dMwbJUjSZ0p-h6FB0ytoszdoCXTIFmZJOHUs1CFCgyJD3Dh_e3Xv48OHuu89KdJXeuUa9C55c4DuA76v3kWye26iMP23cePht66cvfg2_32g9eUpURxjH6c72tpMBkozsECbhxJ966bBG16vFpupmxakP0ypE4fbPBPGCIF4RxNPltMbwfK3OC5zAFAlowFYV0KS1vpibQRur-ZizfIoygyOqY-yHVnCEtb3uTAFHnGk054qxqPcnVr_NWkETa31zpkjFfK5kHaPJmLmI1UDM1RwCKxCBstel_li-qIlneAQWgBI_9_5argxQEp7GKMUPS1-WtNiL2q6EosiDuLoY8yLsQxv7KDpMUOwl2PfSXUUsQuG1W1M6TOdyGs0cDrf800Y8PG7JSZPR8taclTNVMvOTuTnvHuuiMZYVIZ0PdLLLwHS61xSbC5bGAqQel1mGHsPwOHClY-TK-gzmaNoBQmYBNVD3IKOETaoTqpnT48aewY0cYxLAjAscQE2v657rJ4XkPvqQti0waMQjGvquvAUc3eKy3EZtTWA7zkn3UDJY7wwWDTmiVPdQVMexFdPGiHLlRq759anDHEQmUKjiOjOz3z0zmQPcCXXOCfexbah5oWzq9OpbjPsfLfsoUaCd7v5rki3GLjQUCyVDCFmeBzb7P4cU7R9L12pQoIEj8KQrDCiSZXlA2kLNJt06cD0woF2WqT8vfVI8R-S7V-IEDfyJ97J0OU1v4mTq25PUsxM4qqKo4E1QigZ4Qf6sfPfxyosy8bp8nlrZWV8_t3Hx0tqVpb_LxDcrhbu_-_rBnbWrP0j3_iQ33552ys9XtqNO-4DlJy1Po5We3TtEZ229PuwnwyRr6RPJdaXR7Vl4C35-0t5lduj7q8T91dU3q8tfrRG_VD7yb9w7f2F9abNSCR9RR8Zvv8vPLiz9Aw2&flowtoken=AQABAAEAAAD--DLA3VO7QrddgJg7WevrpaR0qriDbiafh5Q5k-5sp5acpKeCiGM5Xq6eLubwBlz9F8EaG4aRyXIIeiFxdoObTNul182BvE20P9p8bEWdrJxLeL2MltZndEOiV4BG1tiDhOIJJUz44_hLQE1gSdigw879q9cuhFP_YXtfecgWIvzx9Qu3zCLR3qI27Elvtuq_vD-6N5G7Ka6I7J-ulJR-BrP3_xHFzR1aHXN2rzMJpKgSVj2i2I46I-oo0WYjYB1GZFqkEo1LpMtAJY1Ovbc6JlE78gY1gvuznh1a-rFekggCpFgzXXnijdDIVaTuxYW-PBjg9tcbpc-IaqDxyCuLtTVwbnA5osskyFQje2jqhrooIVBW7px7fxqy6ZByG_obRkRaBDae4rdSBiYU2a-1dYuejaYcEAw1qSuZHTG8rxIS-u5vDblXPUJqqwyEOQM_crdqARtF2JH2-y15b8ZFvGoHfOh7YhEpqJxgU2i0KkPZgFrDWODzRfeJTs9bIUXSCELHcSZByIL40UMz5pOQ8Du4lLLNQhFYAemNlCx749-nQj4EFwAedMvp3dYj9hLhvBlvR4NRpgmyw7gMO9p9BBtrsXdye-x7M2Sl-kA-g5gX3-DaEsE_wSuZ5ko40Zpq4Ki1hKf_RXW-yd78m0IgzwqgHC6V5cxttoqgilj5_rO60RcTAjEKogZIt2QuDiv94pKGkyYxcnM6XUXpAQzoIAA&skipmfaregistration=1' }*/),
      page.click('text=Skip for now (14 days until this is required)')
    ]);
  
    // Click text=No
    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://orgcc4772a4.crm.dynamics.com/' }*/),
      page.click('text=No')
    ]);

    
  
    // Click [placeholder="Search my apps..."]
    await page.waitForSelector("iframe[id='AppLandingPage']");
    //Magic bullet ! the frame navigation will fail if we dont wait for load state !
    await page.waitForLoadState();
    
    // Fill [placeholder="Search my apps..."]
    await page.frame({
      name: 'AppLandingPage'
    }).fill("input[id='app-search-input']",'sales hub')
    //.fill('[placeholder="Search my apps..."]', 'sales hub');
    // Click text=Sales Hub
    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://orgcc4772a4.crm.dynamics.com/main.aspx?appid=3b157789-5e5b-ec11-8f8f-002248087922&pagetype=control&controlName=MscrmControls.AcceleratedSales.AnchorShellControl' }*/),
      page.frame({
        name: 'AppLandingPage'
      }).click('text=Sales Hub')
    ]);

    const heading = await page.textContent("[data-id='appBreadCrumbText']");
    //delibrate failed assertion for debugging ;) 
    expect(heading).toBe('Sales Bub');

    // Close page
    await page.close();
  
    // ---------------------
    await context.close();
    await browser.close();
    
});


});



  