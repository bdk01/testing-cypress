import { before, beforeEach } from "mocha";
import DemoPlazePage from "../../models/components/cpnbk/DemoBlazePage";
import { HomePageAPI } from "../../support/HomePageAPI";


describe("Blaze homepage test before", () => {
  let apiProduct;
  before(() => {
    cy.visit("https://demoblaze.com/index.html");

    HomePageAPI.getHomePageProducts().then((entries) => {
      apiProduct = entries;
    });
  });
  it("balze test card", () => {
   let apiItem = apiProduct.map((item) => {
      return {
        itemName: item.title.replace("\n", ""),
        itemPrice: `$${item.price}`,
      };
    });

    new DemoPlazePage().getAllCardData().then((allCardData: any) => {
      cy.wrap("").then(() => {
        expect(allCardData).to.have.deep.eq(apiItem);
     
      });
    });
  });
});
