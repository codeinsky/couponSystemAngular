import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { HttpModule} from '@angular/http' ;
import { FormsModule} from '@angular/forms';
import { BuyCouponComponent } from './components/buy-coupon/buy-coupon.component';
import { ShowMyCouponsComponent } from './components/show-my-coupons/show-my-coupons.component';
@NgModule({
  declarations: [
    AppComponent,
    BuyCouponComponent,
    ShowMyCouponsComponent,
    
  ],
  imports: [
    FormsModule,  
    HttpModule,  
    BrowserModule , 
    RouterModule.forRoot(
    	[
    	{
    		path: "buyCoupon" , 
    		component : BuyCouponComponent
    	},
    	{
    		path : "showCoupons" , 
    		component : ShowMyCouponsComponent
    	} 
        ]
    	) 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
