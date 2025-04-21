import HeaderComponent from "../../models/components/HeaderComponent";
import LoginComponent from "../../models/components/LoginComponent";

import { HomePageAPI } from "../../support/HomePageAPI";
const LOGIN_CREDS = {
  username:"khoa25",
  password:"test"
}
describe("order detail test ", () => {
  let headerComp
  let loginComp
  beforeEach(() => {
    cy.visit("https://demoblaze.com/");
    headerComp = new HeaderComponent()
    loginComp = new LoginComponent()
  });
  const login = (username,password)=>{
  
    headerComp.getLoginLink().click({force:true})
 
    loginComp.getLoginModal().should('be.visible')
    loginComp.getUsername().type(username,{force:true,waitForAnimations:true})
    loginComp.getPassword().type(password,{force:true,waitForAnimations:true})
    loginComp.getLoginBtn().click({force:true})
  }
  it("test order detail", () => {
    purchaseItem()
  });
  it("test login after that  order ", () => {
    const {username,password}= LOGIN_CREDS
    login(username,password)
    purchaseItem()
  });
});
const purchaseItem = ()=>{
  HomePageAPI.getHomePageProducts().then((apiproduct) => {
    const randomProduct =
      apiproduct[Math.floor(Math.random() * apiproduct.length)];
      const randomProductTitle = randomProduct.title.trim().replace("\n","")
     cy.contains(randomProductTitle).click();
      cy.contains('Add to cart').click()
      cy.get('#cartur').click()
      cy.contains('Place Order').click()
      cy.get("#name").type("khoa")
      cy.get("#country").type("vn")
      cy.get("#city").type("hcm")
      cy.get("#card").type("123")
      cy.get("#month").type("12")
      cy.get("#year").type("2001")
      cy.contains('Purchase').click()
      //verification
      cy.get('.sweet-alert h2').should('contain.text',"Thank you for your purchase")
      cy.get('.sweet-alert .lead').then($confirmOrder=>{
        cy.wrap($confirmOrder).should('contain.text',randomProduct.price)
      })
      cy.wait(3000)
      

  });
}
