"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        var _this = this;
        this.getfooterColumns = function () {
            return cy.get("#fotcont .caption");
        };
        this.getfooterHeader = function () {
            return cy.get("h4");
        };
        this.getDesc = function () {
            return cy.get("p");
        };
        this._getDesc = function () {
            var desc = "";
            _this.getDesc().then(function ($desc) {
                desc = desc + $desc.text().trim() + " ";
            });
            return new Cypress.Promise(function (resolve) {
                cy.wrap("").then(function () {
                    return resolve(desc);
                });
            });
        };
        this.getAboutUsData = function () {
            var data = {};
            _this.getfooterColumns()
                .eq(0)
                .within(function () {
                _this.getfooterHeader().then(function ($header) {
                    data.header = $header.text().trim();
                });
                _this.getDesc().then(function ($desc) {
                    data.desc = $desc.text().replace(/\n\s+/g, " ").trim();
                });
            });
            return new Cypress.Promise(function (resolve) {
                cy.wrap("").then(function () { return resolve(data); });
            });
        };
        this.getContactUsData = function () {
            var contactData = {};
            _this.getfooterColumns()
                .eq(1)
                .within(function () {
                _this.getfooterHeader().then(function ($header) {
                    contactData.header = $header.text().trim();
                });
                _this._getDesc().then(function (desc) { return (contactData.desc = desc); });
            });
            return new Cypress.Promise(function (resolve) {
                cy.wrap("").then(function () { return resolve(contactData); });
            });
        };
    }
    return FooterComponent;
}());
exports.default = FooterComponent;
