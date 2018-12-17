import { Component, OnInit } from '@angular/core';
import { Customer} from '../../common/customer';
import { AdminRequestsService} from '../../services/admin-requests.service';
@Component({
  selector: 'app-getallcustomers',
  templateUrl: './getallcustomers.component.html',
  styleUrls: ['./getallcustomers.component.css']
})
export class GetallcustomersComponent implements OnInit {
	customers : Customer[];
  constructor(private _adminService: AdminRequestsService) { 
  	_adminService.getAllCustomers();
  }

  ngOnInit() {
  }
getAllCustomers(){
	console.log("check");
	this._adminService.getAllCustomers();
	this.customers = this._adminService.customers;
}
}
