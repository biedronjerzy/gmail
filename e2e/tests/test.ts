import { browser, protractor } from 'protractor';
import { LogInPage } from '../pages/logInPage';

describe("Gmail log in and send email test", function () {

    let logInPage = new LogInPage();

    beforeEach(() => {
        browser.get("https://accounts.google.com/");
        browser.manage().window().maximize();
    });

    it("Gmail log in and send email test", () => {
        expect(logInPage.elements.logo.isDisplayed()).toBeTruthy();
        logInPage.elements.email.click();
        logInPage.elements.email.sendKeys('chcepotestowac@gmail.com');
        protractor.Key.ENTER;
        browser.sleep(4000);


        
    });

});