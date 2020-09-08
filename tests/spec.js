// spec.js
let settings_page = require('../pages/settings.js');
let login_page = require('../pages/login.js');
let files_page = require('../pages/files.js');

var websiteSettings = 'http://qaexercise.envalfresco.com/settings';
var websiteFiles = 'http://qaexercise.envalfresco.com/files';
var userName = 'guest@example.com';
var password = 'Password';
var gitUser = 'waszp';
var errorMessage = 'There\'s already a folder with this name.Try a different name'

describe('ADF Demo App', function () {

  it('Test Settings Page', function () {

    settings_page.get(websiteSettings);

    settings_page.selectProviderECM();

    settings_page.clickApply();

    settings_page.verifyNewPageLogin();

    browser.sleep(2000);
  });

  it('Test Login Page', function () {

    login_page.write_UserName(userName);

    login_page.write_Password(password);

    login_page.clickSignIn();

    login_page.verifyNewPageHome();

    browser.sleep(2000);
  });

  it('Test Files Page', function () {

    settings_page.get(websiteFiles);

    files_page.new_Folder_Button();

    files_page.checkDialogBoxPresence(true);

    files_page.write_folder_name(gitUser);
  
    files_page.create_New_Folder();

    files_page.checkDialogBoxPresence(false);

    files_page.check_Folder_Presence(gitUser);

    files_page.new_Folder_Button();

    files_page.checkDialogBoxPresence(true);

    files_page.write_folder_name(gitUser);
 
    files_page.create_New_Folder();

    files_page.checkDialogBoxPresence(true);

    files_page.checkAlertMessage();

    files_page.selecMyFolder();

    browser.sleep(4000);

  });

});