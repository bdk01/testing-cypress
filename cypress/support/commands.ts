/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
// cypress/support/commands.d.ts or index.d.ts
declare namespace Cypress {
    interface Chainable<Subject = any> {
      login(username,password): Chainable<void>;
    }
  }
  
Cypress.Commands.add('login',(username,password)=>{
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
      }).then((res) => {
        cy.log(res.body)
        const authToken = res.body.split('Auth_token: ')[1]
        if (authToken) {
          cy.log(authToken);
          cy.setCookie("tokenp_", authToken);
        } else {
          throw new Error("Auth_token not found in response");
        }
      });
})