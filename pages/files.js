let files_page = function () {

    let newFolderButton = element(by.xpath("//button[.='create_new_folder']"));
    let popOutWindow = element(by.css('.mat-dialog-container'));
    let folderName_input = element(by.id('adf-folder-name-input'));
    let create_Button = element(by.id('adf-folder-create-button'));
    var record_data = element.all(by.className('adf-datatable-row'));

    this.new_Folder_Button = function(){
        newFolderButton.click();
    }
 
    this.checkDialogBoxPresence = function (){
        expect(popOutWindow.isPresent()).toBe(true);  
    }
    
    this.write_folder_name = function(folder_name){
        folderName_input.sendKeys(folder_name);
    };

    this.create_New_Folder = function(){
        create_Button.click();
    }
 
    this.check_Folder_Presence = function(check_folder_name){
        expect(record_data.getAttribute('aria-label')).toContain(check_folder_name);
    }
 
};

module.exports = new files_page();