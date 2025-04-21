export default class HeaderComponent {
    brandLogo = ()=>{
       return cy.get("#nava")
    }
    brandLogoImg = ()=>{
        return cy.get("#nava img")
    }
    headerMenuItemList = ()=>{
        return cy.get(".nav-item a")
    }
    getLoginLink = ()=>{
        return cy.get('#login2')
    }
    getLoggedUsername = ()=>{
        return  cy.get('#nameofuser')
    }
    getMenuDetails=()=>{
        let menuDetail = []
        this.headerMenuItemList().each($item=>{
            const style = $item.attr("style")
            if(style === undefined || !style.includes("display:none")){
                menuDetail.push({
                    text:$item.text()/* .replace("\n", "") */,
                    href:$item.attr("href")
                })
            }
        })
        return new Cypress.Promise(resolve=>{
            cy.wrap('').then(()=>resolve(menuDetail))
        })
    }
}