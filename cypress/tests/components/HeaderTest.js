"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HeaderComponent_1 = require("../../models/components/HeaderComponent");
describe("header component test", function () {
    var BRAND_TEXT = "PRODUCT STORE";
    var headerComp;
    beforeEach(function () {
        cy.visit("/");
        headerComp = new HeaderComponent_1.default();
    });
    it("test logo", function () {
        headerComp.brandLogoImg().should("be.visible");
        headerComp.brandLogo().should("contain.text", "");
    });
    it("test for header menu details", function () {
        var expectedMenuDetails = [
            { text: "Home (current)", href: "index.html" },
            { text: "Contact", href: "#" },
            { text: "About us", href: "#" },
            { text: "Cart", href: "cart.html" },
            { text: "Log in", href: "#" },
            { text: "Sign up", href: "#" },
        ];
        headerComp.getMenuDetails().then(function (actualMenuDetailsData) {
            cy.wrap("").then(function () {
                expect(actualMenuDetailsData).to.be.deep.eq(expectedMenuDetails);
            });
            /*  cy.log(JSON.stringify(actualMenuDetailsData)); */
        });
    });
});
