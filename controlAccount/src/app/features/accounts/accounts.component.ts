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
  addForm:boolean = false;
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
    //   this.listOfAccounts.push(account);
  }



  submitForm(){

    console.log("entre");
  }




}
