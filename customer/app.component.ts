import { Component } from '@angular/core';
import {CustomerServiceService} from './services/customer-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'company';
  constructor (private _customerService:CustomerServiceService) {

  }
logOut(){
	console.log ("LogOut");
	this._customerService.logOutService();
}
}
