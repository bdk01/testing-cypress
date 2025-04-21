describe('template spec', function () {
    it('passes', function () {
        cy.visit("https://the-internet.herokuapp.com/login");
        /* cy.get("#username").type('tomsmith')
        cy.get("#password").type('SuperSecretPassword!')
        cy.get("#login > button").click()
        cy.wait(3000) */
        var gg = cy.get("input");
        /* gg.eq(0).type('qwewqe') */
        gg.then(function (items) {
            cy.get(items[0]).clear();
            cy.get(items[0]).type('qwdqdw');
            cy.get(items[1]).type('qwdqdw');
        });
    });
});
