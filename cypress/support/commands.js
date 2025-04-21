/// <reference types="cypress" />
Cypress.Commands.add('login', function (username, password) {
    cy.request({
        method: "POST",
        url: "https://api.demoblaze.com/login",
        headers: {
            contentType: "application/json"
        },
        body: {
            username: username,
            password: btoa(password)
        }
    }).then(function (res) {
        cy.log(res.body);
        var authToken = res.body.split('Auth_token: ')[1];
        if (authToken) {
            cy.log(authToken);
            cy.setCookie("tokenp_", authToken);
        }
        else {
            throw new Error("Auth_token not found in response");
        }
    });
});
