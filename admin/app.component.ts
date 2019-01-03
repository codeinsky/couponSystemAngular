import { Component } from '@angular/core';
import { AdminRequestsService} from './services/admin-requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin';
  constructor (private _adminService:AdminRequestsService) {

  }
logOut(){
	console.log ("LogOut");
	this._adminService.logOutService();
}

}
