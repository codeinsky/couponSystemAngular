import { Injectable } from  '@angular/core';
import { Http} from  '@angular/http';
import { Coupon} from '../common/coupon';
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  coupons : Coupon[] ;
  constructor(private _http:Http) { }

  buyCoupon(id : number){
    return 	this._http.get("http://localhost:8082/customer/purchaseCoupon/" +  id);
  	
  }

  getAllCoupon(){
    return this._http.get("http://localhost:8082/customer/getAllCoupons/");
    
  }

  getCouponsByType(reference:string ){
   console.log 
   return  this._http.get("http://localhost:8082/customer/getMyCouponsSortedByType/TYPE/" + reference);
      
  }

  getAllMyCoupons() {
    console.log("chech 2");
    return this._http.get("http://localhost:8082/customer/getAllMyCoupons");
  }

}
