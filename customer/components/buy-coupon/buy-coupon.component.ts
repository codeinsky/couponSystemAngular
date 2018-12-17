import { Component, OnInit } from '@angular/core';
import { CustomerServiceService} from '../../services/customer-service.service';
import { Coupon} from '../../common/coupon';
import swal from 'sweetalert2';
@Component({
  selector: 'app-buy-coupon',
  templateUrl: './buy-coupon.component.html',
  styleUrls: ['./buy-coupon.component.css']
})
export class BuyCouponComponent implements OnInit {
  private _couponList : Coupon[];
  private coupon : Coupon = new Coupon(0 , "" , "" , "" , 0 , null , "" ,0, "");	
  private id : number; 
  private filter:string; 
  constructor(private _customerService:CustomerServiceService) {  
  }

  buyCoupon(){
    this._customerService.buyCoupon(this.id).subscribe(
      (resp) => {
        swal ("Coupon purchased");
      }
        ,
       (error)=> {
         swal (error._body);
       }
      );
  	console.log("buy it");
  }

  getCoupons(){
    if (this.filter=="All") {
      this._customerService.getAllCoupon().subscribe(
        (resp)=>
        this._couponList =resp.json());
    }
    else {
      // need to create All coupons sorted by 
      this._customerService.getCouponsByType(this.filter).subscribe(
        (resp)=>
        this._couponList= resp.json());
    }
    // this._customerService.getAllCoupon();
    // this._couponList = this._customerService.coupons;

  }


  ngOnInit() {
  }

}
