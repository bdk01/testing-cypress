export default class FooterComponent {
  getfooterColumns = () => {
    return cy.get("#fotcont .caption");
  };
  getfooterHeader = () => {
    return cy.get("h4");
  };
  getDesc = () => {
    return cy.get("p");
  };
  _getDesc = () => {
    let desc = "";

    this.getDesc().then(($desc) => {
      desc = desc + $desc.text().trim() + " ";
    });

    return new Cypress.Promise((resolve) => {
      cy.wrap("").then(() => {
        return resolve(desc);
      });
    });
  };
  getAboutUsData = () => {
    let data = {} as any;
    this.getfooterColumns()
      .eq(0)
      .within(() => {
        this.getfooterHeader().then(($header) => {
          data.header = $header.text().trim();
        });
        this.getDesc().then(($desc) => {
          data.desc = $desc.text().replace(/\n\s+/g, " ").trim();
        });
      });
    return new Cypress.Promise((resolve) => {
      cy.wrap("").then(() => resolve(data));
    });
  };
  getContactUsData = () => {
    let contactData = {} as any;
    this.getfooterColumns()
      .eq(1)
      .within(() => {
        this.getfooterHeader().then(($header) => {
          contactData.header = $header.text().trim();
        });

        this._getDesc().then((desc) => (contactData.desc = desc));
      });
    return new Cypress.Promise((resolve) => {
      cy.wrap("").then(() => resolve(contactData));
    });
  };
}
