import { Component, OnInit } from '@angular/core';
import { Coupon} from '../../common/coupon';
import { ComapnyService} from '../../services/comapny.service';
@Component({
  selector: 'app-get-coupon-by-id',
  templateUrl: './get-coupon-by-id.component.html',
  styleUrls: ['./get-coupon-by-id.component.css']
})
export class GetCouponByIdComponent implements OnInit {
  private couponId : number ; 		
  private coupon : Coupon = new Coupon(0 , "" , "" , "" , 0 , null , "" ,0, "") ; 
  constructor(private _companyService:ComapnyService) {  }

  ngOnInit() {
  }
  getCouponById(){
  	this._companyService.getCouponById(this.couponId).subscribe(
 	(resp)=>{
 		this.coupon = resp.json();
 	});
  }
}
