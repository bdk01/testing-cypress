"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HeaderComponent_1 = require("../../models/components/HeaderComponent");
var LoginComponent_1 = require("../../models/components/LoginComponent");
var LOGIN_CREDS = {
    username: "khoa25",
    password: "test"
};
describe("login test ", function () {
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
    it("test login credential", function () {
        var username = LOGIN_CREDS.username, password = LOGIN_CREDS.password;
        login(username, password);
        loginComp.getLoggedUsername().should('be.visible');
        loginComp.getLoggedUsername().should('contain.text', "Welcome ".concat(LOGIN_CREDS.username));
    });
    it("should be able to see wrong pass", function () {
        var username = LOGIN_CREDS.username, password = LOGIN_CREDS.password;
        login(username, "".concat(password, "_qwdqw"));
        cy.on('window:alert', function (alert) {
            expect(alert).to.contains("Wrong password");
        });
    });
});
