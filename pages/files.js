let files_page = function () {

    let newFolderButton = element(by.xpath("//button[.='create_new_folder']"));
    let popOutWindow = element(by.css('.mat-dialog-container'));
    let folderName_input = element(by.id('adf-folder-name-input'));
    let create_Button = element(by.id('adf-folder-create-button'));

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
        //let folder_presence = element(by.xpath("//span[.=(check_folder_name)]"));
        //let folder_presence = element(by.css("//span[title=(check_folder_name)]"));
        
        //expect(folder_presence.isPresent()).toBe(true);  
        //expect(folder_presence.isDisplayed()).toBe(true);
    }
 
};

module.exports = new files_page();