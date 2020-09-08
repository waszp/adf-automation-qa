let settings_page = function () {

    let dropDownProvider = element(by.id('adf-provider-selector'));
    //let providerECM = element((by.css('mat-option:nth-of-type(2)>span')));
    let providerECM = element(by.id('mat-option-1'));
    //let applyButton = element(by.xpath("//span[contains(@class,'mat-button-wrapper') and contains(text(),'APPLY')]"));
    let applyButton = element(by.id('host-button'));

    this.get = function (url) {
        browser.get(url);
    }

    this.selectProviderECM = function (){
        dropDownProvider.click();
        browser.sleep(2000);
        providerECM.click();
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