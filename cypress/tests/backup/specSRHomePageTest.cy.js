"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SRHomePage_1 = require("../../models/components/cpnbk/SRHomePage");
describe('SR homepage', function () {
    it('within method', function () {
        cy.visit("https://www.simplyrecipes.com/");
        new SRHomePage_1.SRHomePage().getHeroComTitle().then(function (title) {
            cy.wrap("").then(function () {
                expect(title).to.be.eq('My Dutch Baby Recipe Is Totally Foolproof—I Make It Every Weekend');
            });
        });
    });
});
