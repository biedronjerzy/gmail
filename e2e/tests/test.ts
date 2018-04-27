import { browser, protractor, element, by } from 'protractor';
import { LogInPage } from '../pages/logInPage';

describe("Gmail log in and send email test", function () {

    let logInPage = new LogInPage();

    beforeEach(() => {
         browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization=true;
        
        browser.manage().window().maximize();

    });
    

    it("Gmail log in and send email test", () => {
        browser.get("http://computer-database.herokuapp.com/computers");
        browser.sleep(5000);
        var pageHeading = element(by.id('main')).element(by.css('h1'));
expect(pageHeading.getText()).toContain(' computers found');
        browser.driver.get("https://www.google.com/gmail/about/");

        expect(logInPage.elements.logo.isDisplayed()).toBeTruthy();
        logInPage.elements.signIn.click();
        browser.driver.sleep(4000);
        // // logInPage.elements.email.sendKeys('chcepotestowac@gmail.com');
        // // protractor.Key.ENTER;
        // // browser.sleep(4000);
        // var pageHeading = element(by.id('main')).element(by.css('h1'));
        // expect(pageHeading.getText()).toContain(' computers found');
        // browser.driver.sleep(5000);
        
    });

});