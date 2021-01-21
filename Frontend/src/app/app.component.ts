import { Component } from '@angular/core';
import { ApiService } from './api.service';

import { FormBuilder, FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable,BehaviorSubject } from 'rxjs';
import {Location} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService],

})

export class AppComponent {
contacts=[];
       length;
    searchText : string;
     page = 1;
     next:string;
     previous:string;
    pageSize = 33;

 
ngOnInit(){   this.getContacts();}

      newContact;
      selectedContact;
      contact;
      constructor(private api:ApiService){

         this.selectedContact = {id: -1, Name: '' , EmailAddress: '', ContactNumber: '',   HomeAddress: '' , Birthday: null,Nickname:''};
         this.newContact = {id: -1, Name: '' , EmailAddress: '', ContactNumber: 0, HomeAddress: '' , Birthday: null,Nickname:''};


         }

     getContacts = () => {
     
        this.api.getAllContacts().subscribe(
          data => {
            this.contacts = data;
            
          },
          error => {
           
          }
        );
      }

    handlePageChange(event): void {
        this.page = event;
        this.getContacts();
      }
    handlePageSizeChange(event): void {
        this.pageSize = event.target.value;
        this.page = 1; 
        this.getContacts();
      }
     
      isEditEnable : boolean = false; // to show and hide the edit button 
     showAddform:boolean=false;
    hidedeletedContact:boolean=false;
showForm(){
  this.showAddform=!this.showAddform;
  
this.newContact = {id: -1, Name: '' , EmailAddress: '', ContactNumber: 0, HomeAddress: '' , Birthday: null,Nickname:''}
}
    	contactClicked = (contact) => {

             this.api.getOneContact(contact.id).subscribe(
       
          data => {
            
         
          

            this.selectedContact=data;
            
            if(this.isEditEnable===true){
            this.isEditEnable=false;
            }
            if(this.hidedeletedContact===true){
             this.hidedeletedContact=false;
            }
          },
          error => {
            
          }
        );
      }



      updateContact = () => {
     
        this.isEditEnable =!this.isEditEnable;
        
        this.api.updateContact(this.selectedContact).subscribe(
          data => {

            this.getContacts();
          },
          error => {
           
          }
        );
      }
   
  
      addContact = () => {
        this.api.addContact(this.newContact).subscribe(
          data => {
         
            this.contacts.push(data);
            this.getContacts();
            this.selectedContact=data;

           },
          error => {
          
          }
        );

      }
     
  


      deleteContact = (contact) => {

        this.api.deleteContact(this.selectedContact.id).subscribe(
          data => {
             this.getContacts();
        this.hidedeletedContact=!this.hidedeletedContact;
          
          },
          error => {
           
           
          }
        );
      }


}

  