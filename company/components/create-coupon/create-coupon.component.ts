import { Component, OnInit } from '@angular/core';
import { Coupon} from '../../common/coupon';
import { ComapnyService} from '../../services/comapny.service';
@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {
	private addCoupon : Coupon = new Coupon(0 , "" , "" , "" , 0 , null , "" ,0, "");

  constructor(private _companyService:ComapnyService) { }

  ngOnInit() {
  }
createCoupon(){
	this._companyService.createCoupon(this.addCoupon);
}
}
