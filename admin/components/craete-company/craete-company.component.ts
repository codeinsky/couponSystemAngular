import { Component, OnInit } from '@angular/core';
import { Company} from '../../common/company';
import { AdminRequestsService} from '../../services/admin-requests.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-craete-company',
  templateUrl: './craete-company.component.html',
  styleUrls: ['./craete-company.component.css']
})
export class CraeteCompanyComponent implements OnInit {

  addCompany:Company = new Company( 0 , "" , "" , "");
  name : any = "check";
  constructor(private _adminservice:AdminRequestsService) { 
  }

  ngOnInit() {
  }
  createCompany() {
    this._adminservice.createNewCopmany(this.addCompany).subscribe(
      (resp)=>{
        swal("Company created");
      } , 
      (error)=> {
        swal(error._body); 
      }
      )
  }
  

}
