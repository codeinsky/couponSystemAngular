import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GetAllCouponsComponent } from './components/get-all-coupons/get-all-coupons.component';
import { CreateCouponComponent } from './components/create-coupon/create-coupon.component';
import { RemoveUpdateCouponComponent } from './components/remove-update-coupon/remove-update-coupon.component';
import { GetCouponByIdComponent } from './components/get-coupon-by-id/get-coupon-by-id.component';
import { RouterModule} from '@angular/router';
import { HttpModule} from '@angular/http' ;
import { ComapnyService } from './services/comapny.service';
import { FormsModule} from '@angular/forms';
import { GetCouponsByTypeComponent } from './components/get-coupons-by-type/get-coupons-by-type.component';
@NgModule({
  declarations: [
    AppComponent,
    GetAllCouponsComponent,
    CreateCouponComponent,
    RemoveUpdateCouponComponent,
    GetCouponByIdComponent,
    GetCouponsByTypeComponent,
  ],
  imports: [
    FormsModule,  
    HttpModule,  
    BrowserModule , 
    RouterModule.forRoot(
    	[
    	{
    		path: "getallcoupons" , 
    		component : GetAllCouponsComponent
    	},
    	{
    		path : "createcoupons" , 
    		component : CreateCouponComponent
    	} , 
    	{
    		path : "removeupdatecoupon" , 
    		component : RemoveUpdateCouponComponent
    	}, 
    	{
    		path : "getcouponbyid" , 
    		component : GetCouponByIdComponent
    	},
        {
            path : "sortcouponsbyname" , 
            component : GetCouponsByTypeComponent
        }
        ]
    	) 
  ],
  providers: [ComapnyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
