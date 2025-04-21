import FooterComponent from "../../models/components/FooterComponent";

describe("footer component test", () => {
  const BRAND_TEXT = "PRODUCT STORE";
  let footerComp;
  beforeEach(() => {
    cy.visit("/");
    footerComp = new FooterComponent();
  });

  it("test about us", () => {
    const expectedData = {
      header: "About Us",
      desc: "We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.",
    };
    footerComp.getAboutUsData().then((actualData) => {
      expect(actualData).to.deep.eq(expectedData)
   
    });
  });
  it("test contact us", () => {
    const expectedData = {header:"Get in Touch",
    Address: "2390 El Camino Real",
      Phone: "+440 123456",
      Email: "demo@blazemeter.com" }
    footerComp.getContactUsData().then((actualData) => {
      
      expect(actualData.header).to.eq(expectedData.header)
    });
  });
});
