"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SEARCH_TXT_BX_SEL = "#twotabsearchtextbox";
var SEARCH_BTN_SEL = "#nav-search-submit-button";
var AmazonHomePage = /** @class */ (function () {
    function AmazonHomePage() {
    }
    Object.defineProperty(AmazonHomePage.prototype, "searchTxtBxElem", {
        get: function () {
            return cy.get(SEARCH_TXT_BX_SEL);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmazonHomePage.prototype, "searchBtnElem", {
        get: function () {
            return cy.get(SEARCH_BTN_SEL);
        },
        enumerable: false,
        configurable: true
    });
    return AmazonHomePage;
}());
exports.default = AmazonHomePage;
