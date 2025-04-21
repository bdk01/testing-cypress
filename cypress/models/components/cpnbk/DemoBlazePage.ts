export default class DemoPlazePage {
  _getCardDetails() {
    let cardData = {} as any;
    cy.get("h4").then(($title) => (cardData.itemName = $title.text().trim()));
    cy.get("h5").then(($price) => (cardData.itemPrice = $price.text().trim()));
    return new Cypress.Promise((resolve, reject) => {
      resolve(cardData); /* 'wrap empty */
    });
  }

  getAllCardData() {
    let allCardData = [] as any;
    cy.get(".card").each(($card) => {
      cy.wrap($card).within(() => {
        this._getCardDetails().then((cardData) => allCardData.push(cardData));
      });
    });
    return new Cypress.Promise((resolve, reject) => {
      cy.wrap("").then(() => resolve(allCardData)); /* 'wrap empty */
    });
  }
}
