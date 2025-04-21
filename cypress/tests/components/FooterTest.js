"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FooterComponent_1 = require("../../models/components/FooterComponent");
describe("footer component test", function () {
    var BRAND_TEXT = "PRODUCT STORE";
    var footerComp;
    beforeEach(function () {
        cy.visit("/");
        footerComp = new FooterComponent_1.default();
    });
    it("test about us", function () {
        var expectedData = {
            header: "About Us",
            desc: "We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.",
        };
        footerComp.getAboutUsData().then(function (actualData) {
            expect(actualData).to.deep.eq(expectedData);
        });
    });
    it("test contact us", function () {
        var expectedData = { header: "Get in Touch",
            Address: "2390 El Camino Real",
            Phone: "+440 123456",
            Email: "demo@blazemeter.com" };
        footerComp.getContactUsData().then(function (actualData) {
            expect(actualData.header).to.eq(expectedData.header);
        });
    });
});
