import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Account } from './entities/account';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule], // <== aquí
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  cuentas: Account[] = [];

  ngOnInit(){

      let firtsAccount:Account={
        id:1,
        type:1,
        value:5000
      }
      this.cuentas.push(firtsAccount);


  }


}







