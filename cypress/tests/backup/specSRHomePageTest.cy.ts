import { SRHomePage } from "../../models/components/cpnbk/SRHomePage"


describe('SR homepage', () => {
    it('within method', () => {
      cy.visit("https://www.simplyrecipes.com/")
        new SRHomePage().getHeroComTitle().then((title:any)=> {
            cy.wrap("").then(()=>{
                expect(title).to.be.eq('My Dutch Baby Recipe Is Totally Foolproof—I Make It Every Weekend')
            })
        })
        
    })
   
  })