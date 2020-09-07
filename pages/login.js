let login_page = function () {

    let userName_input = element(by.id('username'));
    let password_input = element(by.id('password'));
    let signIn = element(by.id('login-button'));


    this.write_UserName = function(username){
        userName_input.sendKeys(username);
    };

    this.write_Password = function(passw){
        password_input.sendKeys(passw);
    };

    this.clickSignIn = function(){
        signIn.click();
    };
    
    this.verifyNewPageHome = function () {
        browser.wait(protractor.ExpectedConditions.urlIs("http://qaexercise.envalfresco.com/home"), 5000);
        expect(browser.getCurrentUrl()).toEqual('http://qaexercise.envalfresco.com/home');
    }
};

module.exports = new login_page();