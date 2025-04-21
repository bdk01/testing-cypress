const havecheckbox = "input[type='checkbox']"

describe('template spec', () => {
  it('passes', () => {
    cy.visit("https://the-internet.herokuapp.com/checkboxes")
    cy.get(havecheckbox).eq(0).click()
    cy.get(havecheckbox).eq(1).click()
    cy.get(havecheckbox).eq(0).click()
 
    cy.get(havecheckbox).filter(":not([checked])").should("have.length",2)
    cy.get(havecheckbox).filter(":not([checked])").then((item:any)=>{
      cy.get(item).click({multiple:true})
    })
  })
})