"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePageAPI = void 0;
var HomePageAPI = /** @class */ (function () {
    function HomePageAPI() {
    }
    HomePageAPI.getHomePageProducts = function () {
        this._waitForEntriesRequest();
        return cy.get("@entries").then(function (entries) {
            return entries.response.body.Items;
        });
    };
    HomePageAPI.waitForHomePageProducts = function () {
        this._waitForEntriesRequest();
    };
    HomePageAPI._waitForEntriesRequest = function () {
        cy.intercept("/entries").as("entries");
        cy.wait("@entries");
    };
    return HomePageAPI;
}());
exports.HomePageAPI = HomePageAPI;
