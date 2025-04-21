"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent() {
        this.getSignUpModal = function () { return cy.get('.modal-dialog form'); };
        this.getUsername = function () { return cy.get('#sign-username'); };
        this.getPassword = function () { return cy.get('#sign-password'); };
        this.getSignUpBtn = function () { return cy.get('[onclick="register()"]'); };
        this.getLoggedUsername = function () {
            return cy.get('#nameofuser');
        };
    }
    return SignUpComponent;
}());
exports.default = SignUpComponent;
