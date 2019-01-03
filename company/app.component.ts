import { Component } from '@angular/core';
import { ComapnyService} from  './services/comapny.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'company';
  constructor (private _companyService:ComapnyService) {

  }
logOut(){
	console.log ("LogOut");
	this._companyService.logOutService();
}
}
