
import HeaderComponent from "../../models/components/HeaderComponent";

describe("header component test", () => {
  const BRAND_TEXT = "PRODUCT STORE";
  let headerComp;
  beforeEach(() => {
    cy.visit("/");
    headerComp = new HeaderComponent();
  });

  it("test logo", () => {
    headerComp.brandLogoImg().should("be.visible");
    headerComp.brandLogo().should("contain.text", "");
  });

  it("test for header menu details", () => {
    const expectedMenuDetails = [
      { text: "Home (current)", href: "index.html" },
      { text: "Contact", href: "#" },
      { text: "About us", href: "#" },
      { text: "Cart", href: "cart.html" },
      { text: "Log in", href: "#" },
      { text: "Sign up", href: "#" },
    ];
    headerComp.getMenuDetails().then((actualMenuDetailsData) => {
        cy.wrap("").then(()=>{
            expect(actualMenuDetailsData).to.be.deep.eq(expectedMenuDetails)
        })
     /*  cy.log(JSON.stringify(actualMenuDetailsData)); */
    });
  });
});
