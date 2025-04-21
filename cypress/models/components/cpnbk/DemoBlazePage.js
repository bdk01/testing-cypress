"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DemoPlazePage = /** @class */ (function () {
    function DemoPlazePage() {
    }
    DemoPlazePage.prototype._getCardDetails = function () {
        var cardData = {};
        cy.get("h4").then(function ($title) { return (cardData.itemName = $title.text().trim()); });
        cy.get("h5").then(function ($price) { return (cardData.itemPrice = $price.text().trim()); });
        return new Cypress.Promise(function (resolve, reject) {
            resolve(cardData); /* 'wrap empty */
        });
    };
    DemoPlazePage.prototype.getAllCardData = function () {
        var _this = this;
        var allCardData = [];
        cy.get(".card").each(function ($card) {
            cy.wrap($card).within(function () {
                _this._getCardDetails().then(function (cardData) { return allCardData.push(cardData); });
            });
        });
        return new Cypress.Promise(function (resolve, reject) {
            cy.wrap("").then(function () { return resolve(allCardData); }); /* 'wrap empty */
        });
    };
    return DemoPlazePage;
}());
exports.default = DemoPlazePage;
