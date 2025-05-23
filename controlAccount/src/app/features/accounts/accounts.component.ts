import { Component } from '@angular/core';
import { Account } from './models/Account';
import { CommonModule } from '@angular/common'; // ✅ importa esto

@Component({
  selector: 'app-accounts',
    standalone: true,
  imports: [CommonModule], // ✅ habilita *ngFor y otras directivas comunes
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent {

  listOfAccounts:Account[] =[];
  accountBank: Account = {
    id:"fasdfa",
    name:"davivienda",
    status:true
  };

  ngOnInit(){


    this.listOfAccounts.push(this.accountBank);



  }
  




}
