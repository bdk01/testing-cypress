"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SRHomePage = void 0;
var SRHomePage = /** @class */ (function () {
    function SRHomePage() {
    }
    SRHomePage.prototype.getHeroComTitle = function () {
        var title = '';
        cy.get(".showcase__hero .card__title").then(function ($title) {
            title = $title.text().trim();
        });
        return new Cypress.Promise(function (resolve, reject) {
            cy.wrap('').then(function () { return resolve(title); }); /* 'wrap empty */
        });
    };
    return SRHomePage;
}());
exports.SRHomePage = SRHomePage;
