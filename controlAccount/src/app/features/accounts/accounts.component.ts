import { Component } from '@angular/core';
import { Account } from './models/Account';
import { CommonModule } from '@angular/common'; // ✅ importa esto
import { FormsModule } from '@angular/forms'; // ✅ importa esto
@Component({
  selector: 'app-accounts',
    standalone: true,
  imports: [CommonModule,FormsModule], 
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent {

  listOfAccounts:Account[] =[];
  activeForm:boolean = false;
  addForm:boolean = false;
  editForm:boolean = false;
  account:Account={
    id:0,
    name:"",
    status:false,
    type:0,
    value:0
  }

  ngOnInit(){
        
  }

  addAccount(){
     this.addForm = true;
  // Reinicia el objeto `account` por si ya había sido usado antes
  this.account = {
    id: this.listOfAccounts.length + 1,
    name: "",
    status: false,
    type: 0,
    value: 0
  };
  }

  deleteAccount(account: Account) {
    this.listOfAccounts = this.listOfAccounts.filter(a => a !== account);
  }
  editAccount(account: Account) {
    this.editForm = true;
    this.account = { ...account }; // Clona el objeto sin modificar el id
  }

  submitForm(){
    this.listOfAccounts.push({ ...this.account }); // usa copia para evitar referencias
    this.addForm = false;
    this.account = {
      id: this.listOfAccounts.length + 1,
      name: "",
      status: false,
      type: 0,
      value: 0
    };
  }

    updateForm(){
        const index = this.listOfAccounts.findIndex(a => a.id === this.account.id);
        if (index !== -1) {
           this.listOfAccounts[index] = { ...this.account }; // actualiza el objeto
        }
        this.editForm = false;
        this.account = {
          id: 0,
          name: "",
          status: false,
          type: 0,
          value: 0
        };

    }





}
