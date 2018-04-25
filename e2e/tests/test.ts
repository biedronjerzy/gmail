import { browser } from 'protractor';

describe("Plan exams test suite for login screen", function () {


    it("PE login/logout- check displayed elements", () => {
        browser.get("https://accounts.google.com/");
        browser.manage().window().maximize();
        browser.sleep(5000);
    });

});