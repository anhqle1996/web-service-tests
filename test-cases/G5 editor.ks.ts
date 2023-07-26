import katalon from "@katalon-studio/cloud-test";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.openBrowser(
    "https://testops.qa.katalon.com/team/119/project/113/test-design/test-cases/draft-1690359230742-New-test-case-%287%29/edit?katone_access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhbmgubGVAa2F0YWxvbi5jb20iLCJ1cG4iOiI4MiIsImdyb3VwcyI6WyJVU0VSIl0sInN0YXR1cyI6IlZFUklGSUVEIiwiZ2l2ZW5fbmFtZSI6IkFuaCIsImZhbWlseV9uYW1lIjoiTGUiLCJlbWFpbCI6ImFuaC5sZUBrYXRhbG9uLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJjcmVhdGVkX2F0IjoxNjcwODMyMTM3LCJ1cGRhdGVkX2F0IjoxNjkwMjczNzI5LCJhbXIiOlsicHdkIl0sImlhdCI6MTY5MDI3NzAzNSwiZXhwIjoxNjkwODgxODM1LCJqdGkiOiI4ZDA0MzgxOS1iYTdkLTQzNjYtODQ0MC0yOWRhZWMzZGI1YTUiLCJpc3MiOiJrYXRhbG9uLWF1dGgifQ.M1VLUhcEtEw09_ZEPH4vL8DxNa2cfohypZnBissx09Hm59URfz_FCBBK5fR54dqzQnsRm-jN2rfPxiEqx76ucwfNYJwBB8APzaCSokU8eY5WM-LPX5yMHpQjsUoKbBcyrvn6OnvG6UWj92j-yN9ZEnVSV6wT_nYRnNIRWWB840Q0omTGq-b4UOZUw4RU8ShGgr6K1C-ANF4mQJvL7YFV-tVsTKAVWL0CclwDXxrdsQhzzMwicO5xgQAq9g-JgkvoYFwepEjgG73njX5vUS5AvhYBF9eRjSkLUNsBnsE3kF7x-V-fXQiF9oIGyALIGwa5XdOLdCoMtyryAxFCZKx71Q"
  );
  await web.verifyElementVisible({
    type: "Web",
    id: "6ca15b39-c394-4e09-92da-95b7012ee021",
    attributes: { class: "css-yk6jdo" },
    childIndex: 1,
    hashes: { "md5.v1": "847fd5280550f1e758eeb9a4f07b4c11" },
    name: "span - Open the browser and navigate to 'https://katalon-demo-cura.herokuapp.com'",
    selectors: [
      {
        id: "95975250-2e38-4bf1-9c16-d813169aaad7",
        type: "CSS",
        value: ".css-zkhope div:nth-child(5) span",
        isDefault: true,
      },
      {
        id: "25c8b161-df58-4c4e-8170-73ddbe61265d",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "span",
    text: "Open the browser and navigate to 'https://katalon-demo-cura.herokuapp.com'",
    pageUrl:
      "https://testops.qa.katalon.com/team/119/project/113/test-design/test-cases/draft-1690359230742-New-test-case-%287%29/edit?",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.closeBrowser();
});