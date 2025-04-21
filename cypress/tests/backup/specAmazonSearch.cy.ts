import AmazonHomePage from "../../models/components/cpnbk/AmazonHomePage"
import AmazonSearchResultPage from "../../models/components/cpnbk/AmazonSearchResult"


describe('Amazon', () => {
    it('should able to search', () => {
      cy.visit("https://www.amazon.com/")
    const SEARCH_TEXT = "table"
    let AmHomePage = new AmazonHomePage()
    AmHomePage.searchTxtBxElem.type(SEARCH_TEXT)
    AmHomePage.searchBtnElem.click()
        let AmazSearchResult = new AmazonSearchResultPage()
        AmazSearchResult.searchItemElemList.should("not.have.length",0)

    })
  })