describe('Within test and find', () => {
    it('within method', () => {
      cy.visit("https://www.simplyrecipes.com/")
      /* cy.get('.card__title').each((title,index)=>{
        cy.log(index)
      }) */
    cy.get('.showcase__hero').within(()=>{
      cy.get('.card__title').each((title,index)=>{
        cy.log(index)
      })
    })
      
    })
    it.only('find method',function(){
      cy.visit("https://www.simplyrecipes.com/")
      cy.get('.showcase__hero').find('.card__title').each((title,index)=>{
        cy.log(index)
      })
    })
  })