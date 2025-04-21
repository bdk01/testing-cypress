export class HomePageAPI {
    static getHomePageProducts(){
     
        this._waitForEntriesRequest()
        return cy.get("@entries").then((entries:any)=>{
            return entries.response.body.Items
        })
      
    }
    static waitForHomePageProducts(){
     
       this._waitForEntriesRequest()
       
    }
    static _waitForEntriesRequest(){
        cy.intercept("/entries").as("entries");
        cy.wait("@entries")
    }
}