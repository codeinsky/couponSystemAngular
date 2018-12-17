import { Component, OnInit } from '@angular/core';
import { Coupon} from '../../common/coupon';
import { ComapnyService} from '../../services/comapny.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-remove-update-coupon',
  templateUrl: './remove-update-coupon.component.html',
  styleUrls: ['./remove-update-coupon.component.css']
})
export class RemoveUpdateCouponComponent implements OnInit {
private couponId : number ; 	
private coupon : Coupon = new Coupon(0 , "" , "" , "" , 0 , null , "" ,0, "") ; 
  constructor(private _companyService:ComapnyService) { }

  ngOnInit() {
  }

getCouponById(){
 this._companyService.getCouponById(this.couponId).subscribe(
 	(resp)=>{
 		this.coupon = resp.json(); 
 	}
 		, 
 	(error) => {
 		swal (error._body);
 	});
 }
removeCoupon(){
	this._companyService.removeCoupon(this.couponId);
}

updateCoupon(){
	
	this._companyService.updateCoupon(this.coupon);
}
}
