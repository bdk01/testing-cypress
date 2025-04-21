"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductDetailComponent_1 = require("../../models/components/ProductDetailComponent");
var HomePageAPI_1 = require("../../support/HomePageAPI");
describe("Product detail test ", function () {
    beforeEach(function () {
        cy.visit("/");
    });
    it("test product detail", function () {
        HomePageAPI_1.HomePageAPI.getHomePageProducts().then(function (apiproduct) {
            var randomProduct = apiproduct[Math.floor(Math.random() * apiproduct.length)];
            var randomProductTitle = randomProduct.title.trim().replace("\n", "");
            cy.contains(randomProductTitle).click();
            /*  cy.wait(2000); */
            var productDetails = new ProductDetailComponent_1.default();
            productDetails.getProductName().should('contain', randomProductTitle);
            productDetails.getProductPrice().should('contain.text', randomProduct.price);
        });
    });
});
