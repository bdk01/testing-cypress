"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent() {
        this.getProductImg = function () { return cy.get('.product-image img'); };
        this.getProductName = function () { return cy.get('#tbodyid .name'); };
        this.getProductPrice = function () { return cy.get('#tbodyid .price-container'); };
        this.getProductDescription = function () { return cy.get('#tbodyid .description'); };
        this.getAddToCartBtn = function () { return cy.get('[onclick="addToCart(2)"]'); };
    }
    return ProductDetailsComponent;
}());
exports.default = ProductDetailsComponent;
