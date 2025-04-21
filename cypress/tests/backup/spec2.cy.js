describe('template spec', function () {
    it('passes', function () {
        cy.visit("https://the-internet.herokuapp.com/");
        cy.get("a[href='/login'").click();
        cy.location("pathname", { timeout: 1000 }).should("eq", "/login");
    });
});
