let settings_page = function () {

    let dropdown_provider = element(by.css('mat-select[aria-label="Provider"]>div:nth-of-type(1)>div:nth-of-type(2)>div'));
    let ECM_provider = element((by.css('mat-option:nth-of-type(2)>span')));
    let applyButton = element(by.xpath("//span[contains(@class,'mat-button-wrapper') and contains(text(),'APPLY')]"));


    this.get = function (url) {
        browser.get(url);
    }

    this.select_ECM_Provider = function (){
        dropdown_provider.click();
        ECM_provider.click();
    }

    this.clickApply = function(){
        applyButton.click();
    };

    this.verifyNewPageLogin = function () {
        browser.wait(protractor.ExpectedConditions.urlIs("http://qaexercise.envalfresco.com/login"), 5000);
        expect(browser.getCurrentUrl()).toEqual('http://qaexercise.envalfresco.com/login');
    }
};

module.exports = new settings_page();