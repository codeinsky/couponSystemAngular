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
   private _urlHeroku : String  = "https://couponsystemv1.herokuapp.com";
   private _local : String = "http://localhost:8082" ; 
   private _locaLogIn : String = "http://localhost:8082/login.html";
   private _herokuLogIn : String  = "https://couponsystemv1.herokuapp.com/login.html";  
  constructor(private _http: Http) {
	}	

  getAllCoupons(){
  	this._http.get(this._urlHeroku + "/company/getAllCoupons").subscribe(
  		(resp)=>{
  			this.couponList = resp.json();
  		})
  }

  createCoupon(Coupon){
  	console.log(Coupon);
  	this._http.post(this._urlHeroku + "/company/createCoupon" , Coupon).subscribe(
  		(resp)=>{
  		 this.newCoupon = resp.json(); 
       swal ('Coupon ' + this.newCoupon.title  +   ' created');
  		})
  }

  getCouponById(id:number){
  	console.log(id);
  	return this._http.get(this._urlHeroku + "/company/getCouponById/" + id);
  }

  removeCoupon(id : number){
      this._http.delete(this._urlHeroku + "/company/removeCoupon/" + id).subscribe(
      (resp)=>{
       this.newCoupon = resp.json(); 
       swal ('Coupon with ID: ' + this.newCoupon +   ' removed');
      })
  }

  updateCoupon(coupon:Coupon){
    this._http.put(this._urlHeroku + "/company/updateCoupon" , coupon).subscribe(
      (resp)=>{
       this.newCoupon = resp.json(); 
       swal ('Coupon with ID : ' + this.newCoupon.id  +   ' updated');
      })
  }

  getCouponByType (filter:string){
    console.log("into byType"); 
    this._http.get(this._urlHeroku + "/company/sortCouponBy/TYPE/" + filter).subscribe(
      (resp)=>{
      this.couponList=resp.json();
      },
      (error)=>{
        swal(error._body); 
      })
  }
    logOutService() {
    console.log("from service");
    this._http.get(this._urlHeroku + "/logout").subscribe(
      (resp)=>{
      //  swal ("test" + resp.text());
        swal({
            title: resp.text(),
            text: "Message!",
            type: "success"
            }).then(function() {
            window.location.href='https://couponsystemv1.herokuapp.com/';
          });
      });
  }


}
