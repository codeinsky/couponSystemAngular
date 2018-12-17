import { Component, OnInit } from '@angular/core';
import { Company} from '../../common/company';
import { Http} from '@angular/http';
import { AdminRequestsService} from '../../services/admin-requests.service';

@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})
export class GetAllCompaniesComponent implements OnInit { 
	companies: Company[]; 		
  constructor(private _adminservice:AdminRequestsService) { 
    _adminservice.getAllComapnies();
  	this.companies = this._adminservice.companies;
  }

  ngOnInit() {
  }

 loadAllComapnies(){
  	this._adminservice.getAllComapnies();
  	this.companies = this._adminservice.companies;
 
 }


}
