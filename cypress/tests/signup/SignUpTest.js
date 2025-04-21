"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HeaderComponent_1 = require("../../models/components/HeaderComponent");
var SignUpComponent_1 = require("../../models/components/SignUpComponent");
var generateRandomUser = function (usernamelength) {
    var ALL_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxy123456789";
    var ALL_CHARS_LENGTH = ALL_CHARS.length;
    var randomUsername = '';
    for (var i = 0; i <= usernamelength; i++) {
        randomUsername += ALL_CHARS.charAt(Math.random() * ALL_CHARS_LENGTH);
    }
    return randomUsername;
};
var SignUp_CREDS = {
    username: generateRandomUser(4),
    password: "test"
};
describe("SignUp test ", function () {
    var headerComp;
    var signUpComp;
    beforeEach(function () {
        cy.visit("/");
        headerComp = new HeaderComponent_1.default();
        signUpComp = new SignUpComponent_1.default();
    });
    var signup = function (username, password) {
        headerComp.getLoginLink().click({ force: true });
        /* signUpComp.getSignUpModal().should('be.visible') */
        signUpComp.getUsername().type(SignUp_CREDS.username, { force: true, waitForAnimations: true });
        signUpComp.getPassword().type(SignUp_CREDS.password, { force: true, waitForAnimations: true });
        signUpComp.getSignUpBtn().click({ force: true });
    };
    it("test login credential", function () {
        var username = SignUp_CREDS.username, password = SignUp_CREDS.password;
        signup(username, password);
        cy.on('window:alert', function (alert) {
            expect(alert).to.contains("Sign up successful,");
        });
    });
    it("should be able to see userexist", function () {
        var password = SignUp_CREDS.password;
        signup("khoa25", "".concat(password, "_qwdqw"));
        cy.on('window:alert', function (alert) {
            expect(alert).to.contains("User exist");
        });
    });
});
