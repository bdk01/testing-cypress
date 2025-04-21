var havecheckbox = "input[type='checkbox']";
describe('template spec', function () {
    it('passes', function () {
        cy.visit("https://the-internet.herokuapp.com/checkboxes");
        cy.get(havecheckbox).eq(0).click();
        cy.get(havecheckbox).eq(1).click();
        cy.get(havecheckbox).eq(0).click();
        cy.get(havecheckbox).filter(":not([checked])").should("have.length", 2);
        cy.get(havecheckbox).filter(":not([checked])").then(function (item) {
            cy.get(item).click({ multiple: true });
        });
    });
});
