"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HeaderComponent_1 = require("../../models/components/HeaderComponent");
var LoginComponent_1 = require("../../models/components/LoginComponent");
var HomePageAPI_1 = require("../../support/HomePageAPI");
var LOGIN_CREDS = {
    username: "khoa25",
    password: "test"
};
describe("order detail test ", function () {
    var headerComp;
    var loginComp;
    beforeEach(function () {
        cy.visit("https://demoblaze.com/");
        headerComp = new HeaderComponent_1.default();
        loginComp = new LoginComponent_1.default();
    });
    var login = function (username, password) {
        headerComp.getLoginLink().click({ force: true });
        loginComp.getLoginModal().should('be.visible');
        loginComp.getUsername().type(username, { force: true, waitForAnimations: true });
        loginComp.getPassword().type(password, { force: true, waitForAnimations: true });
        loginComp.getLoginBtn().click({ force: true });
    };
    it("test order detail", function () {
        purchaseItem();
    });
    it("test login after that  order ", function () {
        var username = LOGIN_CREDS.username, password = LOGIN_CREDS.password;
        login(username, password);
        purchaseItem();
    });
});
var purchaseItem = function () {
    HomePageAPI_1.HomePageAPI.getHomePageProducts().then(function (apiproduct) {
        var randomProduct = apiproduct[Math.floor(Math.random() * apiproduct.length)];
        var randomProductTitle = randomProduct.title.trim().replace("\n", "");
        cy.contains(randomProductTitle).click();
        cy.contains('Add to cart').click();
        cy.get('#cartur').click();
        cy.contains('Place Order').click();
        cy.get("#name").type("khoa");
        cy.get("#country").type("vn");
        cy.get("#city").type("hcm");
        cy.get("#card").type("123");
        cy.get("#month").type("12");
        cy.get("#year").type("2001");
        cy.contains('Purchase').click();
        //verification
        cy.get('.sweet-alert h2').should('contain.text', "Thank you for your purchase");
        cy.get('.sweet-alert .lead').then(function ($confirmOrder) {
            cy.wrap($confirmOrder).should('contain.text', randomProduct.price);
        });
        cy.wait(3000);
    });
};
