import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Company} from '../common/company';
import { HttpHeaders} from '@angular/common/http'; 
import { RequestOptions} from '@angular/http';
import { Customer} from '../common/customer'; 
import swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AdminRequestsService {
  public companies : Company[];
  public  company : Company;
  private customer : Customer; 
  public customers : Customer[]; 
  constructor(private http: Http) {
  }

  getAllComapnies(){
  	
  	this.http.get("http://localhost:8082/admin/getAllCompanies").subscribe(
    //this.http.get("https://couponsystemv1.herokuapp.com/admin/getAllCompanies").subscribe(
      (resp)=>{
  			this.companies = resp.json();
  		})

  }

  createNewCopmany(company:Company){
    return this.http.post("http://localhost:8082/admin/createCompany" , company);
    //return this.http.post("https://couponsystemv1.herokuapp.com/admin/createCompany" , company);
  }

  searchCompanyById(id:number){
   return  this.http.get("http://localhost:8082/admin/getCompany/" + id)
   //return  this.http.get("https://couponsystemv1.herokuapp.com/admin/getCompany/" + id)
      }
    // need to create for in Server Side 
  searchCompanyByName(name:string){
    let company:Company; 
    return company; 
  }

  removeCompany(company:Company){
    let options = new RequestOptions({ 
    body: company,
  });

     this.http.delete("http://localhost:8082/admin/removeCompany" , options).subscribe(
     // this.http.delete("https://couponsystemv1.herokuapp.com/admin/removeCompany" , options).subscribe(
      (resp)=>{
        if (resp.status==200){
        swal ('Company was removed');
       }
       })
  }

  updateCompany(company:Company){
     this.http.put("http://localhost:8082/admin/companyDetailsUpdate" , company).subscribe(
    // this.http.put("https://couponsystemv1.herokuapp.com/admin/companyDetailsUpdate" , company).subscribe(  
      (resp)=>{
       this.company = resp.json(); 
       swal ('Company ' +this.company.compName  + ' was Updated');
      })

  }


// Customer Services 

  getAllCustomers(){
     this.http.get("http://localhost:8082/admin/getCustomerList").subscribe(
     // this.http.get("https://couponsystemv1.herokuapp.com/admin/getCustomerList").subscribe(
      (resp)=>{
        this.customers = resp.json();
      });
  }

  createCustomer(customer:Customer){
   return this.http.post("http://localhost:8082/admin/addCustomer" , customer); 
   // return this.http.post("https://couponsystemv1.herokuapp.com/admin/addCustomer" , customer); 
    // this.http.post("http://localhost:8082/admin/addCustomer" , customer).subscribe(
    //   (resp)=>{
    //     this.customer = resp.json(); 
    //    swal ('Customer created with ID : ' + this.customer.id );
    //   })
  }

  searchCustomerById(id:number){
    return this.http.get("http://localhost:8082/admin/getCustomer/" + id);
    //return this.http.get("https://couponsystemv1.herokuapp.com/admin/getCustomer/" + id);
  }

  updateCustomer(customer:Customer){
     this.http.put("http://localhost:8082/admin/updateCustomerDetails", customer).subscribe(
    //this.http.put("https://couponsystemv1.herokuapp.com/admin/updateCustomerDetails", customer).subscribe(  
      (resp)=> {
       this.customer = resp.json(); 
       swal ('Customer ' +this.customer.custName + ' updated');
      })
  }

  removeCustomer(customer : Customer){
    let options = new RequestOptions({
      body: customer
    });
     this.http.delete("http://localhost:8082/admin/removeCustomer" , options).subscribe(
    // this.http.delete("https://couponsystemv1.herokuapp.com/admin/removeCustomer" , options).subscribe(
      (resp)=>{
       this.customer = resp.json(); 
       swal ('Customer ' +this.customer.custName + ' removed');
      })
  }

}
