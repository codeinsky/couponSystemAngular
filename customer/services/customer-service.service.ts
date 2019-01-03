import { Injectable } from  '@angular/core';
import { Http} from  '@angular/http';
import { Coupon} from '../common/coupon';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  coupons : Coupon[] ;
  private _urlHeroku : String  = "https://couponsystemv1.herokuapp.com";
  private _local : String = "http://localhost:8082" ; 
  private _locaLogIn : String = "http://localhost:8082/login.html";
  private _herokuLogIn : String  = "https://couponsystemv1.herokuapp.com/login.html";  
  constructor(private _http:Http) { }

  buyCoupon(id : number){
    return 	this._http.get(this._urlHeroku + "/customer/purchaseCoupon/" +  id);
  	
  }

  getAllCoupon(){
    return this._http.get(this._urlHeroku + "/customer/getAllCoupons/");
    
  }

  getCouponsByType(reference:string ){
   console.log 
   return  this._http.get(this._urlHeroku + "/customer/getMyCouponsSortedByType/TYPE/" + reference);
      
  }

  getAllMyCoupons() {
    console.log("chech 2");
    return this._http.get(this._urlHeroku + "/customer/getAllMyCoupons");
  }

    logOutService() {
    console.log("from service");
    this._http.get(this._urlHeroku + "/logout").subscribe(
      (resp)=>{
      //  swal ("test" + resp.text());
        swal({
            title: resp.text(),
            text: "Always Welcome",
            type: "success"
            }).then(function() {
            window.location.href='https://couponsystemv1.herokuapp.com/';
          });
      });
  }


}
