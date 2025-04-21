"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        var _this = this;
        this.brandLogo = function () {
            return cy.get("#nava");
        };
        this.brandLogoImg = function () {
            return cy.get("#nava img");
        };
        this.headerMenuItemList = function () {
            return cy.get(".nav-item a");
        };
        this.getLoginLink = function () {
            return cy.get('#login2');
        };
        this.getLoggedUsername = function () {
            return cy.get('#nameofuser');
        };
        this.getMenuDetails = function () {
            var menuDetail = [];
            _this.headerMenuItemList().each(function ($item) {
                var style = $item.attr("style");
                if (style === undefined || !style.includes("display:none")) {
                    menuDetail.push({
                        text: $item.text() /* .replace("\n", "") */,
                        href: $item.attr("href")
                    });
                }
            });
            return new Cypress.Promise(function (resolve) {
                cy.wrap('').then(function () { return resolve(menuDetail); });
            });
        };
    }
    return HeaderComponent;
}());
exports.default = HeaderComponent;
