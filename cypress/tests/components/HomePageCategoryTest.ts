import DemoPlazePage from "../../models/components/cpnbk/DemoBlazePage";
import { HomePageAPI } from "../../support/HomePageAPI";

describe("homepage category component test", () => {
  beforeEach(() => {
    cy.visit("/");
    HomePageAPI._waitForEntriesRequest();
  });
  const verifyCategoryFilterBy = (productCate) => {
    cy.intercept("/bycat").as("cats");
    cy.get(`[onclick="byCat(\'${productCate}\')"]`).click({ force: true });
    cy.wait("@cats");
    cy.request({
      method: "POST",
      url: "https://api.demoblaze.com/bycat",
      body: {
        cat: `${productCate}`,
      },
    }).then((res) => {
      cy.log(JSON.stringify(res));
      let apiProductData = res.body.Items.map((item) => {
        return {
          itemName: item.title.replace("\n", ""),
          itemPrice: `$${item.price}`,
        };
      });
      new DemoPlazePage().getAllCardData().then((allCardData: any) => {
        cy.wrap("").then(() => {
          expect(allCardData).to.be.eql(apiProductData);
          /* cy.log(JSON.stringify(ProductData)) */
        });
      });
    });
  };
  const SCENARIOS = [
    'phone','notebook','monitor'
  ]
  SCENARIOS.forEach(product=>{
    it(`test ${product} cate`, () => {
        verifyCategoryFilterBy(product);
      });
  })
  
 
});
