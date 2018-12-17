import { Injectable } from '@angular/core';
import { Http} from '@angular/http' ; 
import { Coupon} from '../common/coupon'; 
import { RequestOptions} from '@angular/http';
import swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class ComapnyService {
   private newCoupon : Coupon ; 
   public couponList : Coupon[];	
  constructor(private _http: Http) {
	}	

  getAllCoupons(){
  	this._http.get("http://localhost:8082/company/getAllCoupons").subscribe(
  		(resp)=>{
  			this.couponList = resp.json();
  		})
  }

  createCoupon(Coupon){
  	console.log(Coupon);
  	this._http.post("http://localhost:8082/company/createCoupon" , Coupon).subscribe(
  		(resp)=>{
  		 this.newCoupon = resp.json(); 
       swal ('Coupon ' + this.newCoupon.title  +   ' created');
  		})
  }

  getCouponById(id:number){
  	console.log(id);
  	return this._http.get("http://localhost:8082/company/getCouponById/" + id);
  }

  removeCoupon(id : number){
      this._http.delete("http://localhost:8082/company/removeCoupon/" + id).subscribe(
      (resp)=>{
       this.newCoupon = resp.json(); 
       swal ('Coupon with ID: ' + this.newCoupon +   ' removed');
      })
  }

  updateCoupon(coupon:Coupon){
    this._http.put("http://localhost:8082/company/updateCoupon" , coupon).subscribe(
      (resp)=>{
       this.newCoupon = resp.json(); 
       swal ('Coupon with ID : ' + this.newCoupon.id  +   ' updated');
      })
  }

  getCouponByType (filter:string){
    console.log("into byType"); 
    this._http.get("http://localhost:8082/company/sortCouponBy/TYPE/" + filter).subscribe(
      (resp)=>{
      this.couponList=resp.json();
      },
      (error)=>{
        swal(error._body); 
      })
  }

}
