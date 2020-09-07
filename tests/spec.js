// spec.js
let settings_page = require('../pages/settings.js');
let login_page = require('../pages/login.js');
let files_page = require('../pages/files.js');

describe('ADF Demo App', function () {

  it('Test Settings Page', function () {

    settings_page.get('http://qaexercise.envalfresco.com/settings');

    settings_page.select_ECM_Provider();

    settings_page.clickApply();

    settings_page.verifyNewPageLogin();

    browser.sleep(2000);
  });

  it('Test Login Page', function () {

    login_page.write_UserName('guest@example.com');

    login_page.write_Password('Password');

    login_page.clickSignIn();

    login_page.verifyNewPageHome();

    browser.sleep(2000);
  });

  it('Test Files Page', function () {

    settings_page.get('http://qaexercise.envalfresco.com/files');

    browser.sleep(2000);

    files_page.new_Folder_Button();

    browser.sleep(2000);

    files_page.checkDialogBoxPresence();

    files_page.write_folder_name('waszp');
    
    browser.sleep(2000);

    files_page.create_New_Folder();

    browser.sleep(2000);

    files_page.check_Folder_Presence('waszp');

    browser.sleep(2000);

  });

});