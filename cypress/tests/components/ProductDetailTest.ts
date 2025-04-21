import ProductDetailsComponent from "../../models/components/ProductDetailComponent";
import { HomePageAPI } from "../../support/HomePageAPI";

describe("Product detail test ", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("test product detail", () => {
    HomePageAPI.getHomePageProducts().then((apiproduct) => {
      const randomProduct =
        apiproduct[Math.floor(Math.random() * apiproduct.length)];
        const randomProductTitle = randomProduct.title.trim().replace("\n","")
      cy.contains(randomProductTitle).click();
     /*  cy.wait(2000); */
      const productDetails = new ProductDetailsComponent()
      productDetails.getProductName().should('contain',randomProductTitle)
      productDetails.getProductPrice().should('contain.text',randomProduct.price)

      
    });
  });

});
