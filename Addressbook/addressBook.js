//UC6
/**
 * Ability to find number of contacts in the address book
 */

 const prompt = require('prompt-sync')();
 const UserMenu = require("./UserMenuData"); 
 const AddressBookService = require("./AddressbookService"); 
 
 let userMenu = new UserMenu();
 let addressBookService = new AddressBookService();
 let personInfoList = new Array();
 flag = true;
 
 while( flag ) {
 
     let option = userMenu.menu();
     switch( option ) {
         case 1:
             personInfoList = Array.from(addressBookService.insert(personInfoList));
             console.log();
             break;
         case 2:
             console.log(personInfoList);
             console.log();
             break;
         case 3:
             let fname = prompt("Enter the First Name of the Contact : ");
             personInfoList = addressBookService.editContact(personInfoList, fname);
             console.log();
             break; 
         case 4:
             let personName = prompt("Enter the First Name of the Contact : ");
             personInfoList = addressBookService.deleteContact(personInfoList, personName);
             console.log();
             break; 
         case 5:
             console.log("Number of contacts in the address book is : " +personInfoList.length);
             console.log();
             break;
         case 6:
             flag = false;
             break;    
         default:
             console.log("You have entered invalid input!");
             flag = false;
             break;
     }
 }