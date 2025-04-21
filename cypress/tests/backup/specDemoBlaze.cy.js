"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DemoBlazePage_1 = require("../../models/components/cpnbk/DemoBlazePage");
var PRODUCT_ALL = [
    { "itemName": "Samsung galaxy s6", "itemPrice": "$360" },
    { "itemName": "Nokia lumia 1520", "itemPrice": "$820" },
    { "itemName": "Nexus 6", "itemPrice": "$650" },
    { "itemName": "Samsung galaxy s7", "itemPrice": "$800" },
    { "itemName": "Iphone 6 32gb", "itemPrice": "$790" },
    { "itemName": "Sony xperia z5", "itemPrice": "$320" },
    { "itemName": "HTC One M9", "itemPrice": "$700" },
    { "itemName": "Sony vaio i5", "itemPrice": "$790" },
    { "itemName": "Sony vaio i7", "itemPrice": "$790" }
];
describe("Blaze homepage", function () {
    /*  it("balze test card", () => {
    
       cy.visit("https://demoblaze.com/index.html");
       cy.log(products as any)
       new DemoPlazePage().getAllCardData().then((allCardData: any) => {
         cy.wrap("").then(() => {
           expect(allCardData).to.have.deep.eq(PRODUCT_ALL)
         });
       });
     }); */
    it.only("balze test card intercept", function () {
        cy.visit("https://demoblaze.com/index.html");
        cy.intercept("/entries").as('entries');
        cy.wait('@entries');
        cy.get('@entries').then(function (entries) {
            var apiItem = entries.response.body.Items;
            apiItem = apiItem.map(function (item) {
                return {
                    itemName: item.title.replace('\n', ''),
                    itemPrice: "$".concat(item.price)
                };
            });
            cy.log(JSON.stringify(apiItem));
            new DemoBlazePage_1.default().getAllCardData().then(function (allCardData) {
                cy.wrap("").then(function () {
                    expect(allCardData).to.have.deep.eq(apiItem);
                    /* cy.log(JSON.stringify(ProductData)) */
                });
            });
        });
    });
});
