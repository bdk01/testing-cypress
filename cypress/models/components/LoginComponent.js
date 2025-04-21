"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.getLoginModal = function () { return cy.get('#logInModal form'); };
        this.getUsername = function () { return cy.get('#loginusername'); };
        this.getPassword = function () { return cy.get('#loginpassword'); };
        this.getLoginBtn = function () { return cy.get('[onclick="logIn()"]'); };
        this.getLoggedUsername = function () {
            return cy.get('#nameofuser');
        };
    }
    return LoginComponent;
}());
exports.default = LoginComponent;
