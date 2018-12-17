import { Component, OnInit } from '@angular/core';
import { Customer} from '../../common/customer';
import { AdminRequestsService} from '../../services/admin-requests.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  addCustomer: Customer = new Customer(0,"",""); 
  constructor(private _adminService:AdminRequestsService) { }

  ngOnInit() {
  }

addNewCustomer(){
	this._adminService.createCustomer(this.addCustomer).subscribe(
		(resp) => {
			swal ("New customer added");
		}, 
		(error)=> {
			swal (error._body);
		})
	
}

}
