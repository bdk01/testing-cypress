"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AmazonHomePage_1 = require("../../models/components/cpnbk/AmazonHomePage");
var AmazonSearchResult_1 = require("../../models/components/cpnbk/AmazonSearchResult");
describe('Amazon', function () {
    it('should able to search', function () {
        cy.visit("https://www.amazon.com/");
        var SEARCH_TEXT = "table";
        var AmHomePage = new AmazonHomePage_1.default();
        AmHomePage.searchTxtBxElem.type(SEARCH_TEXT);
        AmHomePage.searchBtnElem.click();
        var AmazSearchResult = new AmazonSearchResult_1.default();
        AmazSearchResult.searchItemElemList.should("not.have.length", 0);
    });
});
