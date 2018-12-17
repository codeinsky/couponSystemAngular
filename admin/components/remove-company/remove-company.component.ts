import { Component, OnInit } from '@angular/core';
import { Company} from '../../common/company'
import { AdminRequestsService} from '../../services/admin-requests.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-remove-company',
  templateUrl: './remove-company.component.html',
  styleUrls: ['./remove-company.component.css']
})
export class RemoveCompanyComponent implements OnInit {
  private byName : string; 
  private byId : number; 
  private searchById : boolean; 
  private companyUpdate : Company  = new Company (0 , "" , "" ,  "");
  constructor(private _adminService:AdminRequestsService) { 
   }

  ngOnInit() {
  }

  getCompany(){
    this._adminService.searchCompanyById(this.byId).subscribe(
      (resp) => {
       
          this.companyUpdate = resp.json();
           console.log(this.companyUpdate);
       },
          (error) => {
          swal (error._body);
       });
  }

  removeCompany(){
  	this._adminService.removeCompany(this.companyUpdate); 
  }

  updateCompany(){
  	this._adminService.updateCompany(this.companyUpdate);
  }
}
