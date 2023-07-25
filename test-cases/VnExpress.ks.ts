import katalon from "@katalon-studio/cloud-test";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.openBrowser("https://vnexpress.net/");
  await web.click({
    type: "Web",
    id: "3175d32d-4173-4788-9db6-3f44a40280f5",
    attributes: {
      title: "Thời sự",
      href: "/thoi-su",
      "data-medium": "Menu-ThoiSu",
      "data-itm-source":
        "#vn_source=Home&vn_campaign=Header&vn_medium=Menu-ThoiSu&vn_term=Desktop",
      "data-itm-added": "1",
    },
    childIndex: 1,
    hashes: { "md5.v1": "d4fc362541084517730e27b0f56c948c" },
    name: "a - Thời sự",
    selectors: [
      {
        id: "798965ec-8ee7-40b7-a878-0fb0fa9a2bd6",
        type: "CSS",
        value: '[href="\\/thoi-su"]',
        isDefault: true,
      },
      {
        id: "14ad33d5-be1c-429d-bcc8-6c334c279c1d",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "Thời sự",
    pageUrl: "https://vnexpress.net/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "523310bd-b0f1-4176-802f-879aa5794d29",
    attributes: {
      title: "Góc nhìn",
      href: "/goc-nhin",
      "data-medium": "Menu-GocNhin",
      "data-itm-source":
        "#vn_source=Folder-ThoiSu&vn_campaign=Header&vn_medium=Menu-GocNhin&vn_term=Desktop",
      "data-itm-added": "1",
    },
    childIndex: 1,
    hashes: { "md5.v1": "fc338ebb7804821bb0a3deaf0d9e996b" },
    name: "a - Góc nhìn",
    selectors: [
      {
        id: "94dd0948-83ad-479f-9667-8b4b347e00d1",
        type: "CSS",
        value: '[href="\\/goc-nhin"]',
        isDefault: true,
      },
      {
        id: "7147b54b-4c63-4239-aad3-7ee93366467d",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "Góc nhìn",
    pageUrl: "https://vnexpress.net/thoi-su",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.closeBrowser();
});