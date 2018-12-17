import { Component, OnInit } from '@angular/core';
import { CustomerServiceService} from '../../services/customer-service.service';
import { Coupon} from '../../common/coupon';
@Component({
  selector: 'app-show-my-coupons',
  templateUrl: './show-my-coupons.component.html',
  styleUrls: ['./show-my-coupons.component.css']
})
export class ShowMyCouponsComponent implements OnInit {
	private _myCoupons : Coupon[];
	private filter : string ; 
  constructor(private _customerService : CustomerServiceService  ) { 
  }

  getMyCoupons() {
  	if (this.filter == "All") {
  	this._customerService.getAllMyCoupons().subscribe(
  		(resp)=>{
  		this._myCoupons = resp.json();
  	}
  		)
  } 
  else {
  	this._customerService.getCouponsByType(this.filter).subscribe(
  		(resp)=>{
  			this._myCoupons = resp.json();
  		});
  	

  }

  }



  ngOnInit() {
  }

}
