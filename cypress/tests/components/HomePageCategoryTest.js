"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DemoBlazePage_1 = require("../../models/components/cpnbk/DemoBlazePage");
var HomePageAPI_1 = require("../../support/HomePageAPI");
describe("homepage category component test", function () {
    beforeEach(function () {
        cy.visit("/");
        HomePageAPI_1.HomePageAPI._waitForEntriesRequest();
    });
    var verifyCategoryFilterBy = function (productCate) {
        cy.intercept("/bycat").as("cats");
        cy.get("[onclick=\"byCat('".concat(productCate, "')\"]")).click({ force: true });
        cy.wait("@cats");
        cy.request({
            method: "POST",
            url: "https://api.demoblaze.com/bycat",
            body: {
                cat: "".concat(productCate),
            },
        }).then(function (res) {
            cy.log(JSON.stringify(res));
            var apiProductData = res.body.Items.map(function (item) {
                return {
                    itemName: item.title.replace("\n", ""),
                    itemPrice: "$".concat(item.price),
                };
            });
            new DemoBlazePage_1.default().getAllCardData().then(function (allCardData) {
                cy.wrap("").then(function () {
                    expect(allCardData).to.be.eql(apiProductData);
                    /* cy.log(JSON.stringify(ProductData)) */
                });
            });
        });
    };
    var SCENARIOS = [
        'phone', 'notebook', 'monitor'
    ];
    SCENARIOS.forEach(function (product) {
        it("test ".concat(product, " cate"), function () {
            verifyCategoryFilterBy(product);
        });
    });
});
