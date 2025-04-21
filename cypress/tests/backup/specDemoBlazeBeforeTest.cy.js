"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var DemoBlazePage_1 = require("../../models/components/cpnbk/DemoBlazePage");
var HomePageAPI_1 = require("../../support/HomePageAPI");
describe("Blaze homepage test before", function () {
    var apiProduct;
    (0, mocha_1.before)(function () {
        cy.visit("https://demoblaze.com/index.html");
        HomePageAPI_1.HomePageAPI.getHomePageProducts().then(function (entries) {
            apiProduct = entries;
        });
    });
    it("balze test card", function () {
        var apiItem = apiProduct.map(function (item) {
            return {
                itemName: item.title.replace("\n", ""),
                itemPrice: "$".concat(item.price),
            };
        });
        new DemoBlazePage_1.default().getAllCardData().then(function (allCardData) {
            cy.wrap("").then(function () {
                expect(allCardData).to.have.deep.eq(apiItem);
            });
        });
    });
});
