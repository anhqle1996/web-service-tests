import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser("https://time.is/");
  await web.click({
    type: "Web",
    id: "71040929-ac9c-43ec-83a4-4e0ea8b4a93f",
    attributes: {},
    childIndex: 1,
    hashes: { "md5.v1": "9af5d1e2a233d2c2e6070c032aee9dfa" },
    name: "div - ",
    selectors: [
      {
        id: "b5cfb5ba-128e-4b36-a96e-e2ccf5d30561",
        type: "CSS",
        value: '[href="\\#nav"] div:nth-child(1)',
        isDefault: true,
      },
      {
        id: "ac7d500b-4d3b-4186-b350-29ac9bb7462f",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "div",
    text: "",
    pageUrl: "https://time.is/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "b2a8b377-14ff-441c-b788-8416d00602f6",
    attributes: { href: "/UTC" },
    childIndex: 1,
    hashes: { "md5.v1": "7ecdcfc86c43bf65f2dda6bfcb52f519" },
    name: "a - UTC",
    selectors: [
      {
        id: "e894b950-329d-4565-869f-d70d99f3a420",
        type: "CSS",
        value: '[href="\\/UTC"]',
        isDefault: true,
      },
      {
        id: "7815247d-e17c-4614-b291-9d4b6e830179",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "UTC",
    pageUrl: "https://time.is/",
    parentIframe: null,
    shadowRoot: null,
  });
});