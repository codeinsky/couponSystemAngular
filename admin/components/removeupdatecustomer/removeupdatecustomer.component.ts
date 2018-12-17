import { Component, OnInit } from '@angular/core';
import { Customer} from '../../common/customer';
import { AdminRequestsService} from '../../services/admin-requests.service'; 
import swal from 'sweetalert2';
@Component({
  selector: 'app-removeupdatecustomer',
  templateUrl: './removeupdatecustomer.component.html',
  styleUrls: ['./removeupdatecustomer.component.css']
})
export class RemoveupdatecustomerComponent implements OnInit {
  updateCustomer : Customer = new Customer(0 , "" , "");
  customerId : number; 
  constructor(private _adminService : AdminRequestsService ) { }

  ngOnInit() {
  }

  getCustomerById(){
  	this._adminService.searchCustomerById(this.customerId).subscribe(
  		(resp)=>{
  			this.updateCustomer = resp.json();
  		} , 
      (error)=>{
        swal(error._body);
      });
  }


  updateTheCustomer(){
  	this._adminService.updateCustomer(this.updateCustomer);
  	
  }

  removeCustomer(){
  	this._adminService.removeCustomer(this.updateCustomer);
  }
}
