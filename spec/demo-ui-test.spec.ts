import { XrmUiTest } from "d365-ui-test";
import * as fs from "fs";
import * as playwright from "playwright";
import * as path from "path";

const xrmTest = new XrmUiTest();
let browser: playwright.Browser = null;
let context: playwright.BrowserContext = null;
let page: playwright.Page = null;

describe("Basic operations UCI", () => {
    beforeAll(async() => {
        jest.setTimeout(60000);

        await xrmTest.launch("chromium", {
            headless: false,
            args: [
                '--disable-setuid-sandbox',
                '--disable-infobars',
                '--start-fullscreen',
                '--window-position=0,0',
                '--window-size=1920,1080',
                '--user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36"'
            ]
        })
        .then(([b, c, p]) => {
            browser = b;
            context = c;
            page = p;
        });
    });

    test("Start D365", async () => {
        const settingsPath = path.join(__dirname, "../../settings.txt");
        const settingsFound = fs.existsSync(settingsPath);
        const config = settingsFound ? fs.readFileSync(settingsPath, {encoding: "utf-8"}) : `${process.env.D365_UI_TEST_URL ?? process.env.CRM_URL ?? ""},${process.env.D365_UI_TEST_USERNAME ?? process.env.USER_NAME ?? ""},${process.env.D365_UI_TEST_PASSWORD ?? process.env.USER_PASSWORD ?? ""}`;
        
        const [url, user, password] = config.split(",");
        //await xrmTest.open(url, { userName: user, password: password});
        const page = await xrmTest.open('https://orgcc4772a4.crm.dynamics.com', { userName: 'ss@trvialsearch.onmicrosoft.com', password: 'Yorks64&*NZY', passwordFieldSelector: "#password_input", userNameFieldSelector: "#userName_input" });
        //const page = await xrmTest.open(process.env.CRM_URL, { userName: process.env.CRM_USER_NAME, password: process.env.CRM_PASSWORD, passwordFieldSelector: "#password_input", userNameFieldSelector: "#userName_input" });
    });

    test("Open new account form", async () => {
        await xrmTest.Navigation.openCreateForm("account");
    });

    afterAll(() => {
        return xrmTest.close();
    });
});
