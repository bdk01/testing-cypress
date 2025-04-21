import HeaderComponent from "../../models/components/HeaderComponent";
import LoginComponent from "../../models/components/LoginComponent";

const LOGIN_CREDS = {
  username:"khoa25",
  password:"test"
}
describe("login test ", () => {
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
  it("test login credential", () => {
    const {username,password}= LOGIN_CREDS
    login(username,password)
    loginComp.getLoggedUsername().should('be.visible')
    loginComp.getLoggedUsername().should('contain.text',`Welcome ${LOGIN_CREDS.username}`)
  });
  it("should be able to see wrong pass", () => {
    const {username,password}= LOGIN_CREDS
    login(username,`${password}_qwdqw`)
    cy.on('window:alert',alert=>{
      expect(alert).to.contains("Wrong password")
    })
  });
 
});
