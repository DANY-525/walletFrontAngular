import { Component } from '@angular/core';
import { vehicle } from '../../models/vehicles';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  addForm = false;
  editForm = false;
  vehicleList: vehicle[] = [];

  vehicle: vehicle = this.getEmptyVehicle();

  editingIndex: number | null = null;

  ngOnInit() {}

  getEmptyVehicle(): vehicle {
    return {
      vehicleid: Date.now(),
      owner_id: 0,
      brand: 0,
      model: 0,
      year: new Date(),
      plate_number: 0,
      vin: 0,
      color: '',
      engine_type: '',
      mileage: 0,
      created_at: new Date(),
      udpate_at: new Date()
    };
  }

  addVehicle() {
    this.addForm = true;
    this.editForm = false;
    this.vehicle = this.getEmptyVehicle();
  }

  editVehicle(index: number) {
    this.editingIndex = index;
    this.vehicle = { ...this.vehicleList[index] };
    this.editForm = true;
    this.addForm = false;
  }

  deleteVehicle(index: number) {
    this.vehicleList.splice(index, 1);
  }

  submitForm() {
    this.vehicle.created_at = new Date();
    this.vehicle.udpate_at = new Date();
    this.vehicleList.push({ ...this.vehicle });
    this.vehicle = this.getEmptyVehicle();
    this.addForm = false;
  }

  updateForm() {
    if (this.editingIndex !== null) {
      this.vehicle.udpate_at = new Date();
      this.vehicleList[this.editingIndex] = { ...this.vehicle };
      this.editForm = false;
      this.editingIndex = null;
    }
  }

  cancelForm() {
    this.addForm = false;
    this.editForm = false;
    this.vehicle = this.getEmptyVehicle();
  }
}
