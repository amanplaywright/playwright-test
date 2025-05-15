import{test,expect} from'@playwright/test';
test("failed test case",async({page})=>{

await page.goto("url.com");
expect(page.locator("//await")).toHaveAttribute("na");



})