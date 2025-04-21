export class SRHomePage {
    getHeroComTitle(){
        let title ='';
        cy.get(".showcase__hero .card__title").then($title=>{
            title = $title.text().trim()
        })
        return new Cypress.Promise((resolve,reject)=>{
            cy.wrap('').then(()=>resolve(title))/* 'wrap empty */
        })
    }
}