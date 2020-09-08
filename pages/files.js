let files_page = function () {

    let newFolderButton = element(by.xpath("//button[.='create_new_folder']"));
    let popOutWindow = element(by.css('.mat-dialog-container'));
    let folderName_input = element(by.id('adf-folder-name-input'));
    let create_Button = element(by.id('adf-folder-create-button'));
    var record_data = element.all(by.className('adf-datatable-row'));
    var until = protractor.ExpectedConditions;
    let errorMessage = element(by.xpath('//span[contains(text(),"There\'s already a folder with this name. Try a different name.")]'));
    let cancelNewFolderCreation = element(by.id('adf-folder-cancel-button'));
    let myFolder = element(by.xpath("//span[.='waszp']"));

    this.new_Folder_Button = function () {
        newFolderButton.click();
    }

    this.checkDialogBoxPresence = function (check) {
        expect(popOutWindow.isPresent()).toBe(check);
    }

    this.write_folder_name = function (folder_name) {
        folderName_input.sendKeys(folder_name);
    };

    this.create_New_Folder = function () {
        create_Button.click();
    }

    this.check_Folder_Presence = function (check_folder_name) {
        expect(record_data.getAttribute('aria-label')).toContain(check_folder_name);
    }

    this.checkAlertMessage = function () {
        browser.wait(until.presenceOf(errorMessage), 5000, 'Element taking too long to appear in the DOM');
    }

    this.selecMyFolder = function ()    {
        cancelNewFolderCreation.click();
        myFolder.click();
    }

};

module.exports = new files_page();