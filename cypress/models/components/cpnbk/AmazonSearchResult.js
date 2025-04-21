"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SEARCH_RESULT_ITEM_SEL = 'div[cel_widget_id^="MAIN-SEARCH_RESULTS"]';
var AmazonSearchResultPage = /** @class */ (function () {
    function AmazonSearchResultPage() {
    }
    Object.defineProperty(AmazonSearchResultPage.prototype, "searchItemElemList", {
        get: function () {
            return cy.get(SEARCH_RESULT_ITEM_SEL);
        },
        enumerable: false,
        configurable: true
    });
    return AmazonSearchResultPage;
}());
exports.default = AmazonSearchResultPage;
