import { Component } from '@angular/core';
import { vehicle } from '../../models/vehicles';
import { Product } from '../../models/products';


@Component({
  selector: 'app-vehicles',
  standalone: true, // 
  imports: [],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})


export class VehiclesComponent {

    productList:Product[] =[];
    mockProduct:Product ={
      category:1,
      id:1,
      name:"",
      price:0
    }

   vehicleList:vehicle[] = [];
   mockVehicle: vehicle = {
      vehicleid: 1,
      ownerid: 1001,
      brand: 2, // Por ejemplo, 2 = Toyota
      model: 202, // Por ejemplo, 202 = Corolla
      year: new Date('2020-01-01'),
      platenumber: 987654,
      vin: 12345678901234567,
      enginetype: 'Hybrid',
      mileage: 45200,
      created_at: new Date(),
      udpate: new Date()
    };

    ngOnInit(){

      this.productList.push(this.mockProduct);

    //  this.vehicleList.push(this.mockVehicle);

    }





}
