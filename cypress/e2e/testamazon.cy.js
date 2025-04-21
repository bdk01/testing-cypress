/// <reference types ="Cypress" />
describe('Test Suite 1', function () {
    it('My First Test', function () {
        cy.visit('https://www.youtube.com/');
        cy.get('input[name="search_query"]').type('javascript by testers talk');
        cy.get('button[class="ytSearchboxComponentSearchButton"] > yt-icon').click();
    });
});
