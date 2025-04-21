var haveselect = "#dropdown";
describe('template select', function () {
    it('passes', function () {
        cy.visit("https://the-internet.herokuapp.com/dropdown");
        cy.get(haveselect).select(1);
        cy.get(haveselect).select("Option 2");
        cy.get("select option:selected").should("eq", "Option 2");
    });
});
