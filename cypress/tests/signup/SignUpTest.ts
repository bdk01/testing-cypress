import HeaderComponent from "../../models/components/HeaderComponent";
import LoginComponent from "../../models/components/LoginComponent";
import SignUpComponent from "../../models/components/SignUpComponent";

const generateRandomUser = (usernamelength)=>{
  const ALL_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxy123456789"
  const ALL_CHARS_LENGTH= ALL_CHARS.length;
  let randomUsername=''
  for( let i= 0 ; i<= usernamelength;i++){
    randomUsername += ALL_CHARS.charAt(Math.random()* ALL_CHARS_LENGTH)
  }
  return randomUsername
}
const SignUp_CREDS = {
  username:generateRandomUser(4),
  password:"test"
}
describe("SignUp test ", () => {
 let headerComp
 let signUpComp
  beforeEach(() => {
    cy.visit("/");
     headerComp = new HeaderComponent()
    signUpComp = new SignUpComponent()
  });
  const signup = (username,password)=>{
  
    headerComp.getLoginLink().click({force:true})
 
    /* signUpComp.getSignUpModal().should('be.visible') */
    signUpComp.getUsername().type(SignUp_CREDS.username,{force:true,waitForAnimations:true})
    signUpComp.getPassword().type(SignUp_CREDS.password,{force:true,waitForAnimations:true})
    signUpComp.getSignUpBtn().click({force:true})
  }
  it("test login credential", () => {
    const {username,password}= SignUp_CREDS
    signup(username,password)
    cy.on('window:alert',alert=>{
      expect(alert).to.contains("Sign up successful,")
    })
  });
  it("should be able to see userexist", () => {
    const {password}= SignUp_CREDS
    signup("khoa25",`${password}_qwdqw`)
    cy.on('window:alert',alert=>{
      expect(alert).to.contains("User exist")
    })
  });
 
});
