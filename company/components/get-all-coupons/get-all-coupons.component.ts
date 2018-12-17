import { Component, OnInit } from '@angular/core';
import { Coupon} from '../../common/coupon'; 
import { CouponType} from '../../common/coupon-type.enum'; 
import { ComapnyService} from '../../services/comapny.service';
@Component({
  selector: 'app-get-all-coupons',
  templateUrl: './get-all-coupons.component.html',
  styleUrls: ['./get-all-coupons.component.css']
})
export class GetAllCouponsComponent implements OnInit {
  private _couponList : Coupon[] ; 
  private filter : string  ; 

  constructor(private _companyRest : ComapnyService ) { 
  	_companyRest.getAllCoupons();
    }

  ngOnInit() {
  }

  getCoupons() {
    this._couponList = this._companyRest.couponList;
  }

  onChangeGet(){
    console.log(this.filter);

       if (this.filter=="All Coupons")  {
    this._companyRest.getAllCoupons();
    console.log(this._couponList);
    }
    else{
      this._companyRest.getCouponByType(this.filter);
      
    }
  }

}
