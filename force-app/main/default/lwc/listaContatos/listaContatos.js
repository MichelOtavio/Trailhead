import { LightningElement, track } from 'lwc';

import listContact from '@salesforce/apex/AccountContactController.relacionamento';


export default class ListaContatos extends LightningElement {
    @track recordId;
    @track data;

    @track name;

    ListaDeContatos(){

        listContact({listContact: recordId}).then((data)=>{
            this.data = data;
            this.data.Name;
            this.name = this.data.Name;;
            console.error('Name', this.name)
        })

    }
}